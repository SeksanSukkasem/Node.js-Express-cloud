const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require("path");

const app = express();
const port = process.env.port || 5000;

app.use(morgan('combined'));

app.use(express.static(path.join(__dirname,"./public/")))

// app.get("/",(req,res)=> {
//     res.send('Hello Hello');
// });

app.listen(port, async ()=> {
    const chalk = await import('chalk');
    debug("Listening on port"+ chalk.default.red(port));
});

