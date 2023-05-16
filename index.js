const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const path = require('path');
const connectDatabase = require("./src/config/db")
const AdsRouter = require("./src/Routes/AdsRoutes")
const fs = require("fs")
var bodyParser = require('body-parser');
connectDatabase()
app.use(cookieParser());

app.use(cors())

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


app.use("/videos", express.static(path.join(__dirname, './src/ads')));
// app.use(express.static('public'))

app.use('/api',AdsRouter)



app.get("/", (req, res) => {
    res.json({ message: "Welcome to application." });
});

 app.listen(9000, () => {
    console.log(`Your application started at PORT: 9000 mode.
    Click here open in browser http://localhost:9000`);
});

module.exports = app;