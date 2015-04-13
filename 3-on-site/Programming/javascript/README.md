#Javascript Interview questions

##0. What is the signficance & benefits of `use strict`?

> The short and most important answer here is that `use strict` is a way to voluntarily **enforce
> stricter parsing and error handling** on your JavaScript code at runtime. Code errors that would
> otherwise have been ignored or would have failed silently will now generate errors or throw 
> exceptions. In general, it is a good practice.
>
> Some of the key benefits of strict mode include:
> * **Makes debugging easier**. Code errors that would otherwise have been ignored or would have
> failed silently will now generate errors or throw exceptions, alerting you sooner to problems 
> in your code and directing you more quickly to their source.
> * **Prevents accidental globals**. Without strict mode, assigning a value to an undeclared 
> variable automatically creates a global variable with that name. This is one of the most common
> errors in JavaScript. In strict mode, attempting to do so throws an error.
> * **Eliminates this coercion**. Without strict mode, a reference to a this value of null or 
> is automatically coerced to the global. This can cause many headfakes and pull-out-your-hair
> kind of bugs. In strict mode, referencing a a this value of null or undefined throws 
> error.
> * **Disallows duplicate property names or parameter values**. Strict mode throws an error when
> it detects a duplicate named property in an object (e.g., `var object = {foo: "bar", foo: "baz"};`)
> or a duplicate named argument for a function (e.g., `function foo(val1, val2, val1){}`), thereby 
> catching what is almost certainly a bug in your code that you might otherwise have wasted 
> of time tracking down.
> * **Makes eval() safer**. There are some differences in the way `eval()` behaves in strict mode
> and in non-strict mode. Most significantly, in strict mode, variables and functions declared
> inside of an `eval()` statement are not created in the containing scope (they are created in 
> containing scope in non-strict mode, which can also be a common source of problems).
> * **Throws error on invalid usage of delete**. The delete operator (used to remove
> properties from objects) cannot be used on non-configurable properties of the object.
> Non-strict code will fail silently when an attempt is made to delete a non-configurable
> property, whereas strict mode will throw an error in such a case.

##1. What will the code below output?

**Problem**
```javascript
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);
```

**Solution**
> An educated answer to this question would simply be: “You can’t be sure. it might print out “0.3” 
> and “true”, or it might not. Numbers in JavaScript are all treated with floating point precision,
> and as such, may not always yield the expected results.”
> 
> The example provided above is classic case that demonstrates this issue. Surprisingly, it will print out:
```javascript
0.30000000000000004
false
```

##2. How do detect a palindrome?

*Palindrome: a phrase whose meaning may be interpreted the same way in either forward or reverse direction.*

**Problem**
```javascript
console.log(isPalindrome("level"));                   // logs 'true'
console.log(isPalindrome("levels"));                  // logs 'false'
console.log(isPalindrome("A car, a man, a maraca"));  // logs 'true'
```

**Solution**
> The following one line function will return `true` if `str` is a palindrome; otherwise, it returns `false`.
```javascript
function isPalindrome(str) {
    str = str.replace(/\W/g, '').toLowerCase // Optional
    return (str == str.split('').reverse().join(''));
}
```

##3. How to make this sum function working?

**Problem**
```javascript
console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5
```

**Solution**
> There are multiple ways to do this. A nice one is to use `arguments` object which provides access
> to the actual arguments passed to a function. This enables us to use the `length` property.
>
> If two arguments are passed, we simply add them together and return.
>
> Otherwise, we assume it was called in the form `sum(2)(3)`, so we return an anonymous function
> that adds together the argument passed to `sum()` (in this case 2) and the argument passed to 
> the anonymous function (in this case 3).
```javascript
function sum(x) {
  if (arguments.length == 2) {
    return arguments[0] + arguments[1];
  } else {
    return function(y) { return x + y; };
  }
}
```

##4. What will the code output to the console?

**Problem**
```javascript
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();
```

**Solution**

>
```javascript
outer func:  this.foo = bar
outer func:  self.foo = bar
inner func:  this.foo = undefined
inner func:  self.foo = bar
```
> In the outer function, both `this` and `self` refer to `myObject` and therefore both can properly 
reference and access `foo`.
>
> In the inner function, though, `this` no longer refers to `myObject`. As a result, `this.foo` is
> undefined in the inner function, whereas the reference to the local variable `self` remains
> in scope and is accessible there. (Prior to ECMA 5, `this` in the inner function would refer
> to the global `window` object; whereas, as of ECMA 5, `this` in the inner function would be `undefined`)

##5. What will the code output to the console?

**Problem**
```javascript
var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123;
a[c]=456;

console.log(a[b]);
```

**Solution**
> The output of this code will be `456`
> 
> When setting an object property, JavaScript will implicitly **stringify** the parameter value.
> In this case, b and c will both be converted to “[object Object]”. Because of this, `a[c]` 
> will override the `a[b]` and set the value to `456`.

##6. What is this recursive function doing?

**Problem**
```javascript
console.log(
  (
    function f(n) {
      return ( n > 1 ? n * f(n-1) : n )
    }
  )(10)
);
```

**Solution**
> The code will output the value of 10 factorial (i.e., 10!, or 3,628,800).
>
> The named function `f()` calls itself recursively, until it gets down to calling `f(1)`
> which simply returns `1`. Here is what this does:
```javascript
f(1) = 1           // returns n, which is 1
f(2) = 2           // returns 2 * f(1)
f(3) = 6           // returns 3 * f(2)
f(4) = 24          // returns 4 * f(3)
f(5) = 120         // returns 5 * f(4)
f(6) = 720         // returns 6 * f(5)
f(7) = 5040        // returns 7 * f(6)
f(8) = 40320       // returns 8 * f(7)
f(9) = 362880      // returns 9 * f(8)
f(10) = 3628800    // returns 10 * f(9)
```
