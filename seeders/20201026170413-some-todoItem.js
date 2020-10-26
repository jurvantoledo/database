'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          task: "working",
          deadline: "today",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "mastrubating",
          deadline: "10 minutes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "coding",
          deadline: "monday morning",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
    ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoItems", null, {})
  }
};
