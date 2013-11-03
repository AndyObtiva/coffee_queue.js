var Sequelize = require("sequelize");
var sequelize_config = require(__dirname + './../config/config.json');
var sequelize = new Sequelize(sequelize_config['database'], sequelize_config['username'], sequelize_config['password'], sequelize_config);
var ProductOption = sequelize.define('ProductOption', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
//    autoIncrement: true,
//    allowNull: false
  },
  name: Sequelize.STRING,
  product_id: Sequelize.INTEGER,
  price_cents: Sequelize.INTEGER,
  created_at: Sequelize.DATE,
  updated_at: Sequelize.DATE,
  timestamps: false
})
