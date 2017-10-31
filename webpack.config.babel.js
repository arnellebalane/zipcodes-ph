import { join } from 'path';

export default {
    entry: './source/index',
    output: {
        path: join(__dirname, 'build'),
        libraryTarget: 'umd',
        library: 'zipcodesPH'
    },
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            include: join(__dirname, 'source')
        }, {
            test: /\.json$/,
            loader: 'json-loader',
            include: join(__dirname, 'source')
        }]
    }
};
