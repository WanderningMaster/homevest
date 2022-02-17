'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await queryInterface.sequelize.query(
        `select id from "user";`
    );
    const companies = [];
    for(let i = 0; i<users[0].length; i++){
      const company = {
          userId: users[0][i].id,
          companyName: 'companyName',
          companyLogo: 'https://wallpaperaccess.com/full/1859246.jpg',
          dateOfEstablishment: new Date(),
          website: 'website',
          address: 'address',
          phoneNumber: 'phoneNumber',
          documents: 'documents',
      };
      companies.push(company);
    }
    await queryInterface.bulkInsert('company', companies);
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('company', null, {});
     
  }
};
