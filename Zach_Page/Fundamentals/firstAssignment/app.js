x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]
for (thing in x) {
  console.log(x[thing]);
};

x.push(100);

x.push(["hello", "world", "JavaScript is Fun"]);
console.log(x);
var sum = 0;
for (var i=0; i<501; i++){
  sum += i ;
}
console.log(sum);


y = [1, 5, 90, 25, -3, 0];
for (var i = 0; i<y.length; i++){
  if(y[i]>y[i+1]){
    var low = y[i+1];
  }

}
console.log(low);

var sum = 0;
for (var j = 0; j<y.length; j++){
  sum += y[j];
}

console.log((sum/(y.length)));

var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}

for (var x in newNinja){
console.log(x, newNinja[x]);
}
