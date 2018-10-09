/*
Save this file as calendar.js

Calendar by Henry Kamulanje - 2017
You are free to do whatever you want with the code.

It is long but simple.

I used these
- variables
- Date Object
- if statements
- switch statements
- for loops
- Arrays (not as complicated)
- functions
- html tables
*/
function calendar() {
//Getting time from the date Object. Time at this moment in terms of Year, month, Date and Hour.
    var d = new Date();
    var currentYear = d.getFullYear();
    var currentMonth = d.getMonth();
    var toDay = d.getDate();
    var hours = d.getHours();
//The beginning of the callendar is the year 2017
    var startingYear2017 = 2017;
//We want to preserve toDay variable so we are creating another variable (day) which we will be manipulating
    var day = toDay;
//The variables below determine where first day of the months should begin (this begin with the year 2017 the other years will be determined by 'for loop') The numbers assigned to variables below indicate how many days of the first week are filled. e.g. 1st January 2017 was on Sunday therefore the whole week was occupied. var january = 7;
    var april_July = 1;
    var september_December = 2;
    var june = 3;
    var march_November = 4;
    var february = 4;
    var august = 5;
    var may = 6;
    var january = 7;
    var october = 7;
    var i = "";
    var monthCounter = -1;
//The f() function asigns name of month to month numbers(stored in variable 'mon') from the Date object. It asigns number of week days (the variables above) to be filled to variable i. Maximum number of days in a month to 'm'. Day remain to complete the year at when starting that month to 'r'.
function monthAttributes() {
    if (monthCounter == 0) {
        monthName = "January";
        i = january;
        monthEnd = 31;
        daysRemaining = 365;
    } else if (monthCounter == 1 && march_November == february) {
        monthName = "February";
        i = february;
        monthEnd = 28;
        daysRemaining = 334;
    } else if (monthCounter == 1 && march_November != february) {
        monthName = "February";
        i = february;
        monthEnd = 29;
        daysRemaining = 334;
    } else if (monthCounter == 2) {
        monthName  = "March";
        i = march_November;
        monthEnd = 31;
        daysRemaining = 306;
    } else if (monthCounter == 3) {
        monthName = "April";
        i = april_July;
        monthEnd = 30;
        daysRemaining = 275;
    } else if (monthCounter == 4) {
        monthName = "May";
        i = may;
        monthEnd = 31;
        daysRemaining = 245;
    } else if (monthCounter == 5) {
        monthName = "June";
        i = june;
        monthEnd = 30;
        daysRemaining = 214;
    } else if (monthCounter == 6) {
        monthName = "July";
        i = april_July;
        monthEnd = 31;
        daysRemaining = 184;
    } else if (monthCounter == 7) {
        monthName = "August";
        i = august;
        monthEnd = 31;
        daysRemaining = 153
    } else if (monthCounter == 8) {
        monthName = "September";
        i = september_December;
        monthEnd = 30;
        daysRemaining = 122;
    } else if (monthCounter == 9) {
        monthName = "October";
        i = october;
        monthEnd = 31;
        daysRemaining = 92;
    } else if (monthCounter == 10) {
        monthName = "November";
        i = march_November;
        monthEnd = 30;
        daysRemaining = 61;
    } else if (monthCounter == 11) {
        monthName = "December";
        i = september_December;
        monthEnd = 31;
        daysRemaining = 31;
    } else {
        monthCounter = monthCounter - 12;
        startingYear2017++;
        monthAttributes();
    }
}
//These arrays store all the days in a month needed in the calendar. array 'a31DayMonth' for months with 31 days, 'a30DayMonth' for 30, 'a29DayMonth' for 29 and 'a28DayMonth' for 28. The other array for week names.
var a31DayMonth = new Array("","","","","","","",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,"","","","","","","","","","","");
var a30DayMonth = new Array("","","","","","","",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,"","","","","","","","","","","","");
var a29DayMonth = new Array("","","","","","","",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,"","","","","","","","","","","","","");
var a28DayMonth = new Array("","","","","","","",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,"","","","","","","","","","","","","","");
var week = new Array("Sun","Mon","Tues","Wed","Thur","Fri","Sat");
//newTableRow() closes table row and open a new one. and makes h to be greater than i with a difference of seven.
function newTableRow() {
    document.write("</tr><tr>");
    h = i + 7;
}
//This function start with calling h function to close a row and start a new one. then it writes a column and increments 'i' each time and stop when 'i' equals 'h'. That means it writes seven columns on a single row. It takes content from the arrays. 'i' determines which number to carry from the arrays. Remember 'i' is incrementing each time so is the array id.
function current31DayMonth() {
     newTableRow();
     for (; i < h;) {
        if (day == a31DayMonth[i]) {
            today();
        } else if (i < h - 1) {
            document.write("<td class='red'>" + a31DayMonth[i] + "</td>");
        } else {
            document.write("<td class='sevd'>" + a31DayMonth[i] + "</td>");
        }
    i++;
    }
}
//today function is called to show current date in different style from other date.
function today() {
    document.write("<td class='today'>" + day + "</td>");
}
function current30DayMonth() {
    newTableRow();
    for (; i < h;) {
        if(day == a30DayMonth[i]) {
            today();
        } else if (i < h - 1) {
            document.write("<td class='red'>" + a30DayMonth[i] + "</td>");
        } else {
            document.write("<td class='sevd'>" + a30DayMonth[i] + "</td>");
        }
    i++;
    }
}
function current29DayMonth() {
    newTableRow();
    for (; i < h;) {
        if(day == a29DayMonth[i]) {
            today();
        } else if (i < h - 1) {
            document.write("<td class='red'>" + a29DayMonth[i] + "</td>");
        } else {
            document.write("<td class='sevd'>" + a29DayMonth[i] + "</td>");
        }
    i++;
    }
}
function current28DayMonth() {
    newTableRow();
    for (; i < h;) {
        if (day == a28DayMonth[i]) {
            today();
        } else if (i < h - 1) {
            document.write("<td class='red'>" + a28DayMonth[i] + "</td>");
        } else {
            document.write("<td class='sevd'>" + a28DayMonth[i] + "</td>");
        }
    i++;
    }
}
function other31DayMonth() {
    newTableRow();
    for (; i < h;) {
        if (i < h - 1) {
            document.write("<td>" + a31DayMonth[i] + "</td>");
        } else {
            document.write("<td class='sev'>" + a31DayMonth[i] + "</td>");
        }
    i++;
    }
}
function other30DayMonth() {
    newTableRow();
    for (; i < h;) {
        if (i < h - 1) {
            document.write("<td>" + a30DayMonth[i] + "</td>");
        } else {
            document.write("<td class='sev'>" + a30DayMonth[i] + "</td>");
        }
    i++;
    }
}
function other29DayMonth() {
    newTableRow();
    for (; i < h;) {
        if (i < h - 1) {
            document.write("<td>" + a29DayMonth[i] + "</td>");
        } else {
            document.write("<td class='sev'>" + a29DayMonth[i] + "</td>");
        }
    i++;
    }
}
function other28DayMonth() {
    newTableRow();
    for (; i < h;) {
        if (i < h - 1) {
            document.write("<td>" + a28DayMonth[i] + "</td>");
        } else {
            document.write("<td class='sev'>" + a28DayMonth[i] + "</td>");
        }
    i++;
    }
}
//month function collect weeks generated by current31DayMonth(), current30DayMonth(), current29DayMonth() e.t.c and forms a month.
function month() {
//Here it is checking if the year and month are current.
    if (currentYear == startingYear2017 && monthCounter == currentMonth) {
        monthAttributes();
        var h = i + 7;
        document.write("<table id='cur'><caption class='cur'>" + monthName + " " + startingYear2017 + "</caption><tr class='cu'>");
        for (wk = 0; wk < 7; wk++) {
            document.write("<th class='cu'>" + week[wk] + "</th>");
        }
        for(t = 0; t < 4; t++) {
            current31DayMonth();
        }
        if (monthEnd > 30) {
            current31DayMonth();
            current31DayMonth();
        } else if (monthEnd > 29) {
            current30DayMonth();
            current30DayMonth();
            i = i + 1;
        } else if (monthEnd < 29) {
            current28DayMonth();
            current28DayMonth();
            i = i + 3;
        } else {
            current29DayMonth();
            current29DayMonth();
            i = i + 2;
        }
        if (i < 46) {
            var i = i - 38;
        } else {
            var i = i - 45;
        }
        var h = i + 7;
        document.write("<tr><td class='r' colspan='7'>" + ( daysRemaining - toDay) + " days " + (24 - hours) + " hours remaining to reach " + (startingYear2017 + 1) + "</td></tr></table><hr>");
   } else {
       document.write("<table><caption>" + monthName + " " + startingYear2017 +"</caption><tr>");
        for (wk=0; wk<7; wk++) {
            document.write("<th>" + week[wk] + "</th>");
        }
        for(t = 0; t < 4; t++) {
            other31DayMonth();
        }
        if (monthEnd > 30) {
            other31DayMonth();
            other31DayMonth();
        } else if (monthEnd > 29) {
            other30DayMonth();
            other30DayMonth();
            i = i + 1;
        } else if (monthEnd < 29) {
            other28DayMonth();
            other28DayMonth();
            i = i + 3;
        } else {
            other29DayMonth();
            other29DayMonth();
            i = i + 2;
        }
        if (i < 46) {
            var i = i - 38;
        } else {
            var i = i - 45;
        }
        var h = i + 7;
        document.write("</table><hr>");
    }
}
//monthSorter() function is the function which produces the first month and tell the f() function to start with January (var monthCounter = -1; it is incremented to monthCounter = 0 which is January). When monthSorter() is called again it will increment the months and generate the next month and so on. monthAttributes() function is the one which changes the year from 2017 onwards (in monthAttributes() function it will be incremented after month of December (mon = 11;)).
function monthSorter() {
    var h = i + 7;
    monthCounter++;
    monthAttributes();
    month();
}
//year() put together months generated by monthSorter() into a year
function year() {
    for(j = 0; j < 12; j++ ) {
        monthSorter();
    }
}
//The months in a year start at different day of the week. So these starting days keeping changing. There are seven starting point, Sunday to Sarturday. This function prevents the changes from moving out of the seven day circle. Instead of reaching below 1 it should jump back to 6 or 7. (e.g.var january = 7; if we decrement it january--; it may reach 0, -1, -2 e.t.c. function monChanges() prevents this from happening
function monChanges() {
    switch (october) {
        case 0:
            october = 7;
        break;
        case -1:
            october = 6;
        break;
        default:
            october = october;
        }
    switch (september_December) {
        case 0:
            september_December = 7;
        break;
        case -1:
            september_December = 6;
        break;
        default:
            september_December = september_December;
    }
    switch (june) {
        case 0:
            june = 7;
        break;
        case -1:
            june = 6;
        break;
        default:
        june = june;
    }
    switch (february) {
        case 0:
            february = 7;
        break;
        case -1:
            february = 6;
        break;
        default:
            february = february;
    }
    switch (march_November) {
        case 0:
            march_November = 7;
        break;
        case -1:
            march_November = 6;
        break;
        default:
            march_November = march_November;
    }
    switch (january) {
        case 0:
            january = 7;
        break;
        case -1:
            january = 6;
        break;
        default:
            january = january;
    }
    switch (august) {
        case 0:
            august = 7;
        break;
        case -1:
            august = 6;
        break;
        default:
            august = august;
    }
    switch (may) {
        case 0:
            may = 7;
        break;
        case -1:
            may = 6;
        break;
        default:
            may = may;
    }
    switch (april_July) {
        case 0:
            april_July = 7;
        break;
        case -1:
            april_July = 6;
        break;
        default:
            april_July = april_July;
    }
}
//normalYear() decrement which day of the week a month starts in a normal year
function normalYear() {
    september_December--;
    june--;
    february--;
    march_November--;
    april_July--;
    october--;
    august--;
    may--;
    january--;
    monChanges();
}
//leapYear() decrement which day of the week a month starts in a leap year
function leapYear() {
    april_July-=2;
    october-=2;
    september_December-=2;
    june-=2;
    february--;
    march_November-=2;
    january--;
    august-=2;
    may-=2;
    monChanges();
}
//afterLeapYear() decrement which day of the week a month starts in the year after leap year
function afterLeapYear() {
    september_December--;
    june--;
    february-=2;
    march_November--;
    april_July--;
    october--;
    august--;
    may--;
    january -=2;
    monChanges();
}
var monthName = new Array();
monthName = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
document.write("<a href='#cur'><table id='fix'><tr><td class='fix'> Go to current date <br>" + toDay + "/" + monthName[currentMonth] + "/"+ currentYear + "</td></td></table></a>");
year();
//leapYrCycle() contains 4 years with one leap year. Leap year comes every 4th year from previous leap year.
    for(q = 0; q < 4; q++) {
    normalYear();
    year();
    normalYear();
    year();
    leapYear();
    year();
    afterLeapYear();
    year();
    }
}
//The whole of the above is one big function and is called here, the calendar() function.
calendar();