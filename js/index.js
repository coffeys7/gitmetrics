// IMPORTS ---------------------------------------------------------------------------

const _ = require('lodash');
const fs = require('fs');
const https = require('https');
const program = require('commander');
const initialize = require('./initialize.js');
const API = require('./api.js');

//------------------------------------------------------------------------------------

initialize.run();

//------------------------------------------------------------------------------------

const githubAPI = new API('https://api.github.com/repos/coffeys7/gitmetrics-test', {
	headers: {
		'Authorization': `token ${process.env.GITHUB_ACCESS_TOKEN}`
	}
});

console.log(githubAPI.options);

githubAPI.get('/commits').then((data) => {
	console.log('SUCCESS\n', JSON.stringify(data));
}, (error) => {
	console.log('ERROR\n', error);
});
