// IMPORTS ---------------------------------------------------------------------------

const fs = require('fs');

// -----------------------------------------------------------------------------------

module.exports.retrieve = function() {
	return JSON.parse(fs.readFileSync('config.json'));
};