$(document).ready(function(){
  console.log('test loaded');

  // Declare Variables
  var url = './js/nations.json';
  var nations = '';

  // Ajax call
  $.ajax({
    type: 'GET',
    url: url,
    data: nations,
    async: true,
    success: function(nations){
      // Console Log Data
      console.log(nations);
      // Callback function
      buildChart(nations);

    },
    error: function(error){
      console.log(error);
    }
  });

  // Function
  function buildChart(nations){
    // Make chart
    var chart = new Taucharts.Chart({
      guide: {
        x: {label: 'Infants'},
        y: {label: 'People\'s Lives'},
      },
      data: nations,
      type: 'scatterplot',
      x: 'Infant Mortality Rate',
      y: 'Life Expectancy',
      color: 'Obesity Rate',
      size: 'Per Capita Group',
      plugins: [
        Taucharts.api.plugins.get('tooltip')({
          fields: ['name', 'Infant Mortality Rate', 'Unemployment Rate', 'Life Expectancy']
        }),
        Taucharts.api.plugins.get('legend')()
      ],
    })

    // Print chart to page
    chart.renderTo('#results');
  }


});//close ready wrapper
