/* ===================================
				CONSTANTS
==================================== */
const digitStrMapping = {
	"1": "One",
	"2": "Two",
	"3": "Three",
	"4": "Four",
	"5": "Five",
	"6": "Six",
	"7": "Seven",
	"8": "Eight",
	"9": "Nine",
	"0": "Zero"
}

/* ===================================
				FUNCTIONS
==================================== */
const getArgs = () => {
	const args = process.argv.slice(2)

	return args
}

const convertToStr = (num = "") => {
	const digits = num.split("")
	let strResult = ""

	for(const digit of digits) {
		strResult += digitStrMapping[digit]
	}

	return strResult
}

const convertArrayOfNum = (input = []) => {
	let count = 0
	let notComplete = Boolean(input.length > count)
	
	while(notComplete) {
		const strResult = convertToStr(input[count])

		process.stdout.write(strResult)
		count += 1
		notComplete = Boolean(input.length > count)

		if(notComplete) {
			process.stdout.write(',')
		} else {
			process.stdout.write('\n')
		}
	}
}

const start = () => {
	const args = getArgs()

	convertArrayOfNum(args)
}

/* ===================================
				EXPORTS
==================================== */
module.exports = {
	getArgs,
	convertToStr,
	convertArrayOfNum
}

start()