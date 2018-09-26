console.log('hello world');

// var boxes = document.querySelectorAll('.box');
// console.log(boxes);
//
// for(var i=0; i<boxes.length; i++) {
//   boxes[i].addEventListener('click', blueBoxes, false);
// }
//
// function blueBoxes(event){
//   var clicked = event.target;
//   clicked.style.background = 'red';
// }

$('.box').click(function(){
  $(this).css('background', 'red');
})

var pinkbox = $('.pinkbox');
var tealbox = $('.tealbox');

tealbox.hide();

pinkbox.click(function(){
  tealbox.slideToggle();
})

$('.boxy').click(function(){
  $(this).next('.hidden').slideToggle();
})


$("#modal").iziModal({
  title: 'I am a modal',
  subtitle: 'This is cool',
});
