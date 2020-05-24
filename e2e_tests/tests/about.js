var config = require('../nightwatch.conf.js');

module.exports = {

	'Default URL should route user to home page' : function (browser) {
		let page = browser.page.pageObjects();
		page.navigate("about")
		.assert.title('WISP')
		.waitForElementVisible('main')
		.assert.attributeEquals("main", "class", "about");
		browser.end();
	}
};