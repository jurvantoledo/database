'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "tags",
      [
        {
          title: "It's a tag",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Another tag",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Another one",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
    ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("tags", null, {})
  }
};
