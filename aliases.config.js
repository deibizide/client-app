const path = require('path');

function resolveSrc(_path) {
    return path.join(__dirname, _path);
}

//  Add aliases to leverage @short handles
//  Vue, fix https://github.com/vuejs-templates/webpack/issues/215 by adding the runtime only
const aliases = {
    '@src': 'src',
    '@components': 'src/components',
};

module.exports = {
    webpack: {},
};

for (const alias in aliases) {
    module.exports.webpack[alias] = resolveSrc(aliases[alias]);
}
