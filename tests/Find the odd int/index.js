const findOdd = (arr) => {
	const uniqueArray = arr.filter(function(item, pos, self) {
		return self.indexOf(item) === pos
	})

	console.log('Unique Array', uniqueArray)

	const countArray = uniqueArray.map(function(item) {
		return arr.filter(function(item2) {
			return item2 === item
		}).length	
	})

	console.log('Count Array', countArray)

	const oddArray = countArray.filter(function(item) {
		return item % 2 === 1
	}
	)

	console.log('Odd Array', oddArray)

	const resultArray = uniqueArray[countArray.indexOf(oddArray[0])]

	return console.log('Result', resultArray)
}

findOdd([1, 1, 2, 2, 5, 2, 4, 4, 1, 2, 5])

const findOdd2 = (item) => console.log(item.reduce((a, b) => a ^ b))

findOdd2([1, 1, 2, 2, 5, 2, 4, 4, 1, 2, 5])
