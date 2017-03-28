function VehicleConstructor(name, numWheels, numPassengers) {

    var vehicle = {};
    vehicle.pass_count = 0;
    vehicle.makeNoise = function () {

    };
    return vehicle;
}

var bike = VehicleConstructor("bike",2,1);
bike.makeNoise = function () {
    console.log("ring","ring");

};

var sedan = VehicleConstructor("sedan",4,4);
sedan.makeNoise = function(){
    console.log("Honk","Honk");
};

var bus = VehicleConstructor("bus",4,20);
bus.pickup = function(numPassenger){
    bus.pass_count = numPassenger + bus.pass_count;

}

sedan.makeNoise();