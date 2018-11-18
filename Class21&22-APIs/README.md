# Class 19/20- Graphs

## Interactive Website Presentations
Email me the link at the start of class.
You each have 3 minutes to complete your presentation.

## APIs
An API (Application Program Interface) is a messenger that takes a request, tells a system what you want, and then returns a response back to you. APIs are what allow software programs to communicate with one another.

If a company wants to provide a developer with access to the information the have (securely and controlled), they would do so in the form of an API.

### But what exactly does this mean?
It's complicated to explain. Let's watch this awesome video instead:
https://www.youtube.com/watch?v=s7wmiS2mSXY

### Selecting an APIs
Picking the wrong API provider could be a major time-sink or marry your user's information (think a payment system) to the limitations of that specific API. Some things to think through:

- Does the API have all the features that you need?
- Does it have GOOD documentation or are you going to be fighting with it to figure out what you are trying to accomplish (bonus if you get actual tangible code examples)?
- Is it open source or paid depending on how much data you use? If there are any data limits, will this affect your user and the app you are building?
- Does it support the data format that you would like to use (ie JSON v XML or a URL encoded string)?
- Is there a good community and support around it in case things go wrong or something breaks? Just do a quick search on Google to make sure people are actually using it.

### Examples of APIs
- Google Maps: You can do awesome things like build a run tracking app
- Youtube: Choose from the data or players API to embed types of players or offer Youtube search capabilities.
- Twitter: Enables an app to interact with most of Twitter’s functions. (they make this difficult to get access to)
- Linkedin: Enables apps to connect to user accounts, data, connections, groups, communications, and social streams.
- Tumblr: Create new ways to use Tumblr with access to content, likes, followers, and drafts.
- Instagram: \*Insert crying emoji here
- Flickr: Search through user Flickr content, contacts, upload or replace photos.
- Census: Access vast datasets from the census on demographics, population, and economic data.
- News.org: Get breaking news headlines, and search for articles from over 30,000 news sources and blogs with our news API

## Using and API
There are so many ways to use an API depending on the site that you are trying to use and the complexity of what you are trying to do. GET v POST data, user interaction, static feeds, etc.

### Reader's digest of using an API
1. I want some data from service X. Does service X have an API? Hooray, it does, and it’s free!
2. Look at the API documentation. Figure out if there is a URL that retrieves the kind of data you’re looking for.
3. Sign up for an API key if one is required (a unique string of letters and numbers to use when accessing the API).
4. Figure out what parameters you need to include in the URL in order to get the exact data you want. For example: `https://api.twitter.com/1.1/search/tweets.json?q=burritos&lang=en`
5. Return the response (hopefully in JSON format) that you can now begin to use.
6. Use options and other features of the API to manipulate the information

### A note on security for API keys
API keys are security given keys that give you direct access to the data. You want to security store them and avoid exposing them to the public client (think Github code, inspecting source files, etc).

Besides the obvious, one reason to keep them private is because public APIs often have rate limits. Your app can break and you will get locked if an API key is exposed and a web scraping bot gets the key.

You can't securely store your API keys in a client side app so you would typically store your API keys in an environment file of some sort, make the API calls server-side and then serve information to the client from there.

We don't have enough time to learn this, so for now we will just hide them from Github using `.gitignore` and a `config.js` file. 

## Homework
Over the next week, you should begin coding your final project. Focus on getting the Data/chart page completed. Make sure to be committing to Github to save your work.
