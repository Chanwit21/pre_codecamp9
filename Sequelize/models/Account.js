module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    "Account",
    {
      value: {
        type: DataTypes.FLOAT,
      },
    },
    {
      tableName: "account",
      timestamps: false,
    }
  );
  model.associate = (models) => {
    model.belongsTo(models.Branch, { forrignKey: "branch_id" });
    model.belongsToMany(models.Customer, {
      through: models.Owns,
      foreignKey: "account_id",
    });
  };

  return model;
};
