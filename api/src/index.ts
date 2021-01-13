import express from "express";
import cors from "cors";

const app: express.Application = express();
app.use(cors());

import indexRouter from "./routes/index";
import photosRouter from './routes/photos';

const baseUrl = '/api/v1'

app.use(baseUrl, indexRouter);
app.use(baseUrl, photosRouter);

export {app};
