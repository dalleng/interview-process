#Nested parentheses

Write a function that takes a string `s` and check if it is properly nested. It should return `true` when `s`:
* is empty
* has the form `(A)` where `A` is a properly nested string
* has the form `BC` where `B` and `C` are properly nested strings

For example, given a string `s`:
```javascript
var s = "(()(())())";
parentheses(s)
```

The above call to `parentheses(s)` should return `true`.

Make sure your implentation also gives the following results:

```javascript
parentheses( "())" );              // Output false
parentheses( "(()())((())()" );    // Output false
parentheses( "" ) ;                // Output True
```

**NOTE**

* The input srtring consist only of the characteres `(` or `)`
* The size of the input string doesn't exceed 1,000
