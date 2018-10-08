let daysInYear = 365
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
'February': 31};
let months = ['January','February','March','April','May','June','July','August','September','October','November','February'];
let currentDate = new Date();
<<<<<<< HEAD
for (i = 1; i <= months[currentDate.getMonth()]; i += 1) {
        let currentMonth = documentQuerySelector('.first-month');
        let daysinMonth = daysInMonths[currentMonth];
        console.log(daysInMonth)
    }
=======
    console.log(months[currentDate.getMonth()]);
for (i = 1; i <= months[currentDate.getMonth()]; i += 1) {
        let currentMonth = documentQuerySelector('.first-month');
    }
>>>>>>> 066d08ac4d89647c8821eca12bfadef55683bb8c
