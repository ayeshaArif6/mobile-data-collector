import pkg from '@eslint/js';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';

const { configs: eslintRecommended } = pkg;

export default [
    {
        files: ['**/*.{js,jsx}'],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                window: 'readonly',
                document: 'readonly',
                console: 'readonly',
                // Add other necessary browser globals here, avoiding problematic entries
            },
        },
        plugins: {
            react: reactRecommended,
        },
        ...eslintRecommended.recommended,
        ...reactRecommended,
        rules: {
            'no-unused-vars': [
                'warn',
                {
                    varsIgnorePattern: 'React',
                },
            ],
            'react/react-in-jsx-scope': 'off',
            'react/jsx-uses-vars': 'error',
        },
    },
];
