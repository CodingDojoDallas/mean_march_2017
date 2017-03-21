// #1
function runningLogger(){
  console.log("I am running!");
}

// #2
function multiplyByTen(n){
  return n*10;
}
multiplyByTen(5);

// #3
function stringReturnOne(){
  return "this string";
}

function stringReturnTwo(){
    return "this other string";
}

// #4
function caller(param){
  if (typeof param === function){
    caller();
  }
}

// #5
function myDoubleConsoleLog(x,y){
	if (typeof x && typeof y === function){
		console.log(x, y);
	}
}

// #6
function caller2(x){
	console.log("starting");
	if (typeof x === function){
		setTimeout(x, 2000);
		console.log("ending?")
		return "interesting"
	}
}

caller2(myDoubleConsoleLog(x,y))












