const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
	content: ['index.html'],
	css: ['main.css'],
	output: 'purged.css',
};
