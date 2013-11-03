var Product = require('./../models/product').Product;

/*
 * GET users listing.
 */

exports.index = function(req, res){
  Product.all().success(function(products) {
    res.send(products);
  });
};