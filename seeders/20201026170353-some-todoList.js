'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoLists",
      [
        {
          name: "Jur van Toledo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nino Christiaans",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Job Stouthart",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
    ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoLists", null, {})
  }
};
