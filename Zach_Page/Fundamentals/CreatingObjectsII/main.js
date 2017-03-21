function Vehicle(name, wheels,speed){
// Private
  var distance_travelled = 0;
  var updateDistanceTravelled= function() {
    distance_travelled += speed;
  }
// Public
  this.name = name;
  this.wheels = wheels;
  this.speed = speed;
  this.passengers = 0;
  this.makeNoise = function(){
    console.log("beep beep");
  }
  this.move = function(){
    updateDistanceTravelled();
    this.makeNoise();
  };
  this.checkMiles = function(){
    console.log(distance_travelled);
  };

}
// New Objects
var bike = new Vehicle("bike", 2, 3)
var sedan = new Vehicle('Sedan', 4, 40)
var bus = new Vehicle("bus", 8, 30)
// Modified methods
bike.makeNoise = function(){
  console.log("Ring ring");
}
sedan.makeNoise = function(){
   console.log("Honk Honk");
 }

// prototype for pickup method
Vehicle.prototype.pickup = function (y){
  this.passengers += y;
};
Vehicle.prototype.vinNumber = function () {
    this.vin = Math.floor(Math.random()*100000000000)
};

// dicking round with objects
bike.makeNoise()
sedan.makeNoise()
bus.checkMiles()
bus.move()
bus.checkMiles()
bus.move()
bus.checkMiles()
bus.pickup(8)
sedan.pickup(3)
bike.pickup(2)
bike.vinNumber()
sedan.vinNumber()
bus.vinNumber()
console.log(bus);
console.log(sedan);
console.log(bike);
console.log(bus);
