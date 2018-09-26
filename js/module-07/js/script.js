'use strict';
const posts = [
    {
        img: "https://placeimg.com/400/150/arch",
        title: "Post title 1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        link: 'link-1.com'
    },
    {
        img: "https://placeimg.com/400/150/nature",
        title: "Post title 2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        link: 'link-2.com'
    },
    {
        img: "https://placeimg.com/400/150/arch",
        title: "Post title 3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        link: 'link-3.com'
    }
];
function createPostCard({img, title, text, link}) {
    let post = document.createElement('div');
    post.classList.add('post');

    let post__image = document.createElement('img');
    post__image.classList.add('post__image');
    post__image.setAttribute('src', img);
    post__image.setAttribute('alt', 'post image');

    let post__title = document.createElement('h2');
    post__title.classList.add('post__title');
    post__title.textContent = title;

    let post__text = document.createElement('p');
    post__text.classList.add('post__text');
    post__text.textContent = text;

    let btn = document.createElement('a');
    btn.classList.add('button');
    btn.setAttribute('href', '#');
    btn.textContent = link;

    post.append(post__image);
    post.append(post__title);
    post.append(post__text);
    post.append(btn);

    return post;
}
function createCards(posts) {
    return posts.map(item => createPostCard(item));
}


let con = document.querySelector('.con');
let div = document.createElement('div');
createCards(posts).forEach(item => div.append(item));
con.append(div);