// const timeZoneLondon = 'Europe/London';
// const timeZoneNewYork = 'America/New_York';
// const timeZoneTokyo = 'Asia/Tokyo';
// const timeZoneSydney = 'Australia/Sydney';
// const timeZoneJohannesburg = 'Africa/Johannesburg';

const timeZone = document.getElementById('country');
const displayTime = document.getElementsByClassName('time-slot')[0];
const displayDate = document.getElementsByClassName('date-slot')[0];

function getDateByTimezone() {
    const x = new Date();

    const commonProperty = {
        timeZone: timeZone.value
    }

    const calendarDate = {
        ...commonProperty,
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    }
    const calendarTime = {
        ...commonProperty,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        weekDay: 'long',
        hour12: true
    }

    const intDate = new Intl.DateTimeFormat('en-US', calendarDate);
    const intTime = new Intl.DateTimeFormat('en-US', calendarTime);
    displayDate.textContent = intDate.format(x);
    displayTime.textContent = intTime.format(x);

}

let updateTime = setInterval(getDateByTimezone, 1000);

timeZone.addEventListener('dblclick', startTime);

function startTime() {
    if (updateTime) {
        clearInterval(updateTime);
        updateTime = null;
    } else {
        updateTime = setInterval(getDateByTimezone, 1000);
    }

}