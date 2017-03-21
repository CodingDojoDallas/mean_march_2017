function personConstructor(name){
  var person = {
    name : name,
    distance_traveled : 0,
    say_name: function(){alert(this.name)},
    say_something: function(something){console.log(name + " says I am cool!")},
    walk: function(){alert(this.name + " is walking"); distance_traveled+=3},
    run: function(){alert(this.name + " is running"); distance_traveled+=10},
    crawl: function(){alert(this.name + " is crawling"); distance_traveled+=1},
  }
  return person;
}

function ninjaConstructor(name, cohort){
  name: name,
  cohort: cohort,
  belt_level: 'yellow',
  level_up: function(){
    if(belt_level == 'yellow'){
      belt_level='red';
    }
    else if (belt_level == 'red'){
      belt_level == 'black';
    }
    else {
      alert("Sure you made it?")
    }
  },
};
