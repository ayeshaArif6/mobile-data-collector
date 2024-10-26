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
                navigator: 'readonly',
                setTimeout: 'readonly',
                clearTimeout: 'readonly',
                setInterval: 'readonly',
                clearInterval: 'readonly',
                localStorage: 'readonly',
                sessionStorage: 'readonly',
                // Add other specific globals as needed
            },
        },
        plugins: {
            react: reactRecommended,
            'react-hooks': {}, // Add react-hooks plugin
            'jsx-a11y': {}, // Add jsx-a11y plugin
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
            'react-hooks/rules-of-hooks': 'error', // Ensure rules of hooks are respected
            'react-hooks/exhaustive-deps': 'warn',
            'jsx-a11y/anchor-is-valid': 'warn', // Enforce accessibility rules
        },
    },
];
