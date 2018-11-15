# Class 19/20- Graphs

## Final Projects
- Spend 10 mins talking through your final projects with a neighbor.
- Discuss the graphs you are going to use 

## JSON Recap
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

## Charts and Graphs
Information graphics are tools to make stories understandable and to make the invisible visible. Aka, not this.

![info](https://www.utoronto.ca/sites/default/files/2014-09-09-SugarInfographic_0.jpg)

### Basic steps
1. Define the focus, the story, the goals, the task
2. Do some preliminary research
3. Choose graphic forms according to the data
4. Sketches and storyboards; structure the information
5. Complete the research and write the copy
6. Create the graphics, maps, and diagrams
7. Pull it all together

### Choosing the right type of graph
We are trying to show one of four things with the data you have: a relationship between data points, a comparison of data points, a composition of data, or a distribution of data.

#### Relationship
A relationship tries to show a connection or correlation between two or more variables through the data presented, like the market cap of a given stock over time versus overall market trend.

#### Comparison
A comparison tries to set one set of variables apart from another, and display how those two variables interact, like the number of visitors to five competing web sites in a single month.

#### Composition
A composition tries to collect different types of information that make up a whole and display them together, like the search terms that those visitors used to land on your site, or how many of them came from links, search engines, or direct traffic.

#### Distribution
A distribution tries to lay out a collection of related or unrelated information simple to see how it correlates, if at all, and to understand if there's any interaction between the variables, like the number of bugs reported during each month of a beta.

![chart](https://i.imgur.com/ArTMYpJ.jpg)

## Charting Libraries
Awesome guide for choosing the right charting library: https://medium.com/@alberto.park/a-simple-guide-how-to-select-a-chart-library-to-use-6f17878248f0

We're going to be learning Highcharts and Taucharts (a library based on D3). D3 is AMAZING but suuuuper complex. You will learn it if you take the advanced course.

### HighCharts
https://www.highcharts.com/
- Many variations
- Includes maps and tooltips
- Cons: Heavy and can cost (we will use free version)

### TauCharts
https://www.taucharts.com/
- Lightweight
- Free and open source
- Cons: No pie charts or maps

## Homework
### Final Projects
Over the next week, you should begin coding your final project. Focus on getting the Data/chart page completed. Make sure to be committing to Github to save your work.

### Interactive Project Presentations
- Pick an interactive website/piece
- Be ready to present it next Tuesday (Nov 20)
- Each person gets 3 mins- it will be timed
- Discuss pros, cons, suggestions for improvement, users, etc. Make sure not to include any "I think..." statements.
- This will be graded based on how you present.
