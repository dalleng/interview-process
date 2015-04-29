#Array diff

##Probleme

Given two identique arrays of integers `A1` and `A2`. We suffle `A2` and remove one element. 

* What is the best way to find which element was removed?
* What would change if we replaced it with arrays of string representing the countries in the world?

**Note:** The arrays can contain millions of records


##Examples

**Integers**

Input: 
```javascript
A1 = [1, 2, 3, 4, 5]
A2 = [4, 1, 5, 3]
```

Output: `2`

**Strings**

Input: 
```javascript
A1 = [ 'France' , 'Germany', 'Spain', 'Italy', 'China']
A2 = [ 'China' , 'Germany' , 'Italy', 'Spain']
```

Output: `France`
