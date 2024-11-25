// src/index.js
const math = require('./math')
const string = require('./string')

module.exports = {
	math,
	string,
}

// Test the library during development
if (require.main === module) {
	console.log('Math Utils:')
	console.log('Add: ', math.add(2, 3))
	console.log('Subtract: ', math.subtract(5, 2))
	console.log('String Utils:')
	console.log('Uppercase: ', string.toUpperCase('hello'))
	console.log('Lowercase: ', string.toLowerCase('WORLD'))
}
