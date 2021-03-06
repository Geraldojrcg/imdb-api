module.exports = (sequelize, DataTypes) => {
  const MovieCategory = sequelize.define(
    'MovieCategory',
    {
      name: DataTypes.STRING,
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
      tableName: 'movie_categories',
    },
  );

  MovieCategory.associate = function associate(models) {
    models.MovieCategory.hasMany(models.Movie, {
      foreignKey: 'categoryId',
      as: 'movies',
    });
  };

  return MovieCategory;
};
