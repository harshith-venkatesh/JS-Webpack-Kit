module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb-base"
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
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
