let e = {};
const db = require("../models");
const Team = db.team;
const Developer = db.developer;
const axios = require('axios');
let url = 'https://run.mocky.io/v3/fd99c100-f88a-4d70-aaf7-393dbbd5d99f'

e.createTeam = async (payload) => {
    let { name } = payload;
    let team = await Team.findOne({ where: { name: name } });
    if (team) return team.dataValues;
    team = await Team.create(payload);
    return team ? team.dataValues : null;
}

e.createDeveloper = async (developers, id) => {
    for (let i = 0; i < developers.length; i++) {
        let developer = developers[i];
        developer.team_id = id;
        await Developer.create(developer);
    }
    return "success";
}

e.findDeveloperByTeamId = async (team_id) => {
    let developer = await Developer.findOne({ where: { team_id: team_id } })
    return developer ? developer.dataValues : null
}

e.notify = async (phone_number, message) => {
    let body = { phone_number, message };
    console.log(body);
    let res = await axios.post(url, body);
    console.log(res.status);
    if (res.status == 200) {
        return { message: "Notification sent successfully" }
    } else {
        throw new Error("Something went wrong");
    }
}

module.exports = e;

