var randomNoOne = Math.floor(Math.random()*6) + 1;
document.querySelectorAll("img")[0].setAttribute("src", "./images/dice"+randomNoOne+ ".png");

var randomNoTwo = Math.floor(Math.random()*6) + 1;
document.querySelectorAll("img")[1].setAttribute("src", "./images/dice"+randomNoTwo+ ".png");

if(randomNoOne>randomNoTwo) {
    document.querySelector("h1").innerHTML = "Player One is The Winner !!";
} else if (randomNoOne<randomNoTwo) {
    document.querySelector("h1").innerHTML = "Player Two is The Winner !!"
} else if (randomNoOne===randomNoTwo) {
    document.querySelector("h1").innerHTML = "Its a Draw";
}


