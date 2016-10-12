//var apiKey = require('./../.env').apiKey;
var Bike = require('./../js/bike.js').bikeModule;

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

$(document).ready(function(){
  var testBike = new Bike();
  $("form").submit(function(event){
    event.preventDefault();
    $("#bike-info").empty();
    var color = toTitleCase($("#bike-color").val());
    // var bikeModel = toTitleCase($("#bike-model").val());
    // var result;
    // var redCount;
    // var blueCount;

    $.get('https://bikeindex.org:443/api/v2/bikes_search/stolen?page=1&per_page=20000&proximity=45.521728%2C-122.67326&proximity_square=100&access_token=629e57ce4c332bc4c5a48d5039f21a2bda71b402220fbe07a1b4781990888443')
    .then(function(response) {
      console.log(response);

      var counter = testBike.getColor(color, response.bikes);
      $("#bike-info").append(counter);
      // for (var i = 0; i < response.bikes.length; i++) {
      //   alert("first for");
      //    var bikeDesc = response.bikes[i].title.split(" ");
      //    var bikeTitle = bikeDesc[1];
      //   console.log(bikeDesc);
      //
      // for( var j = 0; i < response.bikes.length; i++){
      //
      // }
      //   if (bikeTitle === bikeModel) {
      //     result = bikeTitle;
      //     //index = i;
      //     $("#bike-info").append(response.bikes[i].title);
      //     $("#bike-info").append("<img src=" + response.bikes[i].thumb + ">");
      //   }
      // }
      //console.log(JSON.stringify(response));
      // $("#bike-info").append(response.bikes[1].title);

    });
  });
});
