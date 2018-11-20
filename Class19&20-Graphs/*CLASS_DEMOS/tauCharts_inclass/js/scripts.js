$(document).ready(function(){
  console.log('test loaded');

  // Declare Variables
  var url = './js/nations.json';

  // Ajax call
  $.ajax({
    type: 'GET',
    url: url,
    async: true,
    success: function(data){
      // Console Log Data
      console.log(data);
      // Callback function
      buildChart(data);

    },
    error: function(error){
      console.log(error);
    }
  });

  // Function
  function buildChart(data){
    // Make chart
    var chart = new Taucharts.Chart({
      guide: {
        x: {label: {text: 'Infants are Dying', padding: 35}, padding: 20},
        y: {label: {text: 'People\'s Lives', padding: 35}, padding: 20},
      },
      data: data,
      type: 'scatterplot',
      x: 'Infant Mortality Rate',
      y: 'Life Expectancy',
      color: 'Life Expectancy',
      size: 'Per Capita Group',
      plugins: [
        Taucharts.api.plugins.get('tooltip')({
          fields: ['name', 'Infant Mortality Rate']
        }),
        Taucharts.api.plugins.get('legend')()
      ],
    })

    // Print chart to page
    chart.renderTo('#results');
  }


});//close ready wrapper
