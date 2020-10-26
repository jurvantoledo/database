'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Jur van Toledo",
          email: "jurvantoledo@live.nl",
          phone: 1234567,
          password: 1111,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nino Christiaans",
          email: "nino.hoffmans@gmail.com",
          phone: 1234567,
          password: 1111,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Job Stouthart",
          email: "job.stouthart@gmail.com",
          phone: 1234567,
          password: 1111,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
    ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {})
  }
};
