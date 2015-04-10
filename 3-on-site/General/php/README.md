#PHP Interview questions

##0. What is PEAR and Composer in php?

**Solution**

> PEAR (**P**HP **E**xtension and **A**pplication **R**epository) is a framework and repository for
> reusable PHP components. PEAR is a code repository containing all kinds of php code snippets and libraries.
>
> Composer  is an application-level dependency manager for the PHP programming language that provides a standard
> format for managing dependencies of PHP software and required libraries
> 
> Composer is the main package manager to use for PHP, however for a long time PEAR used to fill that role. 

##1. What will be the output below and why?

**Problem**

```php
var_dump(0123 == 123);
var_dump('0123' == 123);
var_dump('0123' === 123);
```

**Solution**
> `var_dump(0123 == 123)` will output `bool(false)` because the leading 0 in 0123 tells the PHP interpreter
> to treat the value as octal (rather than decimal) value, and 123 octal is equal to 83 decimal, so the
> values are not equal.
>
> `var_dump('0123' == 123)` will output `bool(true)` since the string 0123 will automatically be coerced to
> an integer when being compared with an integer value. Interestingly, when this conversion is performed,
> the leading 0 is ignored and the value is treated as a decimal (rather than octal) value, so the values
> are bother 123 (decimal) and are therefore equal.
>
> `var_dump('0123' === 123)` outputs `bool(false)` since it performs a more strict comparison and does
> not do the automatic type coercion of the string to an integer.

##2. What will this code output and why?

**Problem**
```php
$x = true and false;
var_dump($x);
```

**Solution**
> Surprisingly to many, the above code will output `bool(true)` seeming to imply that the and operator
> is behaving instead as an or.
>
>The issue here is that the `=` operator takes precedence over the `and` operator in order of operations,
> so the statement `$x = true and false` ends up being functionally equivalent to:
```php
$x = true;       // sets $x equal to true
true and false;  // results in false, but has no affect on anything
```
> This is, incidentally, a great example of why using parentheses to clearly specify your intent is generally
> a good practice, in any language. For example, if the above statement `$x = true and false` were replaced 
> with `$x = (true and false)`, then `$x` would be set to `false` as expected.

##3. How can the problem below can be fixed?

**Problem**
```php
$referenceTable = array();
$referenceTable['val1'] = array(1, 2);
$referenceTable['val2'] = 3;
$referenceTable['val3'] = array(4, 5);

$testArray = array();

$testArray = array_merge($testArray, $referenceTable['val1']);
var_dump($testArray);
$testArray = array_merge($testArray, $referenceTable['val2']);
var_dump($testArray);
$testArray = array_merge($testArray, $referenceTable['val3']);
var_dump($testArray);
```

**Solution**
> The output will be as follows:
```php
array(2) { [0]=> int(1) [1]=> int(2) }
NULL
NULL
```
> The issue here is that, if either the first or second argument to array_merge() is not an array,
> the return value will be `NULL`. For example, although one might reasonably expect that a call
> such as `array_merge($someValidArray, NULL)` would simply return `$someValidArray`, it instead
> returns `NULL`!
>
> The fix for this is straightforward. If we simply typecast the second argument to an array,
> we will get the desired results:
```php
$testArray = array_merge($testArray, (array)$referenceTable['val1']);
var_dump($testArray);
$testArray = array_merge($testArray, (array)$referenceTable['val2']);
var_dump($testArray);
$testArray = array_merge($testArray, (array)$referenceTable['val3']);
var_dump($testArray);
```

##4. What is the value and length of $text?

**Problem**
```php
$text = 'John ';
$text[10] = 'Doe';
```

**Solution**

> After the above code is executed, the value of `$text` will be the string `John␣ ␣ ␣ ␣ ␣D`
> (i.e., “John”, followed by 5 spaces, followed by “D”) and `strlen($text)` will return 11.
>
> First of all, since `$text` is a string, setting a single element of `$text` simply sets
> that single character to the value specified. The statement `$text[10] = 'Doe'` therefore
> sets that single character to `'D'`
> 
> Secondly, `$text[10] = 'Doe'` says to set the 11th character of the string (remember that
> indices are zero-based) to `'D'`. Prior to that statement, though, the length of the string
> `$text ("John ")` was only 5. Whereas compilers or interpreters in other languages might
> barf (with something akin to an out-of-bounds-index error) when you then attempt to set
> the 11th character of a 5 character string, PHP instead is very “accommodating” and instead
> allows this and sets all intermediate characters to blanks.
