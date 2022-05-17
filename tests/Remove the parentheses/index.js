function removeParentheses(originalString) {
	const regexp = /\([^\)|^\(]*\)/gi
	const replacedString =  originalString.replace(regexp, '')
	return replacedString === originalString
		? replacedString
		: removeParentheses(replacedString)
}

removeParentheses('(hello)')
  
// Metodo 1
  
const removePattern = pattern => function (originalString) {
	const replacedString = originalString.replace(pattern, '')
	return replacedString === originalString
		? replacedString
		: arguments.callee(replacedString)
}
const removeParentheses2 = removePattern(/\([^\)|^\(]*\)/gi)