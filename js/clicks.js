// Whole-script strict mode syntax
"use strict";

var numClicks = [0,0];
$(document).ready(function(){
  $("#kitten-img").click(function(e) {
    numClicks[0]++;
    $("#kitten-clicks").text("Num clicks: " + numClicks[0]);
    
  });
  $("#chewie-img").click(function(e) {
    numClicks[1]++;
    $("#chewie-clicks").text("Num clicks: " + numClicks[1]);
    
  });
});

