var randomNumber1 = Math.random();
randomNumber1= (Math.floor(randomNumber1*6))+1;
var imageNumber1="dice"+randomNumber1+".png";
var imageDice1="images/"+imageNumber1;
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",imageDice1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var imageDice2="images/"+"dice"+randomNumber2+".png";
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src",imageDice2);

if(randomNumber1 === randomNumber2){
  document.querySelector(".container h1").innerHTML="Its a Draw!";
}
else if(randomNumber1===6){
  document.querySelector(".container h1").innerHTML="Player 1 wins!";
}else if (randomNumber2===6) {
  document.querySelector(".container h1").innerHTML="Player 2 wins!";
} else{
  document.querySelector(".container h1").innerHTML="Refresh Me";
}
