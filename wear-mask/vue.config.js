const path = require('path');

module.exports = {
    lintOnSave: false,
    runtimeCompiler: true,
    devServer: {
        disableHostCheck: true,
        port: 8080,
    },
    configureWebpack: {
        resolve: {
            alias: {
                // eslint-disable-next-line camelcase
                node_modules: path.resolve('./node_modules'),
                '@sb': path.resolve('./.storybook'),
            },
        },
        devtool: 'source-map',
    },

};
