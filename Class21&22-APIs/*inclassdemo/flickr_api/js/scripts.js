$(function(){
  console.log('scripts loaded');

  var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+ key + '&tags=nature%2C+mountains&extras=url_o&per_page=50&format=json&nojsoncallback=1';

  $.ajax({
    type: 'GET',
    url: url,
    success: function(data){
      console.log(data.photos.photo);
      buildStuff(data);
    },
    error: function(error){
      console.log(error);
    }
  })

  function buildStuff(data){
    for(i=0; i< data.photos.photo.length; i++) {
      var url = data.photos.photo[i].url_o;

      if(url) {
        $('#results').append('<img src=' + url + '/>');
      }
    }
  }
});
