$(function(){
  console.log('scripts loaded');

  $.ajax({
  type: 'GET',
  url: './js/nations.json',
  success: function(data){
    console.log(data);
    buildDT(data);
  },

  error: function(error) {
    console.log(error);
  },
});

function buildDT(data) {
  $('#table').dataTable({
    data: data,
    columns: [
      {"data": "name"},
      {"data": "Area"},
      {"data": "Population"},
      {"data": "Airports"}
    ]
  })
}

});
