// Whole-script strict mode syntax
"use strict";


var Model = {

    cats: [
      {"name": "chewie",     "numClicks": 0},
      {"name": "furry",      "numClicks": 0},
      {"name": "kitten",     "numClicks": 0},
      {"name": "sockington", "numClicks": 0},
      {"name": "watson",     "numClicks": 0}
    ],

  GetAllCats: function(){
    return Model.cats;
  },
  GetNumClicks: function(index){
    return Model.cats[index].numClicks;
  },
  IncrementNumClicks: function(index){
    Model.cats[index].numClicks++;
  },
  FindIndex: function(name){
    var cat;
    for (cat in Model.cats){
      if (Model.cats[cat].name == name){
        return cat;
      }
    }
  }
};

$(document).ready(function(){
  Controller.Init();
});

var Controller = {
  Init: function(){
    CatListView.render();

    //use jQuery selector to loop through each element of the cat list
    $("#cat-list li").each(function (index) {
      //set a click handler for each name in the list
      $(this).click(function(e){
        CatDetailView.render(index, $(this).text(), Model.GetNumClicks(index));
      });

    });

    //Set Click handler for cat image
    $("#cat-img").click(function(e) {
      var name = $("#cat-name").text();
      var index = Model.FindIndex(name);

      Model.IncrementNumClicks(index);
      CatDetailView.UpdateClicks(Model.GetNumClicks(index));

    });
  },

  GetCats: function(){
    return Model.GetAllCats();
  }
}

var CatListView = {
  render: function(){
    var cats = Controller.GetCats();
    var cat;
    for (cat in cats){
      var catLi = "<li id=\"cat-list-item\" >" + cats[cat].name + "</li>";
      $("#cat-list").append(catLi);
    }
  }
}

var CatDetailView = {
  render: function(Index,Name,Clicks){
        var fileName = "img/" + Name + ".jpg";
        $("#cat-name").text(Name);
        $("#cat-img").attr("src",fileName);
        CatDetailView.UpdateClicks(Clicks);
  },
  UpdateClicks: function(NumClicks){
    $("#cat-clicks").text("Num clicks: " + NumClicks);
  }
  

}


