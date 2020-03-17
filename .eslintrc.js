/*
 * @Author: ydd
 * @Date: 2020-03-16 18:07:50
 * @LastEditTime: 2020-03-16 22:03:40
 * @FilePath: /temp/demo2/.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    indent: ['error', 2, { MemberExpression: 'off' }],
    quotes: ['error', 'single'],
    'arrow-parens': 0,
    'no-loop-func': 2,
    'space-before-function-paren': ['error', 'never'],
    indent: ['error', 2, { SwitchCase: 1 }]
  }
}
