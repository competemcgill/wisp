module.exports = {
	url: function(extension) {
		return extension ? this.api.launchUrl + extension : this.api.launchUrl;
	},
	elements: {
		searchBar: 'input[type=text]',
		submit: 'input[name=btnK]',
		pageName: 'div[class=v-card__title]'
	}
}