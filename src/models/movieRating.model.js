module.exports = (sequelize, DataTypes) => {
  const MovieRating = sequelize.define(
    'MovieRating',
    {
      rating: DataTypes.INTEGER,
      movieId: {
        type: DataTypes.INTEGER,
        field: 'movie_id',
        references: {
          model: 'Movie',
          key: 'id',
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        field: 'user_id',
        references: {
          model: 'User',
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
      tableName: 'movie_ratings',
    },
  );

  MovieRating.associate = function associate(models) {
    models.MovieRating.belongsTo(models.Movie, {
      foreignKey: 'movieId',
      as: 'movie',
    });

    models.MovieRating.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });
  };

  return MovieRating;
};
