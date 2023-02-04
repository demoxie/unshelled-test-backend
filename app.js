import cookieParser from "cookie-parser";
import morgan from "morgan";
import appRoutes from "./src/routes/index.js";
import express from 'express'
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(morgan('combined'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(appRoutes.orderRoute)
app.use(appRoutes.sellerRoute)
app.use(appRoutes.productRoute)

export default app;
