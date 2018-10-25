'use strict';



class Stopwatch {
    constructor(parentNode) {
        this.createLayout(parentNode);

        this.isActive = false;
        this.startTime = null;
        this.pauseTime = 0;
        this.idTimer = null;

        this.btnStart.addEventListener('click', e => {
            let state = null;
        this.btnReset.removeAttribute('disabled');
        this.btnReset.classList.remove('disabled');
        if(!this.isActive) {
            this.startTime = Date.now();
            this.idTimer = setInterval(() => {
                    let deltaTime = Date.now() - this.startTime + this.pauseTime;
            this.timeLabel.textContent = this.getFormattedTime(deltaTime);
        }, 100);
            this.isActive = true;
            state = 'Pause';
        }
        else {
            clearInterval(this.idTimer);
            this.pauseTime += Date.now() - this.startTime;
            this.isActive = false;
            state = 'Continue';
        }


        this.btnStart.textContent = state;
    });
        this.btnReset.addEventListener('click', () => {
            this.btnReset.setAttribute('disabled', 'disabled');
        this.btnReset.classList.add('disabled');
        clearInterval(this.idTimer);
        this.timeLabel.textContent = '00:00.0';
        this.btnStart.textContent = 'Start';
        this.listLaps.innerHTML = '';
        this.pauseTime = 0;
        this.isActive = false;
    });
        this.btnTakeLap.addEventListener('click', () => {
            let li = document.createElement('li');
        let time = this.isActive ? Date.now() - this.startTime + this.pauseTime: this.pauseTime;
        li.textContent = this.getFormattedTime(time);
        this.listLaps.appendChild(li);
        this.listLaps.scrollTop = 9999; //думаю есть лучший способ
    });

    }
    createLayout(parentNode) {
        let div = document.createElement('div');
        div.classList.add('stopwatch');

        this.timeLabel = document.createElement('p');
        this.timeLabel.classList.add('time', 'js-time');
        this.timeLabel.textContent = '00:00.0';

        this.btnStart = document.createElement('button');
        this.btnStart.classList.add('btn', 'js-start');
        this.btnStart.textContent = 'Start';

        this.btnTakeLap = document.createElement('button');
        this.btnTakeLap.classList.add('btn', 'js-take-lap');
        this.btnTakeLap.textContent = 'Lap';

        this.btnReset = document.createElement('button');
        this.btnReset.classList.add('btn', 'js-reset', 'disabled');
        this.btnReset.textContent = 'Reset';
        this.btnReset.setAttribute('disabled', 'disabled');

        div.append(this.timeLabel, this.btnStart, this.btnTakeLap, this.btnReset);

        this.listLaps = document.createElement('ul');
        this.listLaps.classList.add('laps', 'js-laps');

        parentNode.append(div, this.listLaps);
    }
    getFormattedTime(time) {
        let date = new Date(time);
        let minute = date.getMinutes();
        let seconds = date.getSeconds();
        let milliseconds = Math.floor(time % 1000 / 100);

        if(minute < 10) minute = '0' + minute;
        if(seconds < 10) seconds = '0' + seconds;
        return `${minute}:${seconds}:${milliseconds}`;
    }
}

new Stopwatch(document.querySelector('.timer'));