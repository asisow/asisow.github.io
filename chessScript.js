const letterRow = 'abcdefgh';
const figureView = "♕♔♗♘♖♙♛♚♝♞♜♟";
//draw board uses drawPieces because we call this function on page load
let drawBoard = () => {
    let board = document.querySelector('.board');
    for (let i = 0; i < 8; i += 1) {
        let row = document.createElement('ul');
        let numberMark = String(8 - i);
        for (j = 0; j < 8; j += 1) {
            let cell = document.createElement('li');
            let letterMark = letterRow[j];
            cell.classList.add(letterMark + numberMark);
            cell.setAttribute("onclick", 'selectPiece(this)');
            row.appendChild(cell);
        }
        row.classList.add('row');
        board.appendChild(row);
    }
    let letterMarksRow = document.createElement('ol');
    for (j = 0; j < 8; j += 1) {
            let cell = document.createElement('li');
            let letterMark = letterRow[j];
            cell.innerHTML = letterMark;
            letterMarksRow.appendChild(cell);
        }
     board.appendChild(letterMarksRow);
    drawPieces();
}
//draw chessPiece function
let drawPiece = (piece, place, cls) => {
    let cell = document.querySelector('.' + place);
    let fig = document.createElement('div');
    fig.innerHTML = piece;
    fig.className = cls;
    cell.appendChild(fig);
}

//initial pieces placement
let
let data = requires('server');
console.log('data recieved');
let drawPieces = () => {
    drawPiece(figureView[4], 'a1', 'R white piece');
    drawPiece(figureView[4], 'h1', 'R white piece');
    drawPiece(figureView[3], 'b1', 'N white piece');
    drawPiece(figureView[3], 'g1', 'N white piece');
    drawPiece(figureView[2], 'c1', 'B white piece');
    drawPiece(figureView[2], 'f1', 'B white piece');
    drawPiece(figureView[0], 'd1', 'Q white piece');
    drawPiece(figureView[1], 'e1', 'K white piece');
    for (let i = 0; i < letterRow.length; i += 1) {
        drawPiece(figureView[5], letterRow[i] + '2', 'p white piece');
    }
    drawPiece(figureView[10], 'a8', 'R black piece');
    drawPiece(figureView[10], 'h8', 'R black piece');
    drawPiece(figureView[9], 'b8', 'N black piece');
    drawPiece(figureView[9], 'g8', 'N black piece');
    drawPiece(figureView[8], 'c8', 'B black piece');
    drawPiece(figureView[8], 'f8', 'B black piece');
    drawPiece(figureView[6], 'd8', 'Q black piece');
    drawPiece(figureView[7], 'e8', 'K black piece');
    for (let i = 0; i < letterRow.length; i += 1) {
        drawPiece(figureView[11], letterRow[i] + '7', 'p black piece');
    }
}
//select a piece.
let selectPiece = function (elem) {
  if (elem.hasChildNodes()) {
    let piece = elem.firstChild.classList[1];
    let side = document.querySelector('input[type=radio]:checked').value;
    lightenMoveArea(elem.firstChild);
    if (piece === side) {
        document.querySelector('#initial').value = elem.className;
        lightenMoveArea(elem.firstChild);
    }
    else if (piece != side) {
        document.querySelector('#typeOfMove').value = 'X';
        document.querySelector('#target').value = elem.className;
    }
   }
  else {
      document.querySelector('#typeOfMove').value = ':';
      document.querySelector('#target').value = elem.className;
  }

};


//removePiece function
let removePiece = function (object) {
    let piece = object.firstChild;
    object.removeChild(object.firstChild);
};
//clearMovementCross after move
let clearMCross = () => {
    document.querySelector('#initial').value = '';
    document.querySelector('#target').value = '';
    document.querySelector('#typeOfMove').value = '';
}
//add a move to the history
let makeAnOption = (piece) => {
    let select = document.querySelector('#hist');
    let type = document.querySelector('#typeOfMove').value;
    let option = document.createElement('option')
    option.classList.add()
    option.innerHTML =  piece.classList[0] + document.querySelector('#initial').value + type + document.querySelector('#target').value;
    select.appendChild(option);
}
// Make a move function
let makeAmove = function () {
    //Check if movementCross has data
    if (document.querySelector('#initial').value && document.querySelector('#target').value) {
        //Get the player side to check
        let side = document.querySelector('input[type=radio]:not(:checked)');
        //Get the initial and target coordinates
        let final = document.querySelector('.' + document.querySelector('#target').value);
        let initial = document.querySelector('.' + document.querySelector('#initial').value);
        let piece = initial.firstChild;

        initial.removeChild(piece);
        final.appendChild(piece);
        side.checked = true;
        makeAnOption(piece);
        clearMCross();
    }
};

let clearBoard = function () {
    let list = document.querySelectorAll('.row li');
    for (let i = 0; i < list.length; i += 1) {
        if (list[i].hasChildNodes()) {
            let item = list[i].querySelector('div');
            list[i].removeChild(list[i].firstChild);
        }
    }
    drawPieces();
    clearMCross();
    let options = document.querySelectorAll('.history option');
    console.log(options);
};

let lightenMoveArea = (piece) => {
    let letterRow = 'abcdefgh';
    let lightenCoordinate = [];
    if (piece.classList[0] === 'p') {
        let x = letterRow.indexOf(piece.parentElement.classList.value[0]);
        let y = piece.parentElement.classList.value[1];
        for (let i = 1; i <=2; i += 1) {
            lightenCoordinate.push(letterRow[x] + (Number(y) + i));
        }
    }
};