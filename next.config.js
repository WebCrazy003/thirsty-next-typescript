const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([], {
  images: {
    domains: ["www.thecocktaildb.com"],
  },
});
