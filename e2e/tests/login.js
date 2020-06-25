var config = require("../nightwatch.conf.js");

module.exports = {
    "User should login succesfully": function (browser) {
        const page = browser.page.pageObjects();
        page.navigate("login")
            .setValue("@email", "test@gmail.com")
            .setValue("@password", "test")
            .click("@loginBtn")
            .pause(5000)
            .waitForElementVisible("main")
            .assert.containsText(".dashboard", "My Sets");
        browser.end();
    }
};
