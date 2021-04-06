'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('movie_ratings', 'updated_at', {
      allowNull: false,
      type: Sequelize.DATE,
    });
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('movie_ratings', 'updated_at');
  },
};
