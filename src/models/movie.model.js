module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define(
    'Movie',
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      language: DataTypes.STRING,
      duration: DataTypes.INTEGER,
      categoryId: {
        type: DataTypes.INTEGER,
        field: 'category_id',
      },
      directorId: {
        type: DataTypes.INTEGER,
        field: 'director_id',
      },
      capeUrl: {
        type: DataTypes.STRING,
        field: 'cape_url',
      },
      releaseDate: {
        type: DataTypes.DATE,
        field: 'release_date',
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
      tableName: 'movies',
    },
  );

  Movie.associate = function (models) {
    Movie.belongsToMany(models.User, { through: 'MovieRating' });

    Movie.belongsToMany(models.Employee, { through: 'MovieEmployees' });

    Movie.belongsTo(models.MovieCategory, {
      foreignKey: 'categoryId',
    });

    Movie.belongsTo(models.Employee, {
      foreignKey: 'directorId',
    });
  };

  return Movie;
};
