# Day 9	 | jQuery and Plugins

## Project 2 Idea Pitches
Each student goes around the room and pitches their idea for Project 2 in 30 seconds or less. Ask any questions or get any feedback from others at this time.

## Javascript Review
- Let's do a quick Codepen example together. Create 3 boxes and on click, turn each box blue.
- Any questions?

## jQuery
Let’s admit it: writing pure JavaScript for certain UI features can be tedious and confusing. Let’s look at a quick example.  And sometimes, you have to write multiple code blocks for different browsers, adding to the tedium.
Luckily, a 22-year-old named John Resig created jQuery in 2006.

jQuery is a JavaScript library. That basically means that a ton of JS has been written for you behind the scenes and condensed into short, ready-to-use snippets of code that you can use in your apps. Like the tagline says, jQuery allows you to “write less, do more.” It makes DOM manipulation easier.

**Pros**
- Free, open-source
- Concise, relatively simple and intuitive
- Good documentation with examples
- Huge community
- Cross-browser compatibility
- AJAX is much easier with jQuery

**Cons**
- You have to include the link to the jQuery file, which makes your app a bit slower
- It can conflict with other code, but there are workarounds

### How it works
1. Getting DOM elements
The main piece of shorthand you’ll use in jQuery is the `$()` syntax. This is jQuery’s code for “get something from the DOM,” be it the window, the document, a class of objects, or a single object with an ID.

```js
$('.someclass')
```

2. Now that you’ve gotten your object, you need to attach an event to it.
jQuery has event handlers for pretty much anything you can think of. Just check the docs.

```js
$('.someclass').click();
```

2. DOM Methods
So now you’ve gotten your object, and you’ve attached a trigger event...what do want to DO with it? What JS methods will you need? This is the real strength of jQuery. It puts the methods in plain English.

```js
$('.someclass').click(function() {
  $('.hiddenclass').slideToggle();
})
```

## In class example
Lets refactor the previous 3 boxes with jQuery

Now you work on your own.
1. Create a box that has some content.
2. Create a second box with some content that is hidden.
3. Give them both some styling
4. Using jQuery, when you click on the first box, make the second box appear.
5. Now make the box toggle instead of just show once.
6. Make another set of boxes. Using jQuery, determine which box has been clicked on and make its subsequent box appear.  

## jQuery Plugins
https://docs.google.com/presentation/d/1wfgc8veSjmchRozmH0JpGwGj4br1bEvOhpxjMjBluac/edit?usp=sharing

## Homework
#### Project 2
Work on the design, layout, and content gathering for Project 2. Really sketch out how it is going to look, get any assets such as images that you may need, and get the content written and finished. Figure out what Plugins you are going to use and additional features the slider is going to have. By next class, you should be ready to start coding.

#### jQuery Data Problem
1. Download the starter zip file called "jquery_data.zip"
2. Add jQuery to your project using this CDN link: https://code.jquery.com/
3. Follow the commands in the `scripts.js` file and complete the problem
4. Upload your project to Github
5. Submit the URL to this Google Form: https://goo.gl/forms/qxIQuR96mnoY2gwU2
