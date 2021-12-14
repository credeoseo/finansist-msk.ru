const _ = require('lodash')
const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({ addUtilities, e, theme, variants }) {

}, {
  theme: {
    extend: {
		colors: {
			themes: {
				default: '#0099e6',
				second: '#fcc000'
			}
		}
	},
  }
})
