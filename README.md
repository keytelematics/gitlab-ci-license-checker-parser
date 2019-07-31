# GitLab parser for license-checker output

Parses `license-checker` output into GitLab `gl-license-management-report.json` format.

Adapted from https://github.com/mgibeau/gitlab-npm-audit-parser

```
Usage: gitlab-ci-license-checker-parser [options]

Options:

  -V, --version     output the version number
  -o, --out <path>  output filename, defaults to gl-license-management-report.json
  -h, --help        output usage information
```

## How to use

Install this package.

```
npm install --save-dev gitlab-ci-license-checker-parser
```

Add the following job to _.gitlab-ci.yml_

```yaml
dependency scanning:
  image: node:10-alpine
  script:
    - npm ci
    - npx license-checker --json | npx gitlab-ci-license-checker-parser -o gl-license-management-report.json
  artifacts:
    reports:
      dependency_scanning: gl-license-management-report.json
```

## Test

`cat test/licenses.json | ./parse.js -o gl-license-management-report.json`
