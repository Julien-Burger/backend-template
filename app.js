const express = require("express");
const app = express();
const path = require("path");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
require("./_modulesAlias");
require("dotenv").config();

const { limiter } = require("@middlewares");

//#region Config
app.disable("x-powered-by");
// 1000 requêtes par 15 minutes pour tous les endpoints
app.use(limiter(1000));
app.use(express.json());
app.use(
    helmet({
        crossOriginResourcePolicy: {
            policy: "cross-origin",
        },
    })
);
app.use(morgan("dev"));
app.use(
    cors({
        origin: process.env.NODE_ENV === "development" ? "*" : process.env.FRONTEND_URL,
        allowedHeaders: ["Content-Type", "Authorization"],
        maxAge: 1800,
    })
);

app.use("/public", express.static(path.join(__dirname, "public")));
//#endregion

//#region Routes
const { exampleRoutes } = require("@routes");

app.use("/example", exampleRoutes);
//#endregion

module.exports = app;
