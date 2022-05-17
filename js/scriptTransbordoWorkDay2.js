// Receive the variables as parameters
const run = (offset, start, end, startWeekend, endWeekend, workDays) => {
    offset = parseInt(offset);
    const today = nowUTC(offset);

    if (!isWorkDay(today, workDays)) {
        return "Nao";
    }

    let startDate;
    let endDate;
    const WEEKEND_WORK_DAY = 6; // Saturday constant

    if (today.getDay() == WEEKEND_WORK_DAY) {
        startDate = utcDate(startWeekend, today);
        endDate = utcDate(endWeekend, today);
    }
    else {
        startDate = utcDate(start, today);
        endDate = utcDate(end, today);
    }

    return isWorkTime(today, startDate, endDate) ? 'Sim' : 'Nao';
}

//Get if is work time
const isWorkTime = (today, startDate, endDate) => {
    return (today - startDate) > 0 && (endDate - today) > 0;
}

//Get if today is a work day
const isWorkDay = (today, workDays) => {
    workDays = workDays.replace('[', '').replace(']', '').split(',');

    return workDays.some(dayNumber => dayNumber == today.getDay());
}

//Get now UTC Date
const nowUTC = (offset) => {
    let now = new Date;
    let utc_timestamp = Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        now.getUTCHours(),
        now.getUTCMinutes(),
        now.getUTCSeconds(),
        now.getUTCMilliseconds()
    );

    return new Date(utc_timestamp + offset * 3600 * 1000);
}

//Get UTC Date
function utcDate(timeString, today) {
    const { hour, minutes } = getHourAndMinutes(timeString);
    const utc_timestamp = Date.UTC(
        today.getUTCFullYear(),
        today.getUTCMonth(),
        today.getUTCDate(),
        hour,
        minutes,
        0,
        0
    );
    return new Date(utc_timestamp);
}

//Get hour/minute by string with pattern HH:mm
function getHourAndMinutes(timeString) {
    const time = timeString.split(":");
    return {
        "hour": time[0],
        "minutes": time[1]
    };
}

const offset = "-3"
const start = "06:00";
const end = "18:00"
const startWeekend = "07:00"
const endWeekend = "13:00"
const workDays = [1, 2, 3, 4, 5, 6];

console.log(run(offset, start, end, startWeekend, endWeekend, JSON.stringify(workDays)));