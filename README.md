## Gitmetrics

Testing with github API for collecting project metrics

### Resources

- [Github API (v3)](https://developer.github.com/v3/)

### Caching

Info like repo statistics is cached, so data may be stale or unavailable at times ([Github Statistics API](https://developer.github.com/v3/repos/statistics/)):

> Computing repository statistics is an expensive operation, so we try to return cached data whenever possible. If the data hasn't been cached when you query a repository's statistics, you'll receive a `202` response; a background job is also fired to start compiling these statistics.

### Issues

The issues route returns both issues and pull requests. You can check if an "issue" is a pull request by checking for a `pull_request` key in its object.

## Pull Requests

To get closed/merged pull requests, add `?state=closed` to the request. For example:

```
https://api.github.com/repos/coffeys7/gitmetrics-test/pulls?state=closed
```

### Comments

- Get comments on an issue or pull request with url at `data["_links"]["comments"]`
- Get review comments on a pull request with url at `data["_links"]["review_comments"]`

### Questions

See answers [here](#answers-to-questions)

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
