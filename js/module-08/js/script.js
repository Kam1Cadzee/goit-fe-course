'use strict';

const galleryItems = [
    { preview: 'img/preview-1.jpeg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1" },
    { preview: 'img/preview-2.jpeg', fullview: 'img/fullview-2.jpeg', alt: "alt text 2" },
    { preview: 'img/preview-3.jpeg', fullview: 'img/fullview-3.jpeg', alt: "alt text 3" },
    { preview: 'img/preview-4.jpeg', fullview: 'img/fullview-4.jpeg', alt: "alt text 4" },
    { preview: 'img/preview-5.jpeg', fullview: 'img/fullview-5.jpeg', alt: "alt text 5" },
    { preview: 'img/preview-6.jpeg', fullview: 'img/fullview-6.jpeg', alt: "alt text 6" },
];

// const fullimg = element('.fullview');
// const gallery = element('.preview');
//
// const images = galleryItems.map(item => {
//    const li = document.createElement('li');
//    li.appendChild(createImg(item));
//    return li;
// });
//
// gallery.append(...images);
// gallery.addEventListener('click', onClickImg);
//
// const mainImg = document.createElement('img');
// mainImg.setAttribute('src', galleryItems[0].fullview);
// mainImg.setAttribute('alt', galleryItems[1].alt);
// fullimg.appendChild(mainImg);
//
// let currentImg = gallery.querySelector('img');
// currentImg.classList.add('active-img');



class Gallery {
    constructor({items, parentNode, defaultActiveItem}) {
        this.divFullview = document.createElement('div');
        this.divFullview.classList.add('fullview');

        const divPreview = document.createElement('div');
        divPreview.classList.add('preview');

        const images = items.map((item, index) => {
            const li = document.createElement('li');
            const img = this._createImg(item);
            li.appendChild(img);

            if(index + 1 === defaultActiveItem) {
                img.classList.add('active-img');
                this._currentImg = img;
                const imgE = document.createElement('img');
                imgE.setAttribute('src', item.fullview);
                imgE.setAttribute('alt', item.alt);
                this.divFullview.appendChild(imgE);
            }
            return li;
        });
        divPreview.append(...images);
        divPreview.addEventListener('click', this._onClickImg.bind(this));



        parentNode.append(this.divFullview, divPreview);

    }
    _swap(img) {
        this._currentImg.classList.remove('active-img');
        this._currentImg = img;
        this._currentImg.classList.add('active-img');
    }
    _onClickImg(event) {
        if(event.target.nodeName === 'IMG') {
            const img = this.divFullview.firstElementChild;
            const dataset = event.target.dataset;
            img.setAttribute('src', dataset.fullview);
            img.setAttribute('alt', dataset.alt);

            this._swap(event.target);
        }
    }
    _createImg({preview, fullview, alt}) {
        const img = document.createElement('img');
        img.setAttribute('src', preview);
        img.setAttribute('alt', alt);
        img.dataset.fullview = fullview;
        return img;
    }
}

new Gallery({
    items: galleryItems,
    parentNode: document.querySelector('.image-gallery'),
    defaultActiveItem: 1
});