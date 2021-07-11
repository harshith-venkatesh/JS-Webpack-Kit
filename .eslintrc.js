module.exports = {
    "env": {
        "browser": true,
    },
    "extends": [
        "airbnb-base"
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module",
        "ecmaVersion": 2021
    },
    "rules": {
        'prettier/prettier': [
          'error',
          {
            singleQuote: false,
            semi: true,
          }
        ],
      },
};
