console.log("SIMON GAME");

let gameSeq = [];
let userSeq = [];

let h3 = document.querySelector("#h3");
let h4 = document.querySelector("h4");
let btns = ["yellow", "red", "purple", "green"];
let started = false;
let level = 0;

document.addEventListener("keypress", function () {
    console.log("game was Started");

    if (started == false) {
        console.log("Game Started");
        started = true;
    }

    levelUp();
});

function btnFlashGame(btn) {
    btn.classList.add("gameFlash");

    setTimeout(() => {
        btn.classList.remove("gameFlash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randButton = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);

    btnFlashGame(randButton);
}

function btnFlashUser(btn) {
    btn.classList.add("userFlash");

    setTimeout(() => {
        btn.classList.remove("userFlash");
    }, 250);
}

function btnPress() {
    console.log(this);

    let btn = this;

    btnFlashUser(btn);

    let userColor = btn.getAttribute("id");

    userSeq.push(userColor);
    console.log(userSeq);

    checkAns(userSeq.length - 1);
}

let allBtn = document.querySelectorAll(".btn");

for (let btn of allBtn) {
    btn.addEventListener("click", btnPress);
}

function checkAns(idx) {
    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        HighScore();

        h4.innerText = `Your High Score is ${highScore}`;

        h3.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press Any Key To Start Again.`;

        document.querySelector("body").style.backgroundColor = "red";

        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);

        reset();
    }
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

let highScore = 0;

function HighScore() {
    let currentScore = level;

    if (currentScore > highScore) {
        highScore = currentScore;

        let Super = highScore;
        console.log(Super);
    }
}

