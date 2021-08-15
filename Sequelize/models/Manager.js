module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    "Manager",
    {
      name: {
        type: DataTypes.STRING(255),
      },
      experience: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "managers",
      timestamps: false,
    }
  );

  model.associate = (models) => {
    model.hasOne(models.Branch, { foreignKey: "manager_id" });
  };

  return model;
};
