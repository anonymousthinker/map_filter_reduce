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
```
is it better to write the function inside map outside with a name? or this is fine?
```
ChatGPT said:
ChatGPT
Great question! The choice between writing a function inline (as you did with the arrow function inside .map()) versus defining it separately outside with a name depends on factors like readability, reusability, and performance.

Let's explore both approaches in more detail:

1. Writing the function inline inside .map() (Current Approach)
Here’s your current code:

javascript
Copy code
const extractScores = (objects) => {
  return objects.map(({ scores: { math, english } }) => [math, english]);
};
Pros of writing the function inline:
Conciseness: The code is compact and eliminates the need for extra lines or separate functions.
Clear Context: The function is used only in this specific context (inside .map()), so there's no need to add additional layers of abstraction.
Readability: For small operations like this, an inline function is typically clear and doesn’t clutter the code. Anyone familiar with JavaScript will easily understand what’s happening.
Simplicity: When you don’t need to reuse the function elsewhere, keeping it inline makes the code easier to follow, without the need to jump to another part of the codebase.
Cons of writing the function inline:
Reusability: The inline function can’t be reused elsewhere. If the logic inside the .map() callback were needed again in multiple places, this would become less efficient.
Testability: An inline function can be harder to unit-test in isolation if you need to test the logic separately.
2. Writing the function outside with a name (Extracting the callback function)
Here’s an example of extracting the logic into a named function:

javascript
Copy code
const extractScores = (objects) => {
  return objects.map(getScores);
};

const getScores = ({ scores: { math, english } }) => [math, english];
Pros of writing the function outside:
Reusability: If you need to use getScores elsewhere in your code, it’s now a named function that can be reused easily.
Testability: You can now write unit tests specifically for getScores, which can be useful if the logic inside the function gets more complex or you need to verify it independently.
Clearer Separation of Concerns: If the operation in the callback is complex, separating it into a named function helps with keeping the main function (like extractScores) more focused and readable.
Cons of writing the function outside:
Verbosity: The code becomes a bit longer and less concise. Now you have an extra function and may need to refer to it elsewhere, which could potentially reduce clarity when the operation is simple.
Extra Layer: For simple transformations like this, adding an extra layer of abstraction (the getScores function) might feel like over-engineering, since it doesn’t add much value unless reused.
```
Which is Better?
For small, simple operations like this:

The inline approach inside .map() is perfectly fine and often preferred because it's concise and direct. It makes the code more readable without unnecessary abstraction.
For larger or reusable logic:

If the logic inside the callback is complex, or if you plan to reuse the logic across multiple functions, then defining the function outside with a name can be a better choice. It improves reusability and testability.
```
When to choose one over the other:
Inline functions (like the one you used) are great when:

The logic is simple and short.
The function is used only once, so there’s no need for reuse.
You want to keep the code concise and easy to follow.
Named functions are better when:

The logic inside the function is complex or might be reused in multiple places.
You want to unit-test the function independently.
You need to improve the separation of concerns (i.e., keeping the mapping logic separate from the main function for clarity).
```
Final Recommendation:
In your specific case (mapping over objects to extract scores), the inline arrow function is a perfectly valid and clean approach. It’s simple, readable, and doesn’t add unnecessary complexity.

However, if you anticipate needing to reuse the score extraction logic elsewhere, or if the function logic might grow in complexity in the future, extracting it into a separate named function would be a good idea.

So, for your current use case, keep it inline. If the logic becomes more complex later or needs to be reused, you can always extract it into a named function at that time.
```