// IMPORTS ---------------------------------------------------------------------------

const _ = require('lodash');
const config = require('./config.js');

// -----------------------------------------------------------------------------------

//
// Check process environment to ensure all required environment variables (from config.json)
// are defined
//
const _validateEnvironment = () => {
	_.get(config.retrieve(), 'environment.required', []).forEach((v) => {
		if (_.isNil(process.env[v])) {
			console.log(`\nError: Required environment variable "${v}" is not defined\n`);
			process.exit();
		}
	});
}

module.exports.run = function() {
	_validateEnvironment();
};