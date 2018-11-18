export  default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.on('add', this.addNote.bind(this));
        this.view.on('remove', this.removeNote.bind(this));
        this.view.on('valid', this.valid.bind(this));

        this.view.show(this.model.getAll());

        window.onunload = () => {
            this.model.save();
        };
    }

    valid(url) {
        const isUrl = this.model.contains(url);
        this.view.valid(isUrl);
    }
    addNote(url) {
        const promise = this.model.addItem(url);
        promise.then(obj => this.view.addNote(obj));
    }
    removeNote(url) {
        this.model.removeItem(url);
    }
}
