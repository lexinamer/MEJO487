$(document).ready(function(){

  // Set up Ajax Request
  $.ajax({
    type: 'GET',
    url: 'https://www.govtrack.us/api/v2/role?current=true&role_type=senator',
    success: function(data){
      // Console log the data and examine it
      console.log(data);
      
      // Pass the data to a function
      doWork(data);
    },
    error: function(error) {
      console.log(error);
    }
  })

   // Write a function to do all the work
  function doWork(data){
    
    // Figure out what data you need and use it
    for(var i=0; i<data.objects.length; i++) {
      console.log(data.objects[i].person.firstname);
      console.log(data.objects[i].person.birthday);
    }
  }
});
