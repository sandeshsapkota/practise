let mix = require("laravel-mix");
mix.js("src/js/app.js", "dist/").sass("src/sass/app.scss", "dist/").options({
  processCssUrls: false,
});

mix.disableSuccessNotifications();

Mix.listen("configReady", (webpackConfig) => {
  if (Mix.isUsing("hmr")) {
    // Remove leading '/' from entry keys
    webpackConfig.entry = Object.keys(webpackConfig.entry).reduce(
      (entries, entry) => {
        entries[entry.replace(/^\//, "")] = webpackConfig.entry[entry];
        return entries;
      },
      {}
    );

    // Remove leading '/' from ExtractTextPlugin instances
    webpackConfig.plugins.forEach((plugin) => {
      if (plugin.constructor.name === "ExtractTextPlugin") {
        plugin.filename = plugin.filename.replace(/^\//, "");
      }
    });
  }
});
