module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      language: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      duration: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      cape_url: {
        type: Sequelize.STRING,
      },
      release_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: { model: 'movie_categories', key: 'id' },
        allowNull: false,
      },
      director_id: {
        type: Sequelize.INTEGER,
        references: { model: 'employees', key: 'id' },
        allowNull: false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('movies');
  },
};
