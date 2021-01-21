import express from "express";
import multer from "multer";
import {storage, fileFilter, addFile, getRandomFile, encode} from "../utils";
import * as path from "path";

const router: express.Router = express.Router();

const upload: multer.Multer = multer({storage: storage, fileFilter: fileFilter});

/**
 * client uploads image to server
 * server saves image to filesystem and saves filename in database
 */
router.post("/photos/upload", upload.single("image"), async (req: express.Request, res: express.Response) => {
	if (req.file === undefined) {
		res.sendStatus(400).json({message: "error, please try again"});
	} else {
		await addFile(req.file.filename);
		res.sendStatus(201).json({message: "Photo Uploaded"});
	}
});

/**
 * server sends image to client if an image exists
 */
router.post("/photos/random", async (req: express.Request, res: express.Response) => {
	const filename = await getRandomFile();
	if (filename === undefined) {
		res.sendStatus(204).json({message: "no filename found"});
	} else {
		try {
			const data = await encode(path.resolve('images', filename));
			res.send({image: data});
		}
		catch(e) {
			// eslint-disable-next-line no-extra-parens
			console.error((<Error>e).message);
			res.sendStatus(204);
		}
	}
});

export default router;
