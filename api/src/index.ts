import express from "express";
import cors from "cors";
import helmet from "helmet";
import { createTable } from "./utils";

const app: express.Application = express();
app.use(cors());
app.use(helmet());

createTable();

import indexRouter from "./routes/index";
import photosRouter from "./routes/photos";

const baseUrl = "/api/v1";

app.use(baseUrl, indexRouter);
app.use(baseUrl, photosRouter);

export {app};
