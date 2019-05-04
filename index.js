var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

switch (randomNumber1) {
    case 1:
        document.querySelector(".img1").setAttribute("src", "images/dice1.png");
        break;
    case 2:
        document.querySelector(".img1").setAttribute("src", "images/dice2.png");
        break;
    case 3:
        document.querySelector(".img1").setAttribute("src", "images/dice3.png");
        break;
    case 4:
        document.querySelector(".img1").setAttribute("src", "images/dice4.png");
        break;
    case 5:
        document.querySelector(".img1").setAttribute("src", "images/dice5.png");
        break;
    case 6:
        document.querySelector(".img1").setAttribute("src", "images/dice6.png");
        break;
    default:
        console.log("Nothing Chosen");
}

switch (randomNumber2) {
    case 1:
        document.querySelector(".img2").setAttribute("src", "images/dice1.png");
        break;
    case 2:
        document.querySelector(".img2").setAttribute("src", "images/dice2.png");
        break;
    case 3:
        document.querySelector(".img2").setAttribute("src", "images/dice3.png");
        break;
    case 4:
        document.querySelector(".img2").setAttribute("src", "images/dice4.png");
        break;
    case 5:
        document.querySelector(".img2").setAttribute("src", "images/dice5.png");
        break;
    case 6:
        document.querySelector(".img2").setAttribute("src", "images/dice6.png");
        break;
    default:
        console.log("Nothing Chosen");
}

if (randomNumber1 > randomNumber2) {
    document.querySelector(".container h1").innerHTML = "Player1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector(".container h1").innerHTML = "Player2 Wins!";
} else {
    document.querySelector(".container h1").innerHTML = "DRAW";
}