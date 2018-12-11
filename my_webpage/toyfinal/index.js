var nemo = document.querySelector("#nemo");
var dory = document.querySelector("#dory");
var dory2 = document.querySelector("#dory2");
var pearl = document.querySelector("#pearl");
var turtle = document.querySelector("#turtle");
var turtle2 = document.querySelector("#turtle2");
var shark = document.querySelector("#shark");
nemo.addEventListener("click", play);
dory.addEventListener("click", gameOver);
dory2.addEventListener("click", gameOver);
pearl.addEventListener("click", gameOver);
turtle.addEventListener("click", gameOver);
turtle2.addEventListener("click", gameOver);
shark.addEventListener("click", gameOver);

//-- main--//
function play(){
  update();
}
//--end of main--//

//--update time--//
function update(){
  var now = new Date; //time right now
  var sec = now.getSeconds();
  if(sec%2 == 0){
    positionNemo();
    positionDory();
    positionDory2();
    positionPearl();
    positionTurtle();
    positionTurtle2();
    positionShark();
  }
}
setInterval(update, 1000);
//--end--//

//scoring and ends//
function score(){
  var score;
  if(nemo.onclick == true){
    score++;
    return score;
  }
}

function gameOver(){
  var answer = confirm("Oops That wasn't Nemo! Restart?")
	if (answer){
		alert("Bye bye!")
		window.location = "https://aileenpan005.github.io/my_webpage/toyfinal/index.html";
	}
	else{
		alert("Thanks for sticking around!")
	}

}
//-- end --//

//--items--//
function positionNemo(){
  var el = nemo.getBoundingClientRect();
  var y = el.top
  var r = el.right
  var h = el.bottom
  var w = el.left

  y = Math.random()*800;
  x = Math.random()*1600;
  w = el.right
  h = el.bottom

  console.log(x,y,w,h);

  nemo.style.top= y+"px";
  nemo.style.left= x+"px";
  nemo.style.bottom= h+"px";
  nemo.style.right= w+"px";

}
function positionDory(){
  var el = dory.getBoundingClientRect();
  var y = el.top
  var r = el.right
  var h = el.bottom
  var w = el.left

  y = Math.random()*700;
  x = Math.random()*1550;
  w = el.right
  h = el.bottom

  console.log(x,y,w,h);

  dory.style.top= y+"px";
  dory.style.left= x+"px";
  dory.style.bottom= h+"px";
  dory.style.right= w+"px";

}
function positionDory2(){
  var el = dory2.getBoundingClientRect();
  var y = el.top
  var r = el.right
  var h = el.bottom
  var w = el.left

  y = Math.random()*750;
  x = Math.random()*1550;
  w = el.right
  h = el.bottom

  console.log(x,y,w,h);

  dory2.style.top= y+"px";
  dory2.style.left= x+"px";
  dory2.style.bottom= h+"px";
  dory2.style.right= w+"px";

}
function positionPearl(){
  var el = pearl.getBoundingClientRect();
  var y = el.top
  var r = el.right
  var h = el.bottom
  var w = el.left

  y = Math.random()*750;
  x = Math.random()*1600;
  w = el.right
  h = el.bottom

  console.log(x,y,w,h);

  pearl.style.top= y+"px";
  pearl.style.left= x+"px";
  pearl.style.bottom= h+"px";
  pearl.style.right= w+"px";

}
function positionTurtle(){
  var el = turtle.getBoundingClientRect();
  var y = el.top
  var r = el.right
  var h = el.bottom
  var w = el.left
  y = Math.random()*800;
  x = Math.random()*1600;
  w = el.right
  h = el.bottom
  console.log(x,y,w,h);
  turtle.style.top= y+"px";
  turtle.style.left= x+"px";
  turtle.style.bottom= h+"px";
  turtle.style.right= w+"px";
}
function positionShark(){
  var el = shark.getBoundingClientRect();
  var y = el.top
  var r = el.right
  var h = el.bottom
  var w = el.left
  y = Math.random()*720;
  x = Math.random()*1600;
  w = el.right
  h = el.bottom
  console.log(x,y,w,h);
  shark.style.top= y+"px";
  shark.style.left= x+"px";
  shark.style.bottom= h+"px";
  shark.style.right= w+"px";
}
function positionTurtle2(){
  var el = turtle2.getBoundingClientRect();
  var y = el.top
  var r = el.right
  var h = el.bottom
  var w = el.left
  y = Math.random()*800;
  x = Math.random()*1600;
  w = el.right
  h = el.bottom
  console.log(x,y,w,h);
  turtle2.style.top= y+"px";
  turtle2.style.left= x+"px";
  turtle2.style.bottom= h+"px";
  turtle2.style.right= w+"px";
}
//--end of items--//
