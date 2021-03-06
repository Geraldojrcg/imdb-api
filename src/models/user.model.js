const { encryptor } = require('../helpers');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      passwordResetToken: {
        type: DataTypes.STRING,
        field: 'password_reset_token',
      },
      role: DataTypes.ENUM(['admin', 'client']),
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
      tableName: 'users',
    },
  );

  User.associate = function associate(models) {
    models.User.belongsToMany(models.Movie, {
      through: 'MovieRating',
      foreignKey: 'userId',
    });

    models.User.hasMany(models.MovieRating, {
      foreignKey: 'userId',
    });
  };

  User.beforeSave(async (user, options) => {
    const password = await encryptor.hashPassword(user.password);
    if (user.changed('password')) {
      Object.assign(user, { password });
    }
    return user;
  });

  User.prototype.toJSON = function () {
    const user = { ...this.get() };
    return Object.fromEntries(Object.entries(user).filter(([key]) => !['password'].includes(key)));
  };

  return User;
};
