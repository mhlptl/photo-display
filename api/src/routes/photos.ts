import express from 'express';
import multer from 'multer';
import {storage, fileFilter} from '../utils';

const router : express.Router = express.Router();

const upload: multer.Multer = multer({storage: storage, fileFilter: fileFilter});

router.post('/photos/upload', upload.single('image'), (req: express.Request, res: express.Response) => {
	// console.log(req.file);
	res.send('GOT IT');
});

export default router;
