module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    "Branch",
    {
      name: {
        type: DataTypes.STRING(255),
      },
      size: {
        type: DataTypes.STRING(2),
      },
    },
    {
      tableName: "branch",
      timestamps: false,
    }
  );

  model.associate = (models) => {
    model.belongsTo(models.Manager, { foreignKey: "manager_id" });
    model.hasMany(models.Account, { forrignKey: "branch_id" });
  };

  return model;
};
