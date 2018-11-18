'use strict';
import EventEmitter from '../js/EventEmitter';
const VALID_URL = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

export default class View extends EventEmitter{
    constructor() {
        super();

        this.form = document.querySelector('.form');
        this.input = this.form.querySelector('input');
        this.notesGrid = document.querySelector('.notes-grid');
        this.isUrl = false;

        this.form.addEventListener('submit', this.handleAdd.bind(this));
    }

    valid(isUrl) {
        this.isUrl = isUrl;
    }
    show(notes) {
        this.notesGrid.append(...notes.map(note => this.createNote(note)));
    }
    handleAdd(evt) {
        evt.preventDefault();

        const {value} = this.input;

        if(value === '') return;

        this.emit('valid', value);
        if(this.isUrl) {
            alert('Такая вкладка уже есть');
            return;
        }

        if(!VALID_URL.test(value)) {
            alert('Введеный url не верный');
            return;
        }

        this.emit('add', value);

    }

    createNote(note) {
        const box = document.createElement('div');
        box.classList.add('box');

        const pic = document.createElement('div');
        pic.classList.add('pic');

        const img = document.createElement('img');
        img.setAttribute('src', note.image);


        const a = document.createElement('a');
        a.classList.add('node');
        a.setAttribute('href', note.url);
        a.textContent = note.name;


        const button = document.createElement('button');
        button.classList.add('delete');
        button.dataset.action = 'remove';
        button.textContent = 'X';

        pic.appendChild(img);
        box.append(pic, a, button);

        this.appendEventListeners(box);
        return box;
    }
    addNote(note) {
        const item = this.createNote(note);

        this.form.reset();

        this.notesGrid.insertAdjacentElement('afterbegin', item);
    }
    appendEventListeners(item) {
        const removeBtn = item.querySelector('[data-action="remove"]');

        removeBtn.addEventListener('click', this.handleRemove.bind(this));
    }
    handleRemove({target}) {
        const parent = target.closest('.box');
        const url = parent.querySelector('a').getAttribute('href');
        parent.remove();

        this.emit('remove', url);
    }
}