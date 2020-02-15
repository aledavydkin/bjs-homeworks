class AlarmClock {
    constructor(id, alarmCollection) {
        this.alarmCollection = [];
        this.id = '';
        this.timerId = null;
    }

    getCurrentFormattedTime() {
        let date = new Date();
        let hour = date.getHours();
        let minutes = date.getMinutes();

        hour = hour < 10 ? `0${hour}` : `${hour}`;
        minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        date = `${hour}:${minutes}`;
        return date;
    }

    addClock(time, callback, id) {
        if (!id) {
            console.error("id не передан");
            return;
        }
        const empty = this.alarmCollection.find(item => item.id === id);
        if (empty) {
            console.error(`Будильник с таким id который равен=${id} уже существует`);
            return null;
        }
        this.alarmCollection.push({id: id, time: time, callback: callback})
    }

    removeClock(id) {
        return this.alarmCollection = this.alarmCollection.filter(item => item.id !== id);
    }

    printAlarms() {
        function Phonelist(item) {
            console.log(`Будильник №${item.id} Заведен на ${item.time}`);
        }

        console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
        return this.alarmCollection.forEach(Phonelist);
    }

    start() {
        const checkClock = (alarm) => {
            if (alarm.time === this.getCurrentFormattedTime()) {
                alarm.callback(alarm);
            }
        };

        const checkAllAlarms = () => {
            this.alarmCollection.forEach((alarm) => {
                checkClock(alarm);
            });
        };

        this.timerId = setInterval(checkAllAlarms, 1000);
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }

}


const test = new AlarmClock();
console.log(test.addClock('21:00', () => console.log('Скоро спать'), 1));
console.log(test.start());
console.log(test.printAlarms());