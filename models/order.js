var Sequelize = require("sequelize");
var sequelize_config = require(__dirname + './../config/config.json');
var sequelize = new Sequelize(sequelize_config['database'], sequelize_config['username'], sequelize_config['password'], sequelize_config);
var Order = sequelize.define('Order', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
//    autoIncrement: true,
//    allowNull: false
  },
  customer_name: Sequelize.STRING,
  product_id: Sequelize.INTEGER,
  product_option_id: Sequelize.INTEGER,
  created_at: Sequelize.DATE,
  updated_at: Sequelize.DATE,
  timestamps: false
})