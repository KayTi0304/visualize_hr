const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello world1");
});

const employee = require("./routes/api/employee");
const company = require("./routes/api/company");
const employs = require("./routes/api/employs");
const lesson = require("./routes/api/lesson");
const modules = require("./routes/api/module");
const offers = require("./routes/api/offers");
const takes = require("./routes/api/takes");

const db = require("./config/database");

app.use("/api/employee", employee);
app.use("/api/company", company);
app.use("/api/employs", employs);
app.use("/api/lesson", lesson);
app.use("/api/module", modules);
app.use("/api/offers", offers);
app.use("/api/takes", takes);

const port = process.env.PORT || 5000;

db.sync()
    .then(() => {
        app.listen(port, () => console.log(`Server started on port ${port}`));
    })
    .catch((err) => {
        console.log(err);
    });