let createElement = (type, cls)=> {
    let elem = document.createElement(type);
    console.log(elem)
    elem.className = cls;
    return elem
}

let createDayBlock = (dateNumber, dayOfWeek, type) => {
    let cls = 'date-' + type + ' ' + dayOfWeek;
    let block = createElement('a', cls);
    console.log(week[dayOfWeek]);
    type = 'date-' + type;
    block.href = '#';
    return block;
}

let daysInYear = 365;
let daysInMonths = {'January': 31,
'February': 28,
'March': 31,
'April': 30,
'May': 31,
'June': 30,
'July': 31,
'August': 31,
'September': 30,
'October': 31,
'November': 30,
'December': 31};
const board = document.querySelector(".calendar");
let months = Object.keys(daysInMonths) //['January','February','March','April','May','June','July','August','September','October','November','February'];
let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', ]

let firstDayOfMonth = new Date(currentDate.getFullYear(), currentMonth);
let weekDayOfMonth = firstDayOfMonth.getDay();
for (i = 1; i <= daysInMonths[months[currentDate.getMonth()]]; i += 1) {
    let dayOfWeek = week[weekDayOfMonth];
    let block = createDayBlock(i, dayOfWeek, 'thisMonth')
    block.innerHTML = i;
    board.appendChild(block);
    weekDayOfMonth = (weekDayOfMonth + 1) % 7;
}
