# What is the DOM?
When a web page has loaded in the browser, you have access to the elements via the DOM. We model the nested structure of an HTML page with the DOM (Document Object Model) Tree. The browser makes a "map" of all the elements on a page.

![understand-dom.png](https://tiy-learn-content.s3.amazonaws.com/8565897f-understand-dom.png)

## Understanding the DOM
In short, the **Document Object Model** (DOM for short) is a can be thought of as a set of functionality wrapped around the HTML and CSS in a web page.

A helpful analogy is an apartment building. To change paint colors, add or remove walls, rewire electrical work, and so on, tenants go through a _landlord_ who approves and allows changes in an organized way. Rather than just taking a sledgehammer to load-bearing wall, tenants request the change, and the request is approved or denied. The landlord can also provide information about the current state of things, like when repairs or scheduled.

In this case the apartment is your live HTML and CSS in a browser, you're the tenant, and the DOM is the landlord. In other words, the DOM is the interface between you and the changes you'd like to make.

### To change some content:
1. What elements do I need to get?
2. What method do I need to use on them?
3. What event will trigger that action?

For example:
1. I need to get the `h1 class="header"`
2. I need to change the `color="green"`
3. I want this to happen when a user clicks the `button`

## JS Methods- Getting an Element
Your browser automatically builds a Document Object to store the DOM of a page. We can use Javascript to manipulate the DOM or our HTML/CSS code.  

### By ID
You can find a single element by id using the method:
<br>`document.getElementById('id-name');`


### By Class Name
You can find a single element by class using the method:
`document.getElementByClassName('class-name');`


### By Tag Name
You can find certain types of HTML elements (multiple nodes) using this method:
`document.getElementsByTagName('tagName');`


### By Query Selector
You can find a collection of more specific HTML elements using this method:
`document.querySelector('query selector // for example div');`

What gets returned by querySelector is the first element it finds - even if other elements exist that could get targeted by the selector.

`document.querySelectorAll('query selector // for example #parent .child');`

What gets returned by querySelectorAll is a list of the elements that match the specified group of selectors.



## JS Methods- Manipulating an Element
Javascript has a lot of useful built in properties that can help us do things in the DOM such as store values, print to the HTML page, and change styles. Here are some of the most common:


### Getting the value
You can store the value of an element by using the value method.

`<input id="text-input">`

`document.getElementById("text-input").value;`


### Setting and removing Attributes
You can set and remove attributes to certain elements depending on the action or condition.
`<h1>This is a boring generic h1 tag</h1>`

- You can add a class attribute called red:
`document.querySelector("h1").setAttribute("class", "red");`

- You can remove a class attribute called red:
`document.querySelector("h1").removeAttribute("class", "red");`


### Styling an element
You can change page and element styles through the style property.

`<h1 id="change-me">Change Me</h1>`

`document.querySelector("#change-me").style.backgroundColor = "green";`


### Printing to the HTML page
You can print something to the html page using the inner html property

`<div id="getme"></div>` (this is an empty div)

`document.querySelector("#getme").innerHTML = "Print this text to the page";`


## JS Events
An 'event' is a type of object that is created when the user interacts with a web page. This is the third part to using JS.

There are a [ton](https://developer.mozilla.org/en-US/docs/Web/Events) of events in javascript Some of the most common:
- click
- mouseover
- open
- load
- submit


### Javascript Event Listeners
An event listener is a function that listens for an event. When that event is triggered, the function will be called automatically.

There are several ways you can use event listeners to talk between HTML and Javascript.

For example, lets say we want make a popup on the click of a button:
`<button id="click-me">Click Me</button>`


### addEventListener()
The add event listener method attaches an event handler to the specified element.

```js
// 1. Store the button as a variable
var button = document.querySelector("#click-me");

// 2. Listen for a click on button
button.addEventListener("click", function(){

  // 3. Get the year
  alert('Button has been clicked!!!');
});
```

## Let's practice
Lets Redo the MadLib assignment using inputs instead of prompts
Follow me in Codepen

## Bill Calculator
Pair up and do the following. Each group should email me the completed link at lnamer@live.unc.edu

Create a tip calculator that takes the total bill and lets you select either 15%, 20%, or 25% tip. Output the final total after tip.
