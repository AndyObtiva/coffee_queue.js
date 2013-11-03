
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var Sequelize = require("sequelize");
var fs = require('fs');
var Order = null;
var Product = null;
var ProductOption = null;

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('CoffeeIsComingRightUp'));
app.use(express.session());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

var sequelize_config = require(__dirname + '/config/config.json');
var sequelize = new Sequelize(sequelize_config['database'], sequelize_config['username'], sequelize_config['password'], sequelize_config);
var Order = require('./models/order').Order;
var Product = require('./models/product').Product;
var ProductOption = require('./models/product_option').ProductOption;

app.get('/', routes.index);
app.get('/orders', function(req, res){
  Order.all().success(function(orders) {
    res.send(orders);
  });
});
app.get('/products', function(req, res){
  Product.all().success(function(products) {
    res.send(products);
  });
});
app.get('/product_options', function(req, res){
  ProductOption.all().success(function(product_options) {
    res.send(product_options);
  });
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
