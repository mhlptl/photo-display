import express from "express";

const app: express.Application = express();

const PORT: number = parseInt(process.env.PORT || '5000');

import indexRouter from "./routes/index";
import photosRouter from './routes/photos';

const baseUrl = '/api/v1'

app.use(baseUrl, indexRouter);
app.use(baseUrl, photosRouter);

app.listen(PORT, () => {
	console.log(`Server listening at PORT=${PORT}`);
});
