# Day 12	| Sass and Local Servers

## Homework Presentations
Each group presents their interactive piece for 5 minutes (you will be timed)

## Sass
- Why we are learning Sass at this point
- Brief review on the benefits of Sass

### Getting Started
- Sass doesn't need to be installed on the server. It just needs to be installed locally on your computers.
- Since the browser doesn't know how to interpret Sass, we need to compile the Sass code to regular CSS

### Installing Sass
1. Lets check to see if we have Node and NPM: `node -v` and `npm -v`
2. Use NPM to install Sass globally on your machine: `npm install -g sass`
3. Double check it installed by running: `sass -v`

### Running Sass
1. Lets download the demo folder from today's class
2. Inspect the different files and folders
3. First, let's make sure the main stylesheet works
4. Now we need to "watch" for any Sass changes
5. cd into the folder from the terminal
6. Watch individual files: `sass --watch sass/style.scss:css/style.css`
7. Watch entire folders: `sass --watch sass:css`

### Basic Commands
- Variables: Reuse single line of code over and over (colors)
- Nesting: Nest child selectors
- Mixins: Reuse multiple lines of code and can use parameters (buttons)
- Partials: Break up your code into bite size files
- Other good stuff: https://sass-lang.com/guide

## Local Servers
Before we get into local servers and data, let's chat about how the Internet works for a bit.

![servers](http://gargasz.info/wp-content/uploads/2009/12/what-is-dns-diagram1.jpg)

Up until now, we've been opening local files by double clicking: file:///Users/lexinamer/Desktop/GitHub/mejo487/index.html

This becomes a problem when we start getting into complex development, like working with external data, using certain libraries for charting and mapping, or using any kind of server side language like PHP or Python.

To get around these problems, we need to run our code through a local web server. One of the easiest ways to do this is to use Python's SimpleHTTPServer module.

### Getting Started
1. Macs should have Python installed by default: `python -V` (note the capitalization)
2. PCs can download here: https://www.python.org/downloads/ (make sure you check the "Add Python 3.xxx to PATH" checkbox)
3. Double check you have it installed: `python -V`
4. Now you can run a local server: `python -m SimpleHTTPServer`
5. Default is now `localhost:8000`

## Project 2
- Lets make sure we can use Github and Github Pages
- We will have a live grading portion where you have to defend your JS code
