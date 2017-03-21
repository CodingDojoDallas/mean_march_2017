var myFirstFunction = function(x,y){
  var sum;
  for (var i=x; i<=y; i++){
    sum += i;
    };
  console.log(sum);
};

var mySecondFunction = function(arr){
  var min;
  for (var k = 0; k<arr.length; k++){
    if(arr[k]<arr[k+1]){
      min = arr[k];
      }
    }
  return low;
};

var myThirdFunction = function(arr2){
var sum2;
for (var j = 0; j< arr2.length; j++){
  sum += arr2[j];
};
return sum/arr2.length;
};

var myObj = {
  myFirst : myFirstFunction,
  mySecond : mySecondFunction,
  myThird : myThirdFunction,
}

var person = {
  name : "Zach",
  distance_traveled : 0,
  say_name: function(){alert(this.name)},
  say_something: function(something){console.log(name + " says I am cool!")},
  walk: function(){alert(this.name + " is walking"); distance_traveled+=3},
  run: function(){alert(this.name + " is running"); distance_traveled+=10},
  crawl: function(){alert(this.name + " is crawling"); distance_traveled+=1},
}
