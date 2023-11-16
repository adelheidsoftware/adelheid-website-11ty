module.exports = config => {
	
  // Copy `src/images/favicons/` to `build/`
  config.addPassthroughCopy({ "src/images/icons/favicons": "/" });
	
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