let removePiece = function (object) {
    let piece = object.firstChild;
    object.removeChild.firstChild;
};

let makeAmove = function () {
    let side = document.querySelector('input[type=radio]:checked');
    let initialPlacement = document.querySelector('#initial').value;
    let targetPlacement = document.querySelector('#target').value;
    let final = document.querySelector('.' + targetPlacement);
    let initial = document.querySelector('.' + initialPlacement);
    let piece = initial.firstChild;
    initial.removeChild(piece);
    final.appendChild(piece);
};

let clearBoard = function () {
    let list = document.querySelectorAll('.row li');
    for (let i = 0; i < list.length; i += 1) {
        let item = list[i].querySelector('div');
        item.removeAttribute('class');
    }
};

let selectPiece = function (elem) {
  if (elem.hasChildNodes()) {
    let piece = elem.firstChild.classList[1];
    let side = document.querySelector('input[type=radio]:checked').value;
    if (piece === side) {
        document.querySelector('#initial').value = elem.className;
    }
    else {
        let
    }

  }
  else {
    document.querySelector('#target').value = elem.className;
  }
};

let selectBlankPiece = function (elem) {
    document.querySelector('#target').value = elem.className;
};
