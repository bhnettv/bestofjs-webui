module.exports = {
  'extends': 'airbnb',
  'plugins': [
    'react'
  ],
  rules: {
    'indent': [2, 2],
    'comma-dangle': 0,
    'no-var': 0,
    'vars-on-top': 0,
    'curly': 0,
    'default-case': 0,
    'func-names': 0,
    'no-use-before-define': 0,
    'quotes': 1,
    // React rules
    'react/prop-types': 0,
    'react/no-multi-comp': 0, // declare only one component per file
  }
};
