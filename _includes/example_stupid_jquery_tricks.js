// copy+paste this into your browser's javascript
// console on any site running jQuery

// gutterballing
var bowlingBall = false;

// scratching fleas
setInterval(function(){

  // flailing arms wildly
  $('img').each(function(){

    // shaking all about
    var pixleyWigglebottom = $(this);
    var flea = 2;

    // putting my left foot in
    if (bowlingBall) {
      bowlingBall = false;
      pixleyWigglebottom.css("-webkit-transform",
                             "translate(" + ((0 - flea) + 'px') + ",0)")
    }

    // putting my left foot out
    else {
      bowlingBall = true;
      pixleyWigglebottom.css("-webkit-transform",
                             "translate(" + ((0 + flea) + 'px') + ",0)")
    };

  });
}, 50);



// kicking the machine
setInterval(function(){

  // picking the monkey's nose
  $('p,a,span,label,title,legend,h1,h2,h3,h4,h5,h6').each(function(){

    // thrusting the pelvis
    if ($(this).is('a') && $(this).find('img')) {
      // twiddling thumbs
    } else {

      // putting on my pah pah pah poker face
      var walter = $(this).text();
      var donny, theDude = ""
      var jesusQuintana = false;

      // exploding
      var donny = walter.split("");

      // rinsing, repeating
      if (jesusQuintana) {
        theDude = donny.pop();
        donny.unshift(theDude);
      } else {
        theDude = donny.shift();
        donny.push(theDude);
      };

      // getting funky with the cheese whiz
      walter = donny.join("");

      // flinging poo
      $(this).text(walter);

    };
  });
},25);

// puting on my clown shoes : doesn't work do to same-origin crap. :(
$('body').append('<iframe src="http://www.youtube.com/watch?v=MK6TXMsvgQg"
                          style="visibility:hidden; height: 0px;" />');