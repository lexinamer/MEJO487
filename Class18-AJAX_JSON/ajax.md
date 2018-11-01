# AJAX
AJAX stands for Asynchronous JavaScript and XML. AJAX is a new technique for creating better, faster, and more interactive web applications with the help of XML, HTML, CSS, and Java Script.

AJAX is a developer's dream, because you can:
- Update a web page without reloading the page
- Request data from a server - after the page has loaded
- Receive data from a server - after the page has loaded
- Send data to a server - in the background

## How Ajax works?
1. An event occurs in a web page (the page is loaded, a button is clicked)
2. An XMLHttpRequest object is created by JavaScript
3. The XMLHttpRequest object sends a request to a web server
4. The server processes the request
5. The server sends a response back to the web page
6. The response is read by JavaScript
7. Proper action (like page update) is performed by JavaScript

## A few notes about the internet

#### CRUD
All websites involve some combination of these four processes:
- Create new data on the server
- Read existing data
- Update existing data
- Delete data

#### HTTP Requests
A loose translation of CRUD as HTTP requests
- POST = create data on the server
- GET = read existing data
- PUT = update the data
- DELETE = the data

## Lets try an example:
1. Download ajax.ex zip file and unzip it
2. Open the index.html in Chrome
3. Click the "change content" button

```
UH OH! It didn't work. What happened?

- Inspect the console and you will notice this funny CORS message.
- Cross-Origin Resource Sharing (CORS) basically means that the data and data source must some from the same request. Basically, this prevent hackers from injecting malicious scripts into your code. This isn't a problem when your app is live (http://) but it won't work on your local machine.
- This is where the local servers we set up with Python came into play.
```

4. Lets run our local servers again.
5. `python -m SimpleHTTPServer` or `python -m http.server`
6. Go to the localhost post it gave.
7. Now click the button and it should work!
8. Lets go revisit that long XML code to see how its working.


## jQuery to the rescue
Who wants to memorize all of that? No one.

jQuery has a version called `$.ajax()` that makes loading data infinitely simpler.

```js
  $.ajax({
    type: 'GET',
    url: 'example.json',
    data: exampledata,
    success: function(data){
      console.log(data);
    },

    error: function(error) {
      console.log(error);
    },
  });
```
