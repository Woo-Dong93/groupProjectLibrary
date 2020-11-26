'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/c-15-library.min.js')
} else {
  module.exports = require('./dist/c-15-library.js')
}
