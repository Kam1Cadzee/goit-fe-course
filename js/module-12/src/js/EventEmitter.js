export  default  class EventEmitter {
    constructor() {
        this.events = {};
    }
    on(type, handler) {
        this.events[type] = this.events[type] || [];
        this.events[type].push(handler);
    }
    emit(type, ...args) {
        if(this.events[type])
            this.events[type].forEach(item => item(...args));
    }
}