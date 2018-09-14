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
Codepen: https://codepen.io/lexinamer/pen/RRYPxZ

## Practice Problem
1. Create a variable that gives a prompt asking for the temperature
2. Using if and else if statements, make it do the following:
- If it is greater than 100, stay inside.
- If it is between 60 and 99, wear a t-shirt.
- Otherwise, use common sense.
