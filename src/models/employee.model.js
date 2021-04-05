module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define(
    'Employee',
    {
      name: DataTypes.STRING,
      lastName: {
        type: DataTypes.STRING,
        field: 'last_name',
      },
      function: DataTypes.ENUM(['director', 'actor']),
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
      },
    },
    {
      tableName: 'employees',
    },
  );

  Employee.associate = function (models) {
    Employee.hasMany(models.Movie);

    Employee.belongsToMany(models.Movie, { through: 'MovieEmployees' });
  };

  return Employee;
};
