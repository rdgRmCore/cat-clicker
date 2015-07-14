// Whole-script strict mode syntax
"use strict";


function Cat(Name){
  this.name = Name;
  this.NumClicks = 0;
}

var cats = [
  new Cat("chewie"),
  new Cat("furry"),
  new Cat("kitten"),
  new Cat("sockington"),
  new Cat("watson")
];

var numClicks = [0,0];
$(document).ready(function(){
  displayCatList();

  //$("#kitten-img").click(function(e) {
    //numClicks[0]++;
    //$("#kitten-clicks").text("Num clicks: " + numClicks[0]);
    
  //});
  //$("#chewie-img").click(function(e) {
    //numClicks[1]++;
    //$("#chewie-clicks").text("Num clicks: " + numClicks[1]);
    
  //});
});

function displayCatList(){
  var cat;
  for (cat in cats){
    var catLi = "<li>" + cats[cat].name + "</li>";
    $("#cat-list").append(catLi);
  }
}


