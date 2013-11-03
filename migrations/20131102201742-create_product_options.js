module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable(
      'product_options',
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        name: DataTypes.STRING,
        product_id: DataTypes.INTEGER,
        price_cents: DataTypes.INTEGER,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE
      }
    )
    done()
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable('product_options')
    done()
  }
}
