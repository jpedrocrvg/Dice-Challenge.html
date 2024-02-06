document.getElementById("roll-dice").addEventListener("click", function() {
    document.getElementById("startMessage").style.display = "none"; // Oculta a mensagem inicial
    rollDice(); 
});

 
 function rollDice() {
    function getRandomNumber(min, max) {
        
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var randomNumber1 = getRandomNumber(1,6);
    var randomNumber2 = getRandomNumber(1,6)

    var ImageDice = "./images/dice"+ randomNumber1 +".png";
    var ImageDice2 = "./images/dice"+ randomNumber2 +".png";
    var leftDice = document.getElementById("leftDice");
    leftDice.setAttribute("src",ImageDice);

    var rightDice = document.getElementById("rightDice");
    rightDice.setAttribute("src",ImageDice2)

    var element = document.querySelector("h1");
    if (randomNumber1 > randomNumber2) {
        element.innerHTML = "<p>Player 1 Wins</p>";
    } else if (randomNumber2 > randomNumber1) {
        element.innerHTML = "<p>Player 2 Wins</p>"
    } else {
        element.innerHTML = "<p>It's a draw</p>"
    }
 }

