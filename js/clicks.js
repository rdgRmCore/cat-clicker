// Whole-script strict mode syntax
"use strict";


var Model = {

    "visible": "false",

    cats: [
      {"name": "sasha",       "numClicks": 0},
      {"name": "seghen",      "numClicks": 0},
      {"name": "samson",      "numClicks": 0},
      {"name": "kitten",      "numClicks": 0},
      {"name": "pang",        "numClicks": 0}
    ],

  GetAllCats: function(){
    return Model.cats;
  },
  GetCatName: function(index){
    return Model.cats[index].name;
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
    CatDetailView.render(0, Model.GetCatName(0), Model.GetNumClicks(0));

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
      CatDetailView.UpdateClicks(Model.GetNumClicks(index), index);

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
      var catLi = "<li id=\"cat-list-item\" >" + cats[cat].name + "</li>" + 
                  "<span>0</span>";
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
  UpdateClicks: function(NumClicks, Index){
    $("li").eq(Index).next().text(NumClicks);
  }
}
