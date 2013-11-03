var Order = require('./../models/order').Order;

/*
 * GET users listing.
 */

exports.index = function(req, res){
  Order.all().success(function(orders) {
    res.send(orders);
  });
};