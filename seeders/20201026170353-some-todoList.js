'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoLists",
      [
        {
          name: "Jur van Toledo",
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nino Christiaans",
          user_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Job Stouthart",
          user_id: 3,
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
