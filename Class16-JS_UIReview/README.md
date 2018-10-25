# Class 16- JS review and UI design day

## Branding Challenge Recap

## Pulse Check
- Who thinks they need jQuery/Javascript help?
- Who thinks they need UI design help?

## Javascript/jQuery Cheat Sheet
Tips and tricks to help you along the way.

### Types of Information
**Variables** = buckets to store information
Example: `var name = 'Allen'`
Usage: `console.log(name);`

**Objects** = buckets to store multiple properties about a specific item,
Example:
```js
var dog = {
  name: 'Fluffy',
  age: 12,
  breed: 'Retriever'
}
```
Usage: `console.log(dog.name);`

**Arrays** = buckets to store multiple items of the same kind
Example: `var grades = [99, 80, 92, 93, 89];`
Usage: `console.log(grades[0]);`

**Functions** = Set of statements that performs a task
Example:
```js
function square(number) {
  return number * number;
}
```
Usage: `console.log(square(2));`

### Simple Loop
```js
// Take some data
var cats = ['Nix', 'Kitty', 'Princess', 'Whiskers', 'Green Bean'];

// Create the for loop
for(var i = 0; i < cats.length; i++) {
    console.log('The cat\'s name is: ' + cats[i]);
}
```

### Interacting with HTML
```html
<!-- Select the HTML you are trying to interact with -->
<ul class="cats-list"><ul>
```

```js
// Get the HTMl element
var ul = $('.cats-list');

// Take some data
var cats = ['Nix', 'Kitty', 'Princess', 'Whiskers', 'Green Bean'];

// Loop through the data while printing to the HTML
for(var i = 0; i < cats.length; i++) {
  $(ul).append('<li>' + cats[i] + '</li>');
}
```

### Document.ready
Always wrap your jQuery in a document.ready statement to let the browser know not to run until jQuery has been fully loaded.

```js
$( document ).ready(function() {
    console.log( "ready!" );
});
```

### Tips
- You can store objects and arrays within objects
- Functions can contain multiple parameters
- You can pass in variables and objects to functions
- Looping is a great way to quickly print multiple items
- console.log is your BEST FRIEND! use it often.
- Don't forget to include the jQuery script
- Common jQuery methods include: `slideUp()`, `show()`, `hide()`, `slideDown()`, `append()`, `prepend()`, `.addClass()`, `.removeClass()`

## JS Practice Problem
Your goal is to create a simple to-do list app using HTML, CSS, and jQuery.

Requirements/Steps:
1. User can enter to-do into an input field
2. User clicks a button to submit the to-do
3. To-Do appears in an ordered list as list items
4. Input field clears out
5. Style your do-to list to give it some flair. Add a title, description, etc.
6. BONUS: Have a delete button next to each to-do

If you don't have time to finish today, you must finish this weekend and have it pulled up on your computer at the start of class on Tuesday.  

## UI Design Challenge
The Daily UI challenge is a website that sends you a UI design prompt for 100 days. It challenges you to get better. We are going to do a version of that to get you to focus on thinking about small pieces of design. They are intentionally vague so that you can use your creativity to create something.

#### Requirements/Steps:
1. Pick your topic from the following.
2. Come up with an idea for your UI and figure out whether it is for desktop, mobile, etc. Do any research needed.
2. Sketch it out using pen/paper BEFORE you start coding
3. Code your daily UI in Codepen. It does not need to be responsive (ie you can just code for a mobile size if you choose mobile and a desktop size if you choose desktop. It can be built using just HTML and CSS. Interactivity and JS are not required unless you want to add to it.
4. Email me your link BEFORE the start of class with the subject "Weekly UI"

#### Topic Options
- Landing page for a special report website about the changing polar seasons in Antarctica.
- Leaderboard that could be used for multiple sports for the 2020 summer Olympics.
- Redesign a digital boarding pass for an airline. Really think about this one and try and figure out the pain points and how to solve them.

#### Tips
Focus on achieving a CLEAN, efficient interface with accompanying type and color based off our class on Tuesday.
