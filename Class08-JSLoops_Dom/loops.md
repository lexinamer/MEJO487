# Loops
Javascript loops are a way of repeating sections of code over and over, so that you're not having to re-write code again and again manually. In fact, looping through arrays of data is pretty much all you’ll be doing for the entire second half of this course. That’s how you’ll build interactive charts, load data dynamically from an external sources, and use APIs.

For as long as a specified condition is true, the loop will continue to execute your code. There are many types of loops with these being the most common.

`while`: loops through a block of code while a specified condition is true.

`for`: loops through a block of code a specific number of times.

`forEach`: Variation of for loops that are often easier when working with arrays.

`for...in`: Variation of for loops that are often easier when working with objects.


## While Loops
While loops repeat the same code over and over until a predefined condition is satisfied. If the condition statement is always true, then you will never exit the while loop and crash the browser, so be very careful when using while loops!

```js
while (variable |operator| endvalue) {
    // do something
}
```

### Age Example - While Loop

```js
// This is a variable age and a basic while loop

var age = 5;

while (age < 10) {
   console.log("You are younger than 10!");
}

console.log("while loop finished- You are over 10!");
```

This is saying the age is 5 which is less than 10, so the conditional is true. The loop will run over and over until the conditional becomes false.

This will crash the computer. So we need to somehow set the age at some point to become over 10 to break out of the loop.

```js
// Lets add an increment operator that will add 1 to the age every time this while loop runs

var age = 5;

while (age < 10) {
   console.log("You are younger than 10!");
   age++; //this adds one each time
}

console.log("while loop finished- You are over 10!");
```


## For Loops
An easier way to iterate through data is via the `for` loop. A `for` loop does exactly the same thing as a while loop, but it has the advantage of organizing it's components more locally and neater. It runs over and over until you declare a change in the statement so that it knows when to stop.

```js
for (variable |operator| initial; variable |operator| conditional; increment) {
    // do something
}
```

### Age Example- For Loop

```js
// This is a variable age and a basic for loop

for (age = 5; age < 10; age++ ) {
   console.log("You are younger than 10!");
}

console.log("for loop finished- You are over 10!");
```

## forEach Loops
forEach loops are a variation of traditional for loops (technically, they’re array methods). They’re often easier to write (and read) when working with data.

```js
array.forEach(function(initial) {
    // do something
})
```

### Array example- forEach loops

```js
const animals = ['cat', 'dog', 'fish'];
animals.forEach(function(i) {
  console.log(i);
});

console.log('forEach loop finished- all animals here!')
```

## for...in Loops
for...in loops are another variation of traditional for loops that iterate through objects (but can also be used in arrays). They’re often easier to write (and read) when working with data.

```js
for (let key in object) {  
  // do something
}
```

### Array example- forEach loops

```js
var object = {
  name: 'mosey',
  type: 'dog',
  age: 5;
};

for (var i in object) {
  console.log(object[i]);
}

console.log('dog facts');
```


## Example loops
https://codepen.io/lexinamer/pen/OorZqN?editors=0012

## Let's Practice
Pair up and do the following in Codepen. Each group should email me the completed link at lnamer@live.unc.edu
https://codepen.io/lexinamer/pen/rZoKEX?editors=0010
