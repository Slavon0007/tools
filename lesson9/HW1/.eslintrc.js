module.exports = {
    extends: 'eslint-config-airbnb-base',
    rules: {
        'no-console': 2,
        'import/prefer-default-export': 'off',
        'consistent-return': 'off',
        'curly': 'off',
        'default-case': 'off',
        'dot-notation': 'off',
        'eqeqeq': 'off',
        'no-return-assign': 'off',
        'no-continue': 'off',
        'import/no-cycle': 'off',
        'no-unused-expressions': 'off',
        'max-len': 'off'

    },
    env: {
        browser: true
    }
};