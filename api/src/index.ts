import express from "express";

const app: express.Application = express();

import indexRouter from "./routes/index";
import photosRouter from './routes/photos';

const baseUrl = '/api/v1'

app.use(baseUrl, indexRouter);
app.use(baseUrl, photosRouter);

export {app};
