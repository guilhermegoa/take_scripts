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
    let utc_timestamp = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),
        now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());

    return new Date(utc_timestamp + offset * 3600 * 1000);
}

//Get UTC Date
const utcDate = (timeString, today) => {
    let now = new Date;

    let hour = getValueByString('hour', timeString);
    let minutes = getValueByString('minutes', timeString);
    let utc_timestamp = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate(),
        hour, minutes, 0, 0);
    return new Date(utc_timestamp);
}

//Get hour/minute by string with pattern HH:mm
const getValueByString = (type, timeString) => {

    if (type === 'hour') {
        return parseInt(timeString.substring(0, timeString.indexOf(':')));
    } else if (type === 'minutes') {
        return parseInt(timeString.substring(timeString.indexOf(':') + 1, timeString.length));
    }

    return 0;
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