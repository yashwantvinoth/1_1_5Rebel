
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
    }
    return "";
}

document.getElementById('numOfDigitsSlider').addEventListener('input', () => {
    if (document.getElementById("numOfDigitsSlider").value == 2) {
        document.getElementById('numOfDigitsText').textContent = 'Number Of Digits: 2 (Recommended)';
    } else {
        document.getElementById('numOfDigitsText').textContent = 'Number Of Digits: ' + document.getElementById("numOfDigitsSlider").value;
    }
});

function oneplayer_init() {
    let secretNumber = 0;
    secretNumber = String(Math.floor(Math.random() * 10));
    for (let i = 0; i < document.getElementById("numOfDigitsSlider").value - 1; i++) {
        secretNumber = String(secretNumber) + String(Math.floor(Math.random() * 10));
    };
    document.cookie = "secretNumber=" + secretNumber;
    document.cookie = "guessesRemaining=10";
}

function initGame() {
    document.getElementById("GuessesRemaining").textContent = "Guesses Remaining: " + getCookie(guessesRemaining);
}
window.onload = initGame();

function guess() {
    let secretNumber = getCookie("secretNumber");
    let guess = document.getElementById("guess").value;
    guessesRemaining = getCookie("guessesRemaining");
    if (guess > secretNumber) {
        document.getElementById("guess").value = "";
        guessesRemaining = guessesRemaining - 1;
        document.cookie = "guessesRemaining=" + guessesRemaining;
        document.getElementById("GuessesRemaining").textContent = "Guesses Remaining: " + guessesRemaining;
        document.getElementById("LowerHigherText").textContent = "Guess Lower";
        document.getElementById("WinLoseText").textContent = "";
    } else if (guess < secretNumber) {
        document.getElementById("guess").value = "";
        guessesRemaining = guessesRemaining - 1;
        document.cookie = "guessesRemaining=" + guessesRemaining;
        document.getElementById("GuessesRemaining").textContent = "Guesses Remaining: " + guessesRemaining;
        document.getElementById("LowerHigherText").textContent = "Guess Higher";
        document.getElementById("WinLoseText").textContent = "";
    } else if (guess == secretNumber) {
        document.getElementById("guess").value = "";
        guessesRemaining = guessesRemaining - 1;
        document.cookie = "guessesRemaining= ";
        document.getElementById("GuessesRemaining").textContent = "Guesses Remaining: " + guessesRemaining;
        document.getElementById("LowerHigherText").textContent = "Congradulations!";
        document.getElementById("WinLoseText").textContent = "You Win";
        
    }

}