/**
 * Check properly nested parentheses
 * 
 * @param {String} string 
 */

function checkParentheses (string) {

	var stack = [];

	for (var i = 0; i < string.length; i++) {
		var current = string[i];

		if (current === '(') {
			stack.push(c);
		}
		else {
			if (stack.length === 0 ) 
				return false;

			var preceding = stack.pop();

			if (current === ')' && preceding !== '(') 
				return false;
		}
	}

	return stack.length === 0;
}
