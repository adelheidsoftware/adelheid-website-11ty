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

  // Returns a collection of blog posts in reverse order (newest first)
  config.addCollection('blog', collection => {
    return [...collection.getFilteredByGlob('./src/blog/posts/*.md')].reverse();
  });

  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false);
	
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