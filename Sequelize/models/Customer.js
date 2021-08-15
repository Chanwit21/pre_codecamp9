module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    "Customer",
    {
      name: {
        type: DataTypes.STRING(255),
      },
      age: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tebleName: "customers",
      timestamps: false,
    }
  );

  model.associate = (models) => {
    model.belongsToMany(models.Account, {
      through: models.Owns,
      foreignKey: "customers_id",
    });
  };
  return model;
};
