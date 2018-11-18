'use strict';

/*import LOCALSTORAGE from './local_storage';

class Model {
    constructor() {
        this.notes = LOCALSTORAGE.get('notes') || [];
    }
    add(note) {
        this.notes.unshift(note);
    }
    remove(url) {
        this.notes = this.notes.filter(item => item.url !== url);
    }
    get(index) {
        return this.notes[index];
    }
    getAll() {
        return this.notes;
    }
    save() {
        LOCALSTORAGE.set('notes', this.notes);
    }
}
*/
import LOCALSTORAGE from './local_storage';

const key = '5c0045ceab9e7ab8e9ef52f45f5ccd819e0d96f017447';
const urlImg = 'img/ribbon.png';

export default class Model {
    constructor() {
        this.notes = LOCALSTORAGE.get('notes') || [];
    }
    addItem(url) {
        const obj = { url, image: urlImg};
        this.notes.unshift(obj);
        return fetch(`https://api.linkpreview.net/?key=${key}&q=${url}`).then(response => response.json()).
        then(data => {

            obj.name = data.title === ''? url : data.title;
            if(data.image !== '')
                obj.image = data.image;

            return obj;
        });
    }
    contains(url) {
        return this.notes.some(note => note.url === url);
    }
    removeItem(url) {
        this.notes = this.notes.filter(item => item.url !== url);
    }
    getAll() {
        return this.notes;
    }
    save() {
        LOCALSTORAGE.set('notes', this.notes);
    }
}