const rssPlugin = require('@11ty/eleventy-plugin-rss');

// Filters
const dateFilter = require('./src/filters/date-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');
const dateTimeFilter = require('./src/filters/datetime-filter.js');

module.exports = config => {

  // Plugins
  config.addPlugin(rssPlugin);

  // Add filters
  config.addFilter('dateFilter', dateFilter);
  config.addFilter('w3DateFilter', w3DateFilter);
  config.addFilter('dateTimeFilter', dateTimeFilter);
	
  // Pass through image assets to build directory
  config.addPassthroughCopy('./src/assets/images/');

	
  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'build'
    }
  };
};