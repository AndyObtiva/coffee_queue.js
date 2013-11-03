module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable(
      'orders',
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        customer_name: DataTypes.STRING,
        product_id: DataTypes.INTEGER,
        product_option_id: DataTypes.INTEGER,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE
      }
    )
    done()
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable('orders')
    done()
  }
}
