module.exports = config => {
	
  // Copy `src/images/favicons/` to `build/`
  config.addPassthroughCopy({ "src/images/icons/favicons": "/" });
	
  return {
    dir: {
      input: 'src',
      output: 'build'
    }
  };
};