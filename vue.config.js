module.exports = {
    // where to output built files
    outputDir: 'dist',

    publicPath: '/client-app/',

    // whether to use eslint-loader for lint on save.
    // valid values: true | false | 'error'
    // when set to 'error', lint errors will cause compilation to fail.
    lintOnSave: 'error',

    configureWebpack: {
        // We provide the app's title in Webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        name: 'client-app',
        // Set up all the aliases we use in our app.
        resolve: {
            alias: require('./aliases.config').webpack,
        },
        optimization: {
            splitChunks: {
                chunks: 'all',
            },
        },
        plugins: [],
    },
};
