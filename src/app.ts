import express, { json} from "express";
import { routes } from "./routes/routes";

export default function creatApp(){
    const app = express();

    app.use(json());

    app.use("/api",routes)

    return app;
}
