let letterRow = 'abcdefgh';

let removePiece = function (object) {
    let piece = object.firstChild;
    object.removeChild(object.firstChild);
};

let clearMCross = () => {
    document.querySelector('#initial').value = '';
    document.querySelector('#target').value = '';
    document.querySelector('#typeOfMove').value = '';
}

let lightenMoveArea = (piece) => {
console.log(piece);
    if (piece.classList[0] == 'pawn') {
        let x = piece.parentElement.classList.value[0];
        let y = piece.parentElement.classList.value[1];
        console.log(x);
        console.log(y);
        for (let i = 1; i < 2; i += 1) {
            y = letterRow.prototype.findIndex(y);
            console.log(y);
        }
    }
}

let makeAmove = function () {
    let side = document.querySelector('input[type=radio]:not(:checked)');
    let initialPlacement = document.querySelector('#initial').value;
    let targetPlacement = document.querySelector('#target').value;
    let final = document.querySelector('.' + targetPlacement);
    let initial = document.querySelector('.' + initialPlacement);
    let piece = initial.firstChild;
    initial.removeChild(piece);
    final.appendChild(piece);
    side.checked = true;
    clearMCross();
};

let clearBoard = function () {
    let list = document.querySelectorAll('.row li');
    for (let i = 0; i < list.length; i += 1) {
        let item = list[i].querySelector('div');
        item.removeChild();
    }
};

let selectPiece = function (elem) {
  if (elem.hasChildNodes()) {
    let piece = elem.firstChild.classList[1];
    let side = document.querySelector('input[type=radio]:checked').value;
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
