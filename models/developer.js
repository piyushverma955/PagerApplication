module.exports = (sequelize, Sequelize) => {
    const Developer = sequelize.define("developer", {
        name: {
            type: Sequelize.STRING
        },
        team_id: {
            type: Sequelize.STRING
        },
        phone_number: {
            type: Sequelize.STRING
        }

    });

    return Developer;
};