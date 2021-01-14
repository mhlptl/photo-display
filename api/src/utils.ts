import multer from "multer";
import {extname, resolve} from "path";
import {pool} from "./database";

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

const fileFilter = (req: Express.Request, file: Express.Multer.File, callback: multer.FileFilterCallback): void => {
	if (file.mimetype === "image/jpeg" || file.mimetype === "image/gif" || file.mimetype === "image/png") {
		callback(null, true);
	} else {
		callback(null, false);
	}
};

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

export {storage, fileFilter, addFile, getRandomFile};
