const {
	convertToStr
} = require('./main.js')

test('convert "3" to Three', () => {
  expect(convertToStr('3')).toBe("Three")
})

test('convert "32" to ThreeTwo', () => {
  expect(convertToStr('32')).toBe("ThreeTwo")
})

test('convert "309" to Three', () => {
  expect(convertToStr('309')).toBe("ThreeZeroNine")
})

test('convert "0" to Zero', () => {
  expect(convertToStr('0')).toBe('Zero')
})