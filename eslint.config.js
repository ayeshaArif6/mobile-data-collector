import pkg from '@eslint/js';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import { browser } from 'globals';

const { configs: eslintRecommended } = pkg;

export default [
    {
        files: ['**/*.{js,jsx}'],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
            parserOptions: {
                ecmaFeatures: {
                    jsx: true, // Ensure JSX is enabled
                },
            },
            globals: {
                ...browser, // Spread browser globals, ensuring no whitespace issues
            },
        },
        plugins: {
            react: reactRecommended, // Add React plugin to recognize JSX
        },
        ...eslintRecommended.recommended,
        ...reactRecommended,
        rules: {
            'no-unused-vars': [
                'warn',
                {
                    varsIgnorePattern: 'React', // Ignore React import in React 17+
                },
            ],
            'react/react-in-jsx-scope': 'off', // Disable the need for React to be in scope
            'react/jsx-uses-vars': 'error', // Ensure variables used in JSX are marked as used
        },
    },
];
