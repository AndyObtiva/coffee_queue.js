module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable(
      'products',
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        name: DataTypes.STRING,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE
      }
    )
    done()
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable('products')
    done()
  }
}
