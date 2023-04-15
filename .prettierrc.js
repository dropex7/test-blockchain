module.exports = {
    plugins: [require('prettier-plugin-tailwindcss')],
    tailwindConfig: 'tailwind.config.js',
    trailingComma: 'all',
    tabWidth: 4,
    printWidth: 120,
    useTabs: false,
    semi: true,
    singleQuote: true,
    jsxSingleQuote: false,
    bracketSpacing: false,
    arrowParens: 'avoid',
    parser: 'typescript',
};
