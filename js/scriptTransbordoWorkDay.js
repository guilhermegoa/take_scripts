// Receive the variables as parameters
const run = (offset, start, end, workDays) => {
    offset = parseInt(offset);
    let today = nowUTC(offset);
    let startDate = utcDate(start, today);
    let endDate = utcDate(end, today);

    return ((today - startDate) > 0) && ((endDate - today) > 0) && isWorkDay(today, workDays) ? 'Sim' : 'Nao';
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

//Get if today is a work day
const isWorkDay = (today, workDays) => {
    workDays = workDays.split(',');

    return workDays.indexOf(today.getDay().toString()) >= 0;
}

const offset = "-3"
const start = "09:00";
const end = "00:00"
const endWeekend = "00:00"
const workDays = [1, 2, 3, 4, 5];

console.log(run(offset, start, end, workDays));