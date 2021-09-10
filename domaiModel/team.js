let { attributes } = require('structure')

const Team = attributes({
    name: { type: String, require: true }
});

module.exports = Team;