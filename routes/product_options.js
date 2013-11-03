var ProductOption = require('./../models/product_option').ProductOption;

/*
 * GET users listing.
 */

exports.index = function(req, res){
  ProductOption.all().success(function(product_options) {
    res.send(product_options);
  });
};