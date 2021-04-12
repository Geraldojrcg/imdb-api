module.exports = (sequelize, DataTypes) => {
  const MovieEmployees = sequelize.define(
    'MovieEmployees',
    {
      movieId: {
        type: DataTypes.INTEGER,
        field: 'movie_id',
        references: {
          model: 'Movie',
          key: 'id',
        },
      },
      employeeId: {
        type: DataTypes.INTEGER,
        field: 'employee_id',
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

  MovieEmployees.associate = function associate(models) {
    models.MovieEmployees.belongsTo(models.Movie, {
      foreignKey: 'movieId',
      as: 'movie',
    });

    models.MovieEmployees.belongsTo(models.Employee, {
      foreignKey: 'employeeId',
      as: 'actor',
    });
  };

  return MovieEmployees;
};
