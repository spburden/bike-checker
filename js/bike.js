function Bike(){

}

Bike.prototype.getColor = function(color, bikes){
    var counter = 0;
    for (var i = 0; i < bikes.length; i++) {
      for (var j = 0; j < bikes[i].frame_colors.length; j++) {
        if(bikes[i].frame_colors[j] === color){
          counter += 1;
        }
      }
    }
    console.log(counter);
    return counter;
};

exports.bikeModule = Bike;
