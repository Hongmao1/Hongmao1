module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard', 'eslint:recommended'],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/comment-directive': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'node/handle-callback-err': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prefer-const': 0,
    'no-undef': 0,
    'no-unused-vars': 0,
    'space-before-function-paren': 0,
    semi: 0,
    eqeqeq: 0,
    'no-irregular-whitespace': 0,
    'vue/multi-word-component-names': 0
  }
}
