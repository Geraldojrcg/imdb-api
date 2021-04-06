module.exports = (sequelize, DataTypes) => {
  const MovieEmployees = sequelize.define(
    'MovieEmployees',
    {
      movieId: {
        type: DataTypes.INTEGER,
        ield: 'movie_id',
        references: {
          model: 'Movie',
          key: 'id',
        },
      },
      employeeId: {
        type: DataTypes.INTEGER,
        ield: 'employee_id',
        references: {
          model: 'Employee',
          key: 'id',
        },
      },
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
      tableName: 'movie_employees',
    },
  );
  return MovieEmployees;
};
