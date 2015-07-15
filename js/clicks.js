// Whole-script strict mode syntax
"use strict";


function Cat(Name){
  this.name = Name;
  this.numClicks = 0;
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
  
  //use jQuery selector to loop through each element of the list
  $("#cat-list li").each(function (index) {
    console.log(index + ": " + $(this).text());
    //set a click handler for each name in the list
    $(this).click(function(e){
      var name = $(this).text();
      var fileName = "img/" + name + ".jpg";
      $("#cat-name").text(name);
      $("#cat-img").attr("src",fileName);
    });

  });

  $("#cat-img").click(function(e) {
    var name = $("#cat-name").text();
    console.log(name);
    //cats[index].numClicks++;
    //$("#cat-clicks").text("Num clicks: " + cats[index].numClicks);
  });

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


