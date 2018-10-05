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

let makeAnOption = (piece, initialPlacement, targetPlacement) => {
    let select = document.querySelector('#hist');
    let type = document.querySelector('#typeOfMove').value;
    let option = document.createElement('option')
    option.innerHTML =  piece.classList[0] + initialPlacement + type + targetPlacement;
    select.appendChild(option);
}
// Make a move function
let makeAmove = function () {
    //Check if movementCross has data
    if (document.querySelector('#initial').value && document.querySelector('#target').value) {
        //Get the player side to check
        let side = document.querySelector('input[type=radio]:not(:checked)');
        //Get the initial and target coordinates
    let initialPlacement = document.querySelector('#initial').value;
    let targetPlacement = document.querySelector('#target').value;
        let final = document.querySelector('.' + targetPlacement);
        let initial = document.querySelector('.' + initialPlacement);
        let piece = initial.firstChild;
        initial.removeChild(piece);
        final.appendChild(piece);
        side.checked = true;
        clearMCross();
        makeAnOption(piece, initialPlacement, targetPlacement);
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