const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('./less_module');
const rewireGraphql = require('./graphql_tag');
const theme = require('../src/styles/antd_reset.js');

module.exports = function override(config, env) {
  // @修饰器
  config = injectBabelPlugin('transform-decorators-legacy', config);
  // 按需载入antd
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
    config
  );
  // 重置ant样式
  config = rewireLess.withLoaderOptions({
    modifyVars: theme,
    javascriptEnabled: true,
  })(config, env);
  // 支持graphql tag
  config = rewireGraphql(config);
  return config;
};
