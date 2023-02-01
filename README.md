# self-hosted workspace clean
Cleans up directories after GitHub Actions.
By default, all files and directories remain on self-hosted machines.
## Example usage

```yaml
- uses: v-and-d/self-hosted-clean@latest
```

It is important that this is run before any caching tasks as cleanups are run in reverse order (and you do not want to cleanup before the caching is saved).

A more full example:
```yaml
jobs:
  build:
    runs-on: self-hosted
    steps:
    - uses: v-and-d/self-hosted-clean@latest
    - uses: actions/checkout@latest
    - uses: actions/cache@latest
    # ....
```
