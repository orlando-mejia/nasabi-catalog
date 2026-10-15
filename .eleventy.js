module.exports = function(eleventyConfig) {
  // Pass the images folder through to the final build
  eleventyConfig.addPassthroughCopy("src/img");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site" // The folder Cloudflare will deploy
    }
  };
};