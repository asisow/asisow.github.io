//createElement function
var createElement = (type, cls)=> {
    let elem = document.createElement(type);
    elem.className = cls;
    return elem
}
//createDayBlock uses createElement
let createDayBlock = (dateNumber, dayOfWeek, type) => {
    let cls = 'date-' + type + ' ' + dayOfWeek;
    let block = createElement('a', cls);
    type = 'date-' + type;
    block.href = '#';
    return block;
}
//global variables **need to add if statement to determine leap year**
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
const months = Object.keys(daysInMonths) //['January','February','March','April','May','June','July','August','September','October','November','February'];
let currentDate = new Date();
if (currentDate.getFullYear % 4 === 0) {
    daysInMonths.February += 1;
}
let currentMonth = currentDate.getMonth();
let week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', ]
//determine previous month days quantity and day of week of previous month
let previousMonthDaysQuantity = daysInMonths[months[currentDate.getMonth() - 1]]
let dayPreviousMonthsWeek = previousMonthDaysQuantity - currentDate.getDay();
let firstDayOfMonth = new Date(currentDate.getFullYear(), currentMonth);
let weekDayOfMonth = firstDayOfMonth.getDay();
//fill previous month days if first of current month is no a monday
if (firstDayOfMonth.getDay() > 1) {
    for (let i =  previousMonthDaysQuantity - firstDayOfMonth.getDay() + 2; i <= previousMonthDaysQuantity; i += 1) {
        let dayOfWeek = 0;
        let block1 = createDayBlock(i, week[dayOfWeek], 'grey')
        block1.innerHTML = i;
        board.appendChild(block1);
        dayOfWeek += 1;
    }
}
//fill current month
for (i = 1; i <= daysInMonths[months[currentDate.getMonth()]]; i += 1) {
    let dayOfWeek = week[weekDayOfMonth];
    let block = createDayBlock(i, dayOfWeek, 'thisMonth')
    block.innerHTML = i;
    board.appendChild(block);
    weekDayOfMonth = (weekDayOfMonth + 1) % 7;
}
//determine left days to fill
let leftDays = 8 - weekDayOfMonth;
//fill left tiles
if (weekDayOfMonth < 7) {
    for (let i = 1; i <=  leftDays; i += 1) {
        let block1 = createDayBlock(i, week[weekDayOfMonth], 'grey')
        block1.innerHTML = i;
        board.appendChild(block1);
        weekDayOfMonth = (weekDayOfMonth + 1) % 7;
    }
}
