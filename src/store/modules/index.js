// Register each file as a corresponding Vuex module. Module nesting
// will mirror [sub-]directory hierarchy and modules are namespaced
// as the camelCase equivalent of their file name.
import snakeCase from 'lodash/snakeCase';
import toUpper from 'lodash/toUpper';

const root = { modules: {} };

// https://webpack.js.org/guides/dependency-management/#require-context
// eslint-disable-next-line
const requireModules = require.context(
    // Search for files in the current directory
    '.',
    // Search for files in subdirectories
    true,
    // Include any .js files that are not unit tests
    /^((?!\.unit\.).)*\.js$/
);

requireModules.keys().forEach(fileName => {
    // Skip this file, as it's not a module
    if (fileName === './index.js') return;

    // Get the module path as an array
    const modulePath = fileName
        // Remove the "./" from the beginning
        .replace(/^\.\//, '')
        // Remove the file extension from the end
        .replace(/\.\w+$/, '')
        // Split nested modules into an array path
        .split(/\//)
        // snake_case and UPPERCASE all module namespaces and names
        .map(snakeCase)
        .map(toUpper);

    // Get the modules object for the current path
    const { modules } = getNamespace(root, modulePath);

    // Add the module to our modules object
    modules[modulePath.pop()] = {
        // Modules are namespaced by default
        namespaced: true,
        ...requireModules(fileName),
    };

    // Recursively get the namespace of the module, even if nested
    function getNamespace(subtree, path) {
        if (path.length === 1) return subtree;

        const namespace = path.shift();
        subtree.modules[namespace] = { modules: {}, ...subtree.modules[namespace] };
        return getNamespace(subtree.modules[namespace], path);
    }
});

export default root.modules;
