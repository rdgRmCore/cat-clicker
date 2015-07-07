// Whole-script strict mode syntax
"use strict";

var numClicks = 0;
$(document).ready(function(){
  $("#cat-img").click(function(e) {
    numClicks++;
    $("#num-clicks").text("Num clicks: " + numClicks);
    
  });
});

