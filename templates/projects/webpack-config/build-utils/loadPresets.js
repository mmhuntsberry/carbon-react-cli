const webpackMerge = require("webpack-merge");

/**
 * loadPresets gives the capability of loading one
 * off configs that you might want to try out in your
 * project before actually adding in to DEV or PROD.
 */

module.exports = (env) => {
  const presets = env.presets || [];

  const mergedPresets = [].concat(...[presets]);
  const mergedConfigs = mergedPresets.map((presetName) =>
    require(`./presets/webpack.${presetName}`)(env)
  );

  return webpackMerge({}, ...mergedConfigs);
};
