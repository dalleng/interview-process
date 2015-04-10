/**
 * What is this recursive function doing?
 */

function f(n) {
	return n > 1 ? n * f(n-1) : n 
}

console.log( f(10) );
