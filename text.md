```
map[...'gour'].map(add)
[ "g5", "o5", "u5", "r5" ]

const add = function (x) { return x + 5; }
undefined
> [1, 2, 3, 4].map(add)
[ 6, 7, 8, 9 ]
```
filter takes a function called predicate that takes one argument and always returns either true or false 
```
> const rev = function (arr, element) {arr.unshift(element); return arr;
}
undefined
> rev ([1, 2, 3, 4], '12')
[ "12", 1, 2, 3, 4 ]
> [1, 2, 3, 4].reduce(rev, [])
[ 4, 3, 2, 1 ]
> 
```
```
> const ar = [1, 2, 3]
undefined
> const br = [...ar]
undefined
> br
[ 1, 2, 3 ]
> br.push(5)
4
> br
[ 1, 2, 3, 5 ]
> ar
[ 1, 2, 3 ]
```
reduce function takes reducer and init
reducer on the other hand takes the init, element, index and reference to the array

map function takes mapper
mapper takes element, index and reference to the array

filter function takes predicate
predicate takes element, index and reference to the array
```
function returnLength() { const a = [1, 2, 3]; return [...a].push(1, 2, 3) }
undefined
> returnLength()
6
```
map is basically a loop that iterates over an array

filter is also a loop but with condition

reduce is a loop with memory, which takes an accumulator or init, and works on it with the elements of array on the basis of the reducer function.

In reduce the initial value or context always goes as the first argument for the reducer function
while the array elements go as the second argument!

```
"a function should return same values and it should return something that justifies its name"

like a isDivisible() fn should true or false; and all it's returns should be a boolean type
```