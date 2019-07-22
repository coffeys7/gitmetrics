// IMPORTS ---------------------------------------------------------------------------

const _ = require('lodash');
const fs = require('fs');
const https = require('https');
const initialize = require('./initialize.js');
const program = require('commander');
const mkdirp = require('mkdirp');
const GitFetcher = require('./git_fetcher.js');

//------------------------------------------------------------------------------------

initialize.run();

//------------------------------------------------------------------------------------

program
  .option('-r, --repo <repo>', 'repository to pull from')
  .option('-o, --org <org>', 'org repository owner')
  .option('-n, --page-count <count>', 'number of pages (100/page)', 50)
	.option('-t, --resource-type <type>', 'resource type', 'commits')
	.option('-b, --branch <branch>', 'branch name', 'master');

program.parse(process.argv);

//------------------------------------------------------------------------------------

mkdirp(`data/${program.repo}`, (err) => {
	if (err) {
		console.error(err);
		process.exit();
	}
});

const options = {
	repo: program.repo,
	org: program.org,
	token: process.env.GITHUB_ACCESS_TOKEN,
	pageCount: parseInt(program.pageCount),
	resourceType: program.resourceType,
	branch: program.branch
};

new GitFetcher(options).run().then((results) => {
	let formattedResults = JSON.stringify(results, null, "\t");
	fs.writeFile(`data/${program.repo}/${program.repo}-${program.resourceType}.json`, formattedResults, 'utf8', () => {
		console.log('...done\n');
		console.log(`Retrieved ${results.length} total ${program.resourceType}\n`);
	});
}).catch((err) => {
	console.log('Error: Unable to load resource', err);
});
