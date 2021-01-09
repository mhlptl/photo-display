import multer from 'multer';
import {extname} from 'path';
import fs from 'fs/promises';

interface FileData {
	files: string[]
}

const storage: multer.StorageEngine = multer.diskStorage({
	destination: (req: Express.Request, file: Express.Multer.File, callback: (error: Error | null, destination: string) => void) => {
		callback(null, 'images');
	},
	filename: (req: Express.Request, file: Express.Multer.File, callback: (error: Error | null, destination: string) => void) => {
		callback(null, Date.now() + extname(file.originalname));
	}
});

const fileFilter = (req: Express.Request, file: Express.Multer.File, callback: multer.FileFilterCallback): void => {
	if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/gif' || file.mimetype === 'image/png') {
		callback(null, true);
	}
	else {
		callback(null, false);
	}
};

const openFile = async(): Promise<FileData> => {
	const rawData = await fs.readFile(__dirname + '/files.json');
	const data: FileData = JSON.parse(rawData.toString());
	return data;
}

const saveJSON = async(data: FileData) => {
	fs.writeFile(__dirname + '/files.json', JSON.stringify(data), 'utf-8');
}

const getRandomFile = async(): Promise<string> => {
	const data = await openFile();
	const numFiles = data.files.length;
	return data.files[Math.floor(Math.random() * numFiles)];
}

const addFile = async(path: string): Promise<FileData> => {
	const data = await openFile();
	data.files.push(path);
	saveJSON(data);
	return data;
}

export {storage, fileFilter, addFile, getRandomFile};
