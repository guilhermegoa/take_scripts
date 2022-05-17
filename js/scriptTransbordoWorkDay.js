// Receive the variables as parameters
const run = (offset, workSchedule) => {
    workSchedule = JSON.parse(workSchedule);
    const today = nowUTC(parseInt(offset));
    const workDay = getWorkDay(today, workSchedule);

    if (!!workDay) {
        const intervalTime = getIntervalTime(workDay, today);
        return checkTime(intervalTime, today) ? "Sim" : "Nao";
    }

    return "Nao";
}

const getWorkDay = (today, workSchedule) => {
    return workSchedule.find(datas => datas.dayNumber == today.getDay());
}

const getIntervalTime = (workDay, today) => {
    return workDay.workTime.map(time => {
        return {
            start: utcDate(time.start, today),
            end: utcDate(time.end, today)
        }
    });
}

const checkTime = (intervalTime, today) => {
    return intervalTime.some(time => today - time.start > 0 && today - time.end < 0)
}

//Get now UTC Date
const nowUTC = (offset) => {
    const now = new Date();
    const utc_timestamp = Date.UTC(
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
const utcDate = (timeString, today) => {
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
const getHourAndMinutes = (timeString) => {
    const time = timeString.split(":");
    return {
        "hour": time[0],
        "minutes": time[1]
    };
}

let workSchedule = [
    {
        "dayNumber": 1,
        "name": "Monday",
        "portugueseName": "Segunda",
        "workTime": [
            {
                "start": "08:00",
                "end": "17:00"
            }
        ]
    },
    {
        "dayNumber": 2,
        "name": "Tuesday",
        "portugueseName": "Terça",
        "workTime": [
            {
                "start": "08:00",
                "end": "17:00"
            }
        ]
    },
    {
        "dayNumber": 3,
        "name": "Wednesday",
        "portugueseName": "Quarta",
        "workTime": [
            {
                "start": "08:00",
                "end": "17:00"
            }
        ]
    },
    {
        "dayNumber": 4,
        "name": "Thursday",
        "portugueseName": "Quinta",
        "workTime": [
            {
                "start": "08:00",
                "end": "17:00"
            }
        ]
    },
    {
        "dayNumber": 5,
        "name": "Friday",
        "portugueseName": "Sexta",
        "workTime": [
            {
                "start": "08:00",
                "end": "17:00"
            }
        ]
    },
    {
        "dayNumber": 6,
        "name": "Saturday",
        "portugueseName": "Sábado",
        "workTime": [
            {
                "start": "07:00",
                "end": "12:00"
            }
        ]
    }
];

console.log(run("-3", JSON.stringify(workSchedule)))