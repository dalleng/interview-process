#HTML highlighter

One way to make some HTML text appear highlighted is to wrap a segment of
text with a styled `<span/>` tag.

Write a function that takes a string and a list of pairs of string indices
representing segments of text that are to be highlighted.

For example, given a string `s` and a list of pairs of string indices `hilights`:

```javascript
var s = "Ivan loves bees and bitcoins.";
var hilights = [ [11, 15], [20, 28] ];
hilighter(s, hilights);
```

The above call to `highlighter()` should return:

```html
"Ivan loves <span>bees</span> and <span>bitcoins</span>."
```

Make sure your implementation also works for:

```javascript
var s = "Ivan loves bees, bees, and more bees.";
var hilights = [ [11, 15], [17, 21], [32, 36] ];
"Ivan loves <span>bees</span>, <span>bees</span>, and more <span>bees</span>."
```

**NOTE:**

* The indices may highlight any segment of the given string.
* Assume the indices are always within bounds of the string.
* Assume a highlight segment will not overlap with another segment.
* The highlight indices are given in order of occurrence.
