"use strict";

// 모듈
const express = require("express");
// const bodyParser = require("body-parser");
// const dotenv = require("dotenv");
// dotenv.config();

const app = express();

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅

app.set("views", "./src/views");
app.set("view engine", "ejs");

// 미들웨어
app.use("/", home);

module.exports = app;
