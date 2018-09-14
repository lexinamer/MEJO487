# Conditional Statements
These are conditional statements that are used to perform different actions based on different conditions. There are 3 main types of conditionals that we can use together to create logic.

## If Statements
The if statement executes a statement if a specified condition is true. If the condition is false, another statement can be executed.

```
if (expression) {
  // if the expression is true, the code inside these brackets will run.
}
```

## Else Statements
The if/else statement provides an alternate set of instructions in case the if statement is false.

```
if (expression) {
  // if the expression is true, the code inside these brackets will run
} else {
  // some other code will run
}
```

## Else If Statements
You can also add another option using `else if`

```
if (expression1) {
   // if true, do this
} else if (expression2) {
  // if false, do this
} else {
  // if both false, do this
}
```

## An example to see how this works:
<p data-height="265" data-theme-id="0" data-slug-hash="RRYPxZ" data-default-tab="js" data-user="lexinamer" data-embed-version="2" data-pen-title="If/Else Test" class="codepen">See the Pen <a href="http://codepen.io/lexinamer/pen/RRYPxZ/">If/Else Test</a> by Lexi Namer (<a href="http://codepen.io/lexinamer">@lexinamer</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## Practice Problem
1. Create a variable that gives a prompt asking for the temperature
2. Using if and else if statements, make it do the following:
- If it is greater than 100, stay inside.
- If it is between 60 and 99, wear a t-shirt.
- Otherwise, use common sense.
