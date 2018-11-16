$(document).ready(function(){
  console.log ('DOM loaded');

  // Set up any variables needed
  var url = './js/nations.json';
  var countryNames = [];
  var numAirports = [];
  var pieData = [];

  // Load the JSON data
  $.ajax({
    type: 'GET',
    url: url,
    async: true,
    success: function(data){
      // Console log the data
      // console.log(data);

      // Callbacks for logic and chart
      doLogic(data)
      buildChart(data);
    },

    error: function(error) {
      console.log(error);
    },
});

  // Function to do logic
  function doLogic(data) {
    // Set up a for loop to loop through the data
    for(i = 0; i < data.length; i++) {
      // Push data to different arrays to prepare for chart
      countryNames.push(data[i].name);
      numAirports.push(data[i].Population*1000000/data[i].Airports);
      pieData.push([data[i].name, data[i].UnemploymentRate]);
    }
  }

  // Function to build charts
  function buildChart(data) {
    // Setting some default highchart actions
    Highcharts.setOptions({
      lang: {
        decimalPoint: '.',
        thousandsSep: ','
      }
    })

    // Lets set up the basics of a column chart
    Highcharts.chart('bar-chart', {

      // Chart Type
      chart: {
          type: 'column'
      },

      // Title and Subtitle
      title: {
        text: 'So you think your airport is crowded?'
      },
      subtitle: {
        text: 'Source: CIA World Factbook'
      },

      // Axises
      xAxis: {
        categories: countryNames,
        crosshair: true
      },
      yAxis: {
        title: {
          text: 'Number of people per airport'
        },
        ceiling: 2000000,
      },

      // Actual data plotting
      series: [{
        name: 'Number of people per airport',
        data: numAirports
      }]
    });


    // Lets set up a basic pie chart
    Highcharts.chart('pie-chart', {

      // Chart Type
      chart: {
          type: 'pie'
      },

      // Title and Subtitle
      title: {
        text: 'Ugly Unemployment Rate'
      },
      subtitle: {
        text: 'Same source'
      },
      // Actual data plotting
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
        },
      },
      series: [{
        type: 'pie',
        name: 'Unemployment Rate',
        data: pieData
      }]
    });
  }
});
