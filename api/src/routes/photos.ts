import express from "express";
import multer from "multer";
import {storage, fileFilter, addFile, getRandomFile} from "../utils";
import * as path from "path";

const router: express.Router = express.Router();

const upload: multer.Multer = multer({storage: storage, fileFilter: fileFilter});

router.post("/photos/upload", upload.single("image"), async (req: express.Request, res: express.Response) => {
	if (req.file === undefined) {
		res.status(404).json({message: "error, please try again"});
	} else {
		await addFile(req.file.filename);
		res.status(201).json({message: "Photo Uploaded"});
	}
});

router.post("/photos/random", async (req: express.Request, res: express.Response) => {
	const file = await getRandomFile();
	if (file === undefined) {
		res.status(404).json({message: "no filename found"});
	} else {
		res.sendFile(path.resolve(`images/${file}`));
	}
});

export default router;
