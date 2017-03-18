//Create a function that takes in one parameter called “name” and returns an object that looks similar to the person object from JS Fundamentals Part II.

function get_person(name) {

    var person = {
        name: name,
        distance_traveled: 0,
        say_name: function () {
            alert(this.name);
        },
        say_something: function (x) {
            console.log(this.name + ' says ' + x);
        },
        walk: function () {
            alert(this.name + "is walking");
            this.distance_traveled = this.distance_traveled + 3;
        },
        run: function () {
            alert(this.name + "is running");
            this.distance_traveled = this.distance_traveled + 10;
        },
        crawl: function () {
            alert(this.name + "is crawling");
            this.distance_traveled = this.distance_traveled + 1;
        }
    };

    return person;
}

var p = get_person("Ollieberto");
p.say_something("Back to work, meow!");