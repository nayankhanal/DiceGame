
var randomNumber1=(Math.random()*6)+1;
randomNumber1=Math.floor(randomNumber1);
var randomDice1="images/dice"+ randomNumber1+ ".png";
document.querySelectorAll("img")[0].setAttribute("src",randomDice1);

var randomNumber2=(Math.random()*6)+1;
randomNumber2=Math.floor(randomNumber2);
var randomDice2="images/dice"+ randomNumber2+ ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDice2);

if(randomNumber1>randomNumber2)
{
  document.querySelector(".container h1").innerHTML="Player 1 Wins!";
}
else if (randomNumber2>randomNumber1) {
  document.querySelector(".container h1").innerHTML="Player 2 Wins!";
}
else{
  document.querySelector(".container h1").innerHTML="Draw";
}
