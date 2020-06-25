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
            launch_url: "https://dev.wisp.training",
            selenium_port: 4444,
            selenium_host: "selenium-hub"
        },
        chrome: {
            desiredCapabilities: {
                browserName: "chrome"
            }
        },
        firefox: {
            desiredCapabilities: {
                browserName: "firefox"
            }
        }
    }
};
