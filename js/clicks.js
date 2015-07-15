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
      $("#cat-clicks").text("Num clicks: " + cats[index].numClicks);
    });

  });

  $("#cat-img").click(function(e) {
    var name = $("#cat-name").text();
    console.log(name);

    var cat;
    for (cat in cats){
      if (cats[cat].name == name){
        console.log("Found index : " + cat);
        cats[cat].numClicks++;
        $("#cat-clicks").text("Num clicks: " + cats[cat].numClicks);
      }
    }
  });

});

function displayCatList(){
  var cat;
  for (cat in cats){
    var catLi = "<li id=\"cat-list-item\" >" + cats[cat].name + "</li>";
    $("#cat-list").append(catLi);
  }
}


