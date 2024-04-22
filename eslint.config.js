// @ts-check

import sharedConfig from '@eejit/eslint-config-typescript';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    ...sharedConfig,
    {
        languageOptions: {
            parserOptions: { project: ['./tsconfig.json'] },
        },
    },
];
