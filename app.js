const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require("path");
const nodemon = require('nodemon');
const productRouter = express.Router();

const app = express();
const port = process.env.port || 5000;

app.use(morgan('combined'));

productRouter.route("/").get((req,res) => {
    res.send("Hello Product");
})


productRouter.route("/1").get((req,res) => {
    res.render("index-products")
})


app.use('/Products', productRouter);

app.use(express.static(path.join(__dirname,"./public/")))
app.set("views","./src/views");
app.set("view engine","ejs");


app.get("/",(req,res)=> {
    res.render('index',{username: 'Seksan+' , customer:['Kiti','seksan']});
});

app.listen(port, async ()=> {
    const chalk = await import('chalk');
    debug("Listening on port"+ chalk.default.green(port));
});

