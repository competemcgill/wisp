var config = require('../nightwatch.conf.js');

module.exports = { // adapted from: https://git.io/vodU0
	'Demo test ecosia.org' : function (browser) {
		browser
		.url('https://www.ecosia.org/')
		.waitForElementVisible('body')
		.assert.titleContains('Ecosia')
		.assert.visible('input[type=search]')
		.setValue('input[type=search]', 'nightwatch')
		.assert.visible('button[type=submit]')
		.end();
	}
};