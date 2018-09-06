# Day 5	 | Git and Github Continued

**Slideshow: https://docs.google.com/presentation/d/1vTkmBBjgF-Q3pfhMjQ8jpG2qzZt8kZ6jqKwetvkA05Y/edit?usp=sharing**

## Project 1
- How are they going?
- Any issues with Command line, Github, etc?

## What is Javascript?
JavaScript is a client-side programming language that adds interactivity and behavior to web pages. There are two ways to use javascript. When it is written to run in a browser it is often called "front-end" programming, and server-side JavaScript is usually considered "back-end" programming. Hint: It's not the same thing as Java.

## How to set it up?
Similar to CSS, there are two ways. First, you can add it directly to your HTML Page.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Test Page</title>
    </head>
    <body>
    <p>This is my awesome JavaScript code.</p>
        <script>
            alert('Hello World!');
        </script>
    </body>
</html>
```

Second, you can add an external Javascript file. However, while you add a CSS file in the `<head></head>` tags you typically add a Javascript file at the bottom of the page before the closing `</body>`

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Test Page</title>
    </head>
    <body>
    <p>This is my awesome JavaScript code.</p>

     <script src="path/to/file.js"></script>
    </body>
</html>
```

## Syntax of Javascript

After each individual statement, you must add a semicolon. This helps the language determine where one statement ends and another begins. Semicolons can be a deep topic of discussion, but we'll keep things simple for you: end every line with a semicolon, unless we specifically ask you not to. Semicolons aren't always necessary, but they're a good habit for people new to JS, so we'll use them in this tutorial.

```
console.log('Hello World!');
console.log('I am glad to meet you');
console.log('I am fuzzy');
```

camelCase is popular in Javascript as it is what the originators of JavaScript decided to go with. However, more important than following an exact rule is the readability of your code.
```
var myName
var myAge
var myHometown
```

The Console lets you use standard JavaScript statements and Console-specific commands while a page is live in the browser to help you debug the page. We will use the one built into the Chrome dev tools.
![console](http://www.ikrazzy.com/wp-content/uploads/2012/02/chrome-javascript-error.jpg)


## Getting Javascript to the screen
There are numerous ways to get JS onto the screen. There are three common ones that we will use today until we learn about DOM manipulation.

Open a popup box.

```
alert('Hello World!');
```

Display a message in your console.

```
console.log('Hello World!');
````

Add something to the page.

```
document.write('Hello World!');
```

## Variables
- Variables are named "buckets" that hold data and make that data available for reuse later. A variable can hold data of any type.
- Go over naming conventions
- Restricted Words
- The equal sign

## Data Types
- String - Line of text
- Numbers - A number to do math with
- Boolean - true or false
- Object - An item that stores many things such as a collection of properties
- Null, Undeclared, and Undefined

## Class Exercises
- Work with variables and Numbers
- Different ways to print to screen
- Use CodePen to practice

## Homework
- Mad Lib Javascript exercise (see HOMEWORK.MD)
- Work on CSS Bootcamp
