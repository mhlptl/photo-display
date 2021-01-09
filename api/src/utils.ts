import multer from 'multer';
import {extname} from 'path';

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
}

export {storage, fileFilter};
