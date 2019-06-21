const path = require('path')
const withSass = require('@zeit/next-sass')

module.exports = withSass({
    webpack(config) {
        config.resolve.alias['components'] = path.join(process.cwd(), '/components');
        config.resolve.alias['styles'] = path.join(process.cwd(), '/styles');
        config.resolve.alias['layout'] = path.join(process.cwd(), '/layout');
        config.resolve.alias['helper'] = path.join(process.cwd(), '/helper');
        config.resolve.alias['static'] = path.join(process.cwd(), '/static');

        config.module.rules.push({
            test: /\.(scss|sass)$/,
            use: [{
                loader: 'sass-resources-loader',
                options: {
                    resources: [
                        path.join(process.cwd(), '/styles/helper/vars.scss'),
                        path.join(process.cwd(), '/styles/helper/functions/functions.scss'),
                        path.join(process.cwd(), '/styles/helper/mixins/mixins.scss')
                    ]
                },
            }],
        })

        return config;
    }
});