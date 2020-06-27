module.exports = function(eleventyConfig) {
  console.log('hi')
  eleventyConfig.addPassthroughCopy("src/css");
}
