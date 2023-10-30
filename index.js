import express from "express";
import pkg from 'body-parser';
import router from "./routes/router.js";

import sequelize from "./db/db.js";
import relacionamento from "./models/relacionamento.js";

const app = express();
const { json, urlencoded } = pkg;

app.use(json());
app.use(urlencoded({ extended: true }));
app.use("/", router);

(async () => {
    try {
        relacionamento.relacionamentos();
        await sequelize.sync();
        app.listen(3000, function () {
            console.log("Listening to port 3000");
        });
    } catch (err) {
        console.log(err);
    }
})();