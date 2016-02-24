// console.log(typeof $);
// console.log(typeof $());
// console.dir($());

//never forget the round things after the dollar sign!
// $(function() {
//   console.log("Im in a function scope BIATCH!");
// });
// CSS SELECTORS
// $(function() {
//   var element = $("span");
//   console.log(element);
// });
//
// console.log($('div'));
// console.log($('span').length);
// console.log($('#world'));
// console.log($('div #world'));
// console.log($('span#world'));

//Unobtrusive Javascript
// function onChangeHandler(input) {
//   console.log("Input Changed");
//   console.log(input.value);
//   console.log(input.name);
//   console.log(input.id);
//   console.log(input);
// }

// $(function() {
//   $('input').change(function(event) {
//   console.log(event.target.value);
//   console.log(event.target.name);
//   console.log(event.target.id);
//   console.log(event.target);
//   });
// });

//Dynamic Elements
//place you a bitch inside the input box
// $(function() {
//   $('input').change(function(event) {
//     event.target.value = "YOU A BITCH!";
//   });
// });
//change input box into the word bitch
// $(function() {
// $('input').change(function(event) {
//   var input = event.target;
//   $(input).replaceWith("BITCH")
//  });
// });

//Dynamic Links
// $('a')

$(function() {
  $('a').click(function(event) {
    console.log('link clicked');
    event.preventDefault();
  });
});

//Animations
$(function() {
  $('a').click(function(event) {
    event.preventDefault();
    $(event.target).slideUp('fast')
  })
})
