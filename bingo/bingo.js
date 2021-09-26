window.addEventListener("load", evt => {
    initAll()
});

const colPlace = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4];
const usedNums = new Array(76);

function initAll() {
    if (document.getElementById("square0")) {
        document.getElementById("reload").addEventListener("click", evt => {
            anotherCard()
        });
        newCard();
    } else {
        alert("Przeglądarka nie jest w stanie obłużyć tego skryptu")
    }
}

function anotherCard() {
    for (let i = 1; i < usedNums.length; i++) {
        usedNums[i] = false;
    }
    newCard();
    //do not load href link
    return false;
}

function newCard() {
    for (let i = 0; i < 24; i++) {
        setSquare(i);
    }
}

function setSquare(squareNumber) {
    let colBasis = colPlace[squareNumber] * 15;

    let square = document.getElementById("square" + squareNumber);
    square.className = "";
    square.addEventListener("mousedown", evt => {
        toggleColour(evt)
    });

    while (true) {
        let newNum = colBasis + getRandom() + 1;
        if (!usedNums[newNum]) {
            usedNums[newNum] = true;
            square.innerText = "" + newNum;
            return;
        }
    }
}

function getRandom() {
    return Math.floor(Math.random() * 15);
}

function toggleColour(evt) {
    let currentSquare = evt.target;
    if (currentSquare.className === "") {
        currentSquare.className = "pickedBG"
    } else {
        currentSquare.className = ""
    }
    checkWin();
}


function checkWin() {
    let winningOption = -1;
    let setSquares = 0;
    let winners = [31, 992, 15360, 507904, 541729, 557328, 1083458, 2162820, 4329736, 8519745, 8659472, 16252928];

    for(let i = 0; i < 24; i++) {
        let currentSquare = document.getElementById("square" + i);
        if(currentSquare.className !== "") {
            setSquares = setSquares | Math.pow(2, i);
        }
    }

    for(let i = 0; i < winners.length; i++) {
        if((winners[i] & setSquares) === winners[i]) {
            winningOption = i;
        }
    }

    if(winningOption > -1) {
        for(let i = 0; i < 24; i++) {
            if(winners[winningOption] & Math.pow(2, i)) {
                document.getElementById("square" + i).className = "winningBG";
            }
        }
    }

}