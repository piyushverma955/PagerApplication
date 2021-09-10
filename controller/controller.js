let e = {};
const services = require("../service/service");
//const Team = require("../domaiModel/team");

e.createTeam = async (req, res) => {
    try {
        let { team, developers } = req.body || {};
        const teamCreated = await services.createTeam(team);
        await services.createDeveloper(developers, teamCreated.id);
        res.status(200).json({ message: "team created successfully" })
    } catch (e) {
        res.status(200).json(e.message);
    }
}

e.notify = async (req, res) => {
    try {
        let { team_id, message } = req.body || {};
        let developer = await services.findDeveloperByTeamId(team_id);
        if (!developer) throw new Error("developer not found")
        await services.notify(developer.phone_number, message);
        res.status(200).json({ message: "notification send successfully" })
    } catch (e) {
        res.status(200).json(e.message);
    }
}


module.exports = e;

