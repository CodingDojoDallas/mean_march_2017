

function runningLogger(){
  console.log('I am running!');
};

function multiplyByTen(x){
  x = x*10;
  return x;
};

multiplyByTen(5);

function stringReturnOne(){
  return "first hardcoded string";
};
function stringReturnTwo(){
  return "second hardcoded string";
};

function caller(y){
  if(typeof(y)==function(){}){
    y();
  };
};

function myDoubleConsoleLog(a,b){
  if(typeof(a)==function(){} && typeof(b)==function(){}){
      console.log(a());
      console.log(b());
  }
}

function caller2(z){
  console.log('starting');
  if(typeof(z)==function(){})
  setTimeout(z(),2000);
  console.log('ending?');
  return "interesting";
}

caller2(myDoubleConsoleLog);
