var config = require('../nightwatch.conf.js');

module.exports = {

	'/about route should route user successfully to the about page' : function (browser) {
		let page = browser.page.pageObjects();
		page.navigate("about")
		.assert.title('WISP')
		.waitForElementVisible('main')
		.assert.attributeEquals("main div div", "class", "about");
		browser.end();
	}
};