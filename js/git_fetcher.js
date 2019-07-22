const API = require('./api.js');
const _ = require('lodash');

class GitFetcher {

  constructor(options = { repo, org, token, pageCount, resourceType, branch }) {
    this.options = options;
    this.api = new API(`https://api.github.com/repos/${options.org}/${options.repo}`, {
      headers: {
        'Authorization': `token ${options.token}`
      }
    });
  }

  buildPath(pageNumber) {
    const { resourceType, branch } = this.options;
    return `/${resourceType}?sha=${branch}&state=all&per_page=100&page=${pageNumber}`;
  }

  run() {
    const that = this;
    return new Promise((resolve, reject) => {
      Promise.all(_.chain(that.options.pageCount).times().map(i => that.api.get(that.buildPath(i+1))).value())
      	.then((responses) => {
          resolve(_.flatten(responses));
      	}).catch((err) => {
      		reject(err);
      	});
    });
  }

}

module.exports = GitFetcher;
