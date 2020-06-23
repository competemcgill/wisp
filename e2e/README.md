# End-to-End Testing

## Dependencies

* [Selenium-driver](https://www.selenium.dev/documentation/en/webdriver)
* [nightwatch](https://nightwatchjs.org/guide)
* [chromedriver](https://chromedriver.chromium.org/getting-started)
* [geckodriver (firefox)](https://firefox-source-docs.mozilla.org/testing/geckodriver/)

## Test Configuration in docker
The end-to-end nightwatch tests are run in headless mode using a [selenium grid](https://www.selenium.dev/documentation/en/grid/) setup with the following images:
* [selenium/hub](https://github.com/SeleniumHQ/docker-selenium/tree/master/Hub)
* [selenium/node-chrome](https://github.com/SeleniumHQ/docker-selenium/tree/master/NodeChrome)
* [selenium/node-firefox](https://github.com/SeleniumHQ/docker-selenium/tree/master/NodeFirefox)

## Instructions

* To install dependencies:
```bash
npm install
```

* To run the tests in a docker environment (using selenium grid):
```bash
npm run e2e
```

* To run the tests on local host:
```bash
npm run e2e-local
```

## Resources for contribution to nightwatch tests

* [Nightwatch API](https://nightwatchjs.org/api)
* [Working with Page Objects](https://nightwatchjs.org/guide/working-with-page-objects/)
* [Update configuration/settings file](https://nightwatchjs.org/gettingstarted/configuration/)
