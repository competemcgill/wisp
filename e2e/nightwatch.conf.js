const Services = {};
loadServices();

module.exports = {
    src_folders: ["tests"],

    // See https://nightwatchjs.org/guide/working-with-page-objects/
    page_objects_path: "page-objects",

    // See https://nightwatchjs.org/guide/extending-nightwatch/#writing-custom-commands
    custom_commands_path: "",

    // See https://nightwatchjs.org/guide/extending-nightwatch/#writing-custom-assertions
    custom_assertions_path: "",

    // See https://nightwatchjs.org/guide/#external-globals
    globals_path: "",

    test_settings: {
        default: {
            launch_url: "https://dev.wisp.training"
        },
        chrome: {
            desiredCapabilities: {
                browserName: "chrome"
            },
            webdriver: {
                start_process: true,
                server_path: "node_modules/.bin/chromedriver",
                port: 9515
            }
        },
        firefox: {
            desiredCapabilities: {
                browserName: "firefox"
            },
            webdriver: {
                start_process: true,
                server_path: "node_modules/.bin/geckodriver",
                port: 9515
            }
        }
    }
};

function loadServices() {
    try {
        Services.seleniumServer = require("selenium-server");
    } catch (err) {}

    try {
        Services.chromedriver = require("chromedriver");
    } catch (err) {}

    try {
        Services.geckodriver = require("geckodriver");
    } catch (err) {}
}
