var initialAlignment = function (color, type, initialPlace) {
    var initial;
    initial = document.querySelector('.row li.' + initialPlace + ' div');
    initial.classList.add(type, color);
};

var makeAmove = function () {
    var initialPlacement = document.querySelector('#initial').value;
    var targetPlacement = document.querySelector('#target').value;
    var final = document.querySelector('.' + targetPlacement);
    var initial = document.querySelector('.' + initialPlacement);
    var piece = initial.firstChild;
    initial.removeChild(piece);
    final.appendChild(piece);
};

var clearBoard = function () {
    let list = document.querySelectorAll('.row li');
    for (var i = 0; i < list.length; i += 1) {
        var item = list[i].querySelector('div');
        item.removeAttribute('class');
    }
};

var selectPiece = function (elem) {
    if (elem.hasChildNodes()) {
        document.querySelector('#initial').value = elem.className;
    }
    else {
        document.querySelector('#target').value = elem.className;
    }
};

var selectBlankPiece = function (elem) {
    document.querySelector('#target').value = elem.className;
};