module.exports = (sequelize, DataTypes) => {
  const MovieRating = sequelize.define(
    'MovieRating',
    {
      rating: DataTypes.INTEGER,
      movieId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Movie',
          key: 'id',
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'User',
          key: 'id',
        },
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
      },
    },
    {
      tableName: 'movie_ratings',
    },
  );
  return MovieRating;
};
