import express from "express";
import config from "config";
import connect from "./utils/connect";
import logger from "./utils/logger";
import routes from "./routes";
import log from "./middleware/log";

const port = config.get<number>("port");

const app = express();

app.use(express.json());

app.use("/api/todos", log);

app.listen(port, async () => {
    logger.info(`App is running at http://localhost:${port} `);
    await connect();

    routes(app);
})
