## Gitmetrics

Testing with github API for collecting project metrics

### Resources

- [Github API (v3)](https://developer.github.com/v3/)

### Questions

**Node**

- How to use npm with "vanilla" node project
- How to read command line args

**Github API**

- How to authorize access to org & private repos
- How frequently to 'sync' data / would webhooks be feasible?

### Metrics

**Pull:** What data can be pulled?

- [ ] Issues
- [ ] Pull requests
- [ ] PR status checks (CI)
- [ ] Source code diff
- [ ] Milestones
- [ ] Labels
- [ ] Branches
- [ ] PR Reviews
- [ ] PR/Issue comments

**Push:** What data can be pushed?

- [ ] PR/Issue comments
- [ ] Open/close issues
- [ ] Open/close/merge pull requests

### Answers to Questions

**How to use npm with "vanilla" node project**

Just need to run `npm init` & follow the installation instructions which creates a `package.json` file in the root directory

```
➜  gitmetrics git:(master) npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (gitmetrics)
version: (1.0.0) 0.0.1
description: Collect git repo metrics through the Github API
entry point: (index.js) js/index.js
test command:
git repository: (https://github.com/coffeys7/gitmetrics.git)
keywords:
author: Sam Coffey
license: (ISC)
About to write to /Users/samcoffey/Documents/development/projects/node/gitmetrics/package.json:
```
