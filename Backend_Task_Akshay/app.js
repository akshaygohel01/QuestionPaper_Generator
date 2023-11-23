const express = require('express');
const generatePaper = require('./generatePaper');
const { validator } = require('./util');
const app = express();

app.use(express.json());
app.use(express.static("static"));

let port = process.env.PORT || 2000;

app.post("/generate", validator, generatePaper);

app.listen(port, () => {
    console.log("server started at port http://localhost:" + port);
})