var Sequelize = require("sequelize");
var sequelize_config = require(__dirname + './../config/config.json')["development"];
var sequelize = new Sequelize(sequelize_config['database'], sequelize_config['username'], sequelize_config['password'], sequelize_config);
exports.Product = sequelize.define('Product', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
//    autoIncrement: true,
//    allowNull: false
  },
  name: Sequelize.STRING,
  created_at: Sequelize.DATE,
  updated_at: Sequelize.DATE
  }, {
    timestamps: false
  }
)
