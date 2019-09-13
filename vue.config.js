const locales = require("./src/locales");
const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin");

module.exports = {
  baseUrl: process.env.VUE_APP_ROUTER_BASE_URL || "/",
  chainWebpack: config => {
    config.plugins.delete("prefetch");
  },
  configureWebpack: () => {
    if (process.env.NODE_ENV !== "production") return;
    let baseRoutes = [
      "/",
      "/code-of-conduct",
      "/community",
      "/contact",
      "/apps",
      "/collective",
      "/logos",
      "/support-us"
    ];
    let finalRoutes = [];
    baseRoutes.forEach(p => {
      finalRoutes.push(p);
      locales.locales.forEach(l => {
        finalRoutes.push("/" + l.code + p);
      });
    });
    return {
      plugins: [
        new PrerenderSPAPlugin(
          // Absolute path to compiled SPA
          path.resolve(__dirname, "dist"),
          // List of routes to prerender
          finalRoutes,
          {
            // options
          }
        )
      ]
    };
  }
};
