module.exports = {
	url: function(extension) {
		return extension ? this.api.launchUrl + extension : this.api.launchUrl;
	},
	elements: {
		email: 'input[name=email]',
		password: 'input[name=password]',
		loginBtn: 'button[type=button]',
	}
}