const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withSVGR = require('next-svgr');

module.exports = withPlugins([withImages, withSVGR], {
  webpack(config, options) {
    return config;
  },
});
