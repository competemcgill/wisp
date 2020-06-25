var config = require("../nightwatch.conf.js");

module.exports = {
    "Default URL should route user to home page": function (browser) {
        const page = browser.page.pageObjects();
        page.navigate()
            .assert.title("WISP")
            .waitForElementVisible("main")
            .assert.containsText(".home", "Home");
        browser.end();
    }
};
