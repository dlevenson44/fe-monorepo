module.exports = {
    root: true,
    ignorePatterns: ['node_modules'],
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'import',
        'jsx-a11y',
        'react-hooks',
        'prettier',
    ],
    env: {
        browser: true,
        es6: true,
        node: true,
        commonjs: true,
        jest: true,
    },
    extends: [
        'plugin:@next/next/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    overrides: [
        {
            files: ['**/*.tsx'],
            rules: {
                'react/prop-types': 'off',
            },
        },
    ],
    rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/explicit-module-boundary-types': 'warn',
        '@typescript-eslint/ban-ts-ignore': 0,
        '@typescript-eslint/no-namespace': 1,
        '@typescript-eslint/member-delimiter-style': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/camelcase': 0,
        '@typescript-eslint/no-unused-vars': [
            'error',
            { argsIgnorePattern: '^_' },
        ],
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/indent': 'off',

        // NextJS
        //   '@next/next/no-html-link-for-pages': ['error', 'pages/'],

        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal'],
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'external',
                        position: 'before',
                    },
                ],
                pathGroupsExcludedImportTypes: ['react'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
        camelcase: 'off',
        semi: ['error', 'never'],
        'arrow-parens': ['error', 'always'],
        'computed-property-spacing': ['error', 'never'],
        'object-curly-spacing': ['error', 'always'],

        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'prettier/prettier': [
            'error',
            {
                semi: false,
                singleQuote: true,
                trailingComma: 'es5',
                endOfLine: 'lf',
                printWidth: 80,
                overrides: [
                    {
                        files: '*.{ts,tsx,js,jsx}',
                        options: {
                            tabWidth: 4,
                        },
                    },
                ],
            },
        ],
    },
}
