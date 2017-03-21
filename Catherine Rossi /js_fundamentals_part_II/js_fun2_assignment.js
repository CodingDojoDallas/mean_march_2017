//Turn into a function then create a simple for loop that sums all the integers between x and y (inclusive). Have it console log the final sum.

function sumIntegers(x, y) {
    sum = 0;
    for (var i = x; i <= y; i++) {
        sum = sum + i;

    }
    console.log(sum);
}

sumIntegers(1, 200);

//Write a function then write a loop that will go through an array, find the minimum value, and then return it.

function min_array(arr) {
    var min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    console.log(min);
}

min_array([1, 5, 90, 25, -3, 0, -100, 2000]);

//Write a function then it write a loop that will go through an array, find the average of all of the values, and then return it.

function avg_array(arr) {

    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = arr[i] + sum;

    }
    console.log(sum / arr.length);
}
avg_array([1, 55, 90, 25, -3, -10]);

//Rewrite these 3 as anonymous functions assigned to variables.

var sumIntegers = function (x, y) {
    sum = 0;
    for (var i = x; i <= y; i++) {
        sum = sum + i;

    }
    console.log(sum);
};

sumIntegers(1, 200);


function getSomeData(callback) {
    var x = 10;
    callback(x)
}

getSomeData(function (here) {
    console.log('getSomeData callback', here);
})
//Rewrite these as methods of an object

var math_object = {

    sumIntegers: function (x, y) {
        sum = 0;
        for (var i = x; i <= y; i++) {
            sum = sum + i;

        }
        console.log(sum);
    }
}

math_object.sumIntegers(1, 500);

//Create a JavaScript object called person with the following properties/methods
//Properties name - set this as your own name. distance_traveled - set this initially as zero

var person = {
    name: "Catherine",
    distance_traveled: 0,
    say_name: function () {
        alert(this.name);
    },
    say_something: function (x) {
        console.log(this.name + ' says ' + x);
    },
    walk:function(){
        alert(this.name + "is walking");
        this.distance_traveled = this.distance_traveled + 3;
    },
    run: function(){
        alert(this.name + "is running");
        this.distance_traveled = this.distance_traveled + 10;
    },
    crawl:function(){
        alert(this.name + "is crawling");
        this.distance_traveled = this.distance_traveled + 1;
    }
};

console.log(person);
person.say_something("I am Cool!");

//Methods: say_name - should alert the object’s name property
// say_something - have it accept a parameter.
// This function should then say for example “{{your name}} says ‘I am cool’” if you pass ‘I am cool’ as an argument to this method.
// walk - have it alert for example “{{your name}} is walking” and increase distance_traveled by 3
// run - have it alert for example “{{your name}} is running” and increase distance_traveled by 10
// crawl - have it alert for example “{{your name}} is crawling” and increase distance_traveled by 1







