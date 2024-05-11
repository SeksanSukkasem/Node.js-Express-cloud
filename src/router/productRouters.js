
const express = require('express');
const productRouters = express.Router();
const products = require('../data/products.json');

productRouters.route("/").get((req, res) => {
    res.render("products", {
        products
    });
});
productRouters.route("/:id").get((req, res) => {
    const id = req.params.id;
    res.render("product", {
        product: products[id]
    })
});

module.exports = productRouters;