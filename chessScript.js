const letterRow = 'abcdefgh';
const figureView = "♕♔♗♘♖♙♛♚♝♞♜♟";
//
let drawBoard = () => {
    for (let i = 0; i < 8; i += 1) {
        let board = document.querySelector('.board');
        let row = document.createElement('ul');
        let numberMark = String(8 - i);
        for (j = 0; j < 8; j += 1) {
            let cell = document.createElement('li');
            let letterMark = letterRow[j];
            cell.classList.add(letterMark + numberMark);
            cell.innerHTML = letterMark + numberMark;
            cell.addEventListener('click', selectPiece(self), false);
            row.appendChild(cell);
        }
        row.classList.add('row');
        board.appendChild(row);
    }
}

let selectPiece = function (elem) {
   console.log(elem);
  if (elem.hasChildNodes) {
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



let removePiece = function (object) {
    let piece = object.firstChild;
    object.removeChild(object.firstChild);
};

let clearMCross = () => {
    document.querySelector('#initial').value = '';
    document.querySelector('#target').value = '';
    document.querySelector('#typeOfMove').value = '';
}

let makeAnOption = (piece) => {
    let select = document.querySelector('#hist');
    let type = document.querySelector('#typeOfMove').value;
    let option = document.createElement('option')
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
};

let lightenMoveArea = (piece) => {
    let letterRow = 'abcdefgh';
    let lightenCoordinate = [];
    if (piece.classList[0] === 'p') {
        let x = letterRow.indexOf(piece.parentElement.classList.value[0]);
        let y = piece.parentElement.classList.value[1];
        for (let i = 1; i <=2; i += 1) {
            console.log(x, letterRow[x], Number(y), i, Number(y) + i);
            lightenCoordinate.push(letterRow[x] + (Number(y) + i));
            console.log(lightenCoordinate);
            console.log(letterRow);
        }
    }
};