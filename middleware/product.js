const PRODUCT = require("../models/product");

exports.products = function() {
    return (req, res, next) => {
        PRODUCT.find({ }, (err,products) => {
            if (err) {
                console.log(err);
            } else {
                res.results = products;
                next();
            }
        });
    }
}