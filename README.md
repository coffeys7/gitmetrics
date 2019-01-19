## Gitmetrics

Testing with github API for collecting project metrics

### Resources

- [Github API (v3)](https://developer.github.com/v3/)

### Questions

See answers [here](#answers-to-questions)

**Node**

- [x] How to use npm with "vanilla" node project?
- [x] How to read command line args?

**Github API**

- [Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)

- [ ] How to authorize access to org & private repos?
- [ ] How frequently to "sync"data with API (webhooks, polling, etc.)?

### Metrics

**Pull:** What data can be pulled?

- [x] Commits ([docs](https://developer.github.com/v3/repos/commits/))
- [x] Issues ([docs](https://developer.github.com/v3/issues/))
- [x] Pull requests ([docs](https://developer.github.com/v3/pulls/))
- [x] PR status checks ([docs](https://developer.github.com/v3/repos/statuses/))
- [x] Milestones ([docs](https://developer.github.com/v3/issues/milestones/))
- [x] Labels ([docs](https://developer.github.com/v3/issues/labels/))
- [x] Branches ([docs](https://developer.github.com/v3/repos/branches/))
- [x] PR review comments ([docs](https://developer.github.com/v3/pulls/comments/))
- [x] PR review requests ([docs](https://developer.github.com/v3/pulls/review_requests/))
- [x] PR/Issue comments PR/Issue comments ([docs](https://developer.github.com/v3/issues/comments/))
- [x] Search ([docs](https://developer.github.com/v3/search/))

**Push:** What data can be pushed?

- [x] PR/Issue comments ([docs](https://developer.github.com/v3/issues/comments/))
- [x] Open/close issues ([docs](https://developer.github.com/v3/issues/))
- [x] Open/close/merge pull requests ([docs](https://developer.github.com/v3/pulls/))

---

### Answers to Questions

**How to use npm with "vanilla" node project?**

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

**How to read command line args?**

The [`commander.js`](https://github.com/tj/commander.js/) npm module looks like an easy to use package for managing command line arguments.

Install with:

```
$ npm install commander --save
```

**How to authorize access to org & private repos?**

```
...
...
```

**How frequently to "sync"data with API (webhooks, polling, etc.)?**

```
...
...
```
