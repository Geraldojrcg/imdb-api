module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define(
    'Employee',
    {
      name: DataTypes.STRING,
      lastName: {
        type: DataTypes.STRING,
        field: 'last_name',
      },
      ssn: DataTypes.INTEGER,
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

  Employee.associate = function associate(models) {
    models.Employee.hasMany(models.Movie, {
      foreignKey: 'directorId',
    });

    models.Employee.belongsToMany(models.Movie, {
      through: 'MovieEmployees',
      foreignKey: 'employeeId',
      as: 'movies',
    });
  };

  return Employee;
};
