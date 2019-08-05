var timer = () => {
    let days = new Date();
    let hours = (days.getHours() % 12).toString();
    let minutes = days.getMinutes().toString();
    let seconds = days.getSeconds().toString();
    let day = days.getDay();
    let month = days.getMonth();
    let displayMonth = "";
    let displayDay = "";
    switch(day) {
        case 0:
            displayDay = "Sunday";
            break;
        case 1:
            displayDay = "Monday";
            break;
        case 2:
            displayDay = "Tuesday";
            break;
        case 3:
            displayDay = "Wednesday";
            break;
        case 4: 
            displayDay = "Thursday";
            break;
        case 5:
            displayDay = "Friday";
            break;
        case 6:
            displayDay = "Saturday";
            break;
    }

    switch(month) {
        case 0:
            displayMonth = "January";
            break;
        case 1:
            displayMonth = "February";
            break;
        case 2:
            displayMonth = "March";
            break;
        case 3:
            displayMonth = "April";
            break;
        case 4:
            displayMonth = "May";
            break;
        case 5:
            displayMonth = "June";
            break;
        case 6:
            displayMonth = "July";
            break;
        case 7:
            displayMonth = "August";
            break;
        case 8:
            displayMonth = "September";
            break;
        case 9:
            displayMonth = "October";
            break;
        case 10:
            displayMonth = "November";
            break;
        case 11:
            displayMonth = "December";
            break;
    }

    let dater = document.getElementById("dater");
    dater.innerHTML = displayDay + " / " + displayMonth + " / " + days.getFullYear();


    if (hours.length < 2) {
        hours = '0' + hours;
    }
    if (minutes.length < 2) {
        minutes = '0' + minutes;
    }
    if (seconds.length < 2) {
        seconds = '0' + seconds;
    }
    let timer = document.getElementById("timer");
    if (days.getHours < 12) {
        timer.innerHTML = hours + " : " + minutes + " : " + seconds + " AM";
        document.getElementById('message').innerHTML = "Good morning !";
        document.body.style.background = "url(../images/morning.jpg) center/cover no-repeat";
    }else {
        timer.innerHTML = hours + " : " + minutes + " : " + seconds + " PM";
        document.getElementById('message').innerHTML = "Good Afternoon !";
        document.body.style.background = "url(../images/afternoon.jpg) center/cover no-repeat";
    }

    if (days.getHours == 12) {
        timer.innerHTML = days.getHours + " : " + minutes + " : " + seconds;
    }
}
setInterval(timer, 1000);