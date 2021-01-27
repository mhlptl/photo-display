import multer from "multer";
import {extname, resolve} from "path";
import {pool} from "./database";
import {readFile} from 'fs/promises';
import {lookup} from 'mime-types';

interface FileData {
	filename: string;
}

const storage: multer.StorageEngine = multer.diskStorage({
	destination: (
		req: Express.Request,
		file: Express.Multer.File,
		callback: (error: Error | null, destination: string) => void
	) => {
		callback(null, resolve('images'));
	},
	filename: (
		req: Express.Request,
		file: Express.Multer.File,
		callback: (error: Error | null, destination: string) => void
	) => {
		callback(null, Date.now() + extname(file.originalname));
	}
});

/**
 * 
 * checks if filetype is an accepted type
 * 
 * @param req Express Request
 * @param file file from client
 * @param callback callback function
 */
const fileFilter = (req: Express.Request, file: Express.Multer.File, callback: multer.FileFilterCallback): void => {
	if (file.mimetype === "image/jpeg" || file.mimetype === "image/gif" || file.mimetype === "image/png") {
		callback(null, true);
	} else {
		callback(null, false);
	}
};


/**
 * get random filename from database if one exists
 */
const getRandomFile = async (): Promise<string | undefined> => {
	const client = await pool.connect();
	try {
		const res = await client.query("SELECT filename FROM photos ORDER BY random() LIMIT 1;");
		const current: FileData = res.rows[0];
		return current.filename;
	} catch (e) {
		// eslint-disable-next-line no-extra-parens
		console.error((<Error>e).message);
	} finally {
		client.release();
	}
};

/**
 * 
 * stores filename in database for future query
 * 
 * @param filename name of image
 */
const addFile = async (filename: string): Promise<void> => {
	const client = await pool.connect();
	try {
		await client.query("INSERT INTO photos(filename) VALUES($1);", [filename]);
	} catch (e) {
		// eslint-disable-next-line no-extra-parens
		console.error((<Error>e).message);
	} finally {
		client.release();
	}
};

/**
 * 
 * encodes image to base64 to be sent to client
 * 
 * @param filename name of image
 */
const encode = async(filename: string): Promise<string> => {
	const bitmap = await readFile(filename);
	const type = lookup(filename);
	return `data:${type};base64,${bitmap.toString('base64')}`;
}

/**
 * creates table if not already created
 * NOTE: only runs on server startup
 */
const createTable = async(): Promise<void> => {
	try {
		await pool.query("CREATE TABLE IF NOT EXISTS photos (filename varchar(50) NOT NULL);");
	}
	catch (e) {
		// eslint-disable-next-line no-extra-parens
		console.error((<Error>e).message);
	}
}

const clearTable = async(): Promise<void> => {
	try {
		await pool.query("TRUNCATE photos;");
	}
	catch (e) {
		// eslint-disable-next-line no-extra-parens
		console.error((<Error>e).message);
	}
}

export {storage, fileFilter, addFile, getRandomFile, encode, createTable, clearTable};
