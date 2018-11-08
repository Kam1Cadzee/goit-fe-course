'use strict';

const laptops = [
    {
        size: 13,
        color: 'white',
        price: 28000,
        release_date: 2015,
        name: 'Macbook Air White 13"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
        size: 13,
        color: 'gray',
        price: 32000,
        release_date: 2016,
        name: 'Macbook Air Gray 13"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
        size: 13,
        color: 'black',
        price: 35000,
        release_date: 2017,
        name: 'Macbook Air Black 13"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
        size: 15,
        color: 'white',
        price: 45000,
        release_date: 2015,
        name: 'Macbook Air White 15"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
        size: 15,
        color: 'gray',
        price: 55000,
        release_date: 2016,
        name: 'Macbook Pro Gray 15"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
        size: 15,
        color: 'black',
        price: 45000,
        release_date: 2017,
        name: 'Macbook Pro Black 15"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
        size: 17,
        color: 'white',
        price: 65000,
        release_date: 2015,
        name: 'Macbook Air White 17"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
        size: 17,
        color: 'gray',
        price: 75000,
        release_date: 2016,
        name: 'Macbook Pro Gray 17"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
        size: 17,
        color: 'black',
        price: 80000,
        release_date: 2017,
        name: 'Macbook Pro Black 17"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
];
const filter = { size: [], color: [], release_date: [] }
element('.form').addEventListener('change', e => {
    const chekcBox = e.target;
const name = chekcBox.getAttribute('name');
const checked = chekcBox.checked;


if (checked) {
    filter[name].push(chekcBox.value);
}
else {
    filter[name] = filter[name].filter(item => item !== chekcBox.value);
}

log(filter);
});
element('.submit').addEventListener('click', e => {
    showLaptops(laptops.filter(item => {
    return equal(filter.size, item.size) &&
    equal(filter.color, item.color) &&
    equal(filter.release_date, item.release_date);
}));
function equal(arr, value) {
    return arr.length === 0? true : arr.some(item => item === (value + ''));
}
e.preventDefault();
});
element('.reset').addEventListener('click', e => {
    elements('input[type="checkbox"]').forEach(item => {
    item.checked = false;
});
filter.size = [];
filter.color = [];
filter.release_date = [];
showLaptops(laptops);
e.preventDefault();
});
function showLaptops(laptops) {
    element('.items').innerHTML = '';
    const temp = element('#temp').innerHTML.trim();
    const func = Handlebars.compile(temp);

    let markup = '';

    for(let i = 0; i < laptops.length; i++) {
        markup += func(laptops[i]);
    }

    element('.items').innerHTML = markup;
}

showLaptops(laptops);