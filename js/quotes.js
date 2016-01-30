// quotes.js

var quotes = ["Who feels it, knows it!", "One good thing about music, when it hits you, you feel no pain.", "Emancipate yourselves from mental slavery, none but ourselves can free our minds!", "When one door is closed, don't you know, another is open.", "Some people feel the rain. Others just get wet.", "Love the life you live. Live the life you love.", "Live for yourself and you will live in vain. Live for others and you will live again.", "Judge not unless you judge yourself", "Open your eyes, look within. Are you satisfied with the life you're living?", "One love, one heart ... let’s get together and feel all right", "You can fool some people some times, but you can't fool all the people all the time", "In this bright future you can't forget your past."];
var prevChoice = 0;

var getQuote = function() {
  var choice = Math.floor(Math.random() * 12);
  while(choice == prevChoice) {
    choice = Math.floor(Math.random() * 12);
  }
  prevChoice = choice;
  return "\"" + quotes[choice] + "\"";
};

$(document).ready(function() {
  $("#tweet_button").click(function() {
      alert("Chant down Babylon!");
  });
});

$(document).ready(function() {
  $("#mo_words_button").click(function() {
      $(".quote h4").html(getQuote());
  });
});