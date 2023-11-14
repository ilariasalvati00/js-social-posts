const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "03-09-2021"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "15-05-2021"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "03-04-2021"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "05-03-2021"
    }
];

const container = document.getElementById("container");

posts.forEach((e) => {
    const post = document.createElement("div");
    post.classList.add("post");
    container.appendChild(post);

    const post_header = document.createElement("div");
    post_header.classList.add("post__header");
    post.appendChild(post_header);

    const post_text = document.createElement("div");
    post_text.classList.add("post__text");
    post.appendChild(post_text);

    const text = document.createElement("div");
    text.classList.add("post__text");
    post.appendChild(text);
    text.innerHTML = e.content;

    if (e.hasOwnProperty("media") && e.media!=""){

        const post_image = document.createElement("div");
        post_image.classList.add("post__image");
        post.appendChild(post_image);

        const image = document.createElement("img");
        image.src= e.media;
        post_image.appendChild(image);
    }


    const post_footer = document.createElement("div");
    post_footer.classList.add("post__footer");
    post.appendChild(post_footer);

    const postmeta = document.createElement("div");
    postmeta.classList.add("post-meta");
    post_header.appendChild(postmeta);

    const postmeta_icon = document.createElement("div");
    postmeta_icon.classList.add("post-meta__icon");
    postmeta.appendChild(postmeta_icon);

    const profilepic = document.createElement("img");
    profilepic.classList.add("profile-pic");
    profilepic.src= e.author.image;
    profilepic.alt = e.author.name;
    postmeta_icon.appendChild(profilepic);

    const postmeta_data = document.createElement("div");
    postmeta_data.classList.add("post-meta__data");
    postmeta.appendChild(postmeta_data);

    const author = document.createElement("div");
    author.classList.add("post-meta__author");
    author.innerHTML = e.author.name;
    postmeta_data.appendChild(author);

    const time = document.createElement("div");
    time.classList.add("post-meta__time");
    let mesi_passati = Math.floor((Date.now() - Date.parse(e.created))/1000/60/60/24/30);
    time.innerHTML = `${mesi_passati} mesi fa`
    postmeta_data.appendChild(time);

    const postmeta_author = document.createElement("div");
    postmeta_author.classList.add("post-meta__author");
    postmeta_data.appendChild(postmeta_author);

    const postmeta_time = document.createElement("div");
    postmeta_time.classList.add("post-meta__time");
    postmeta_data.appendChild(postmeta_time);

    const likes = document.createElement("div");
    likes.classList.add("likes");
    likes.classList.add("js-likes")
    post_footer.appendChild(likes);

    const likes_cta = document.createElement("div");
    likes_cta.classList.add("likes__cta");
    likes.appendChild(likes_cta);

    const like_button = document.createElement("a");
    like_button.classList.add("like-button");
    like_button.classList.add("js-like-button");
    like_button.href = "#";
    like_button.setAttribute("data-postid", "1");
    likes_cta.appendChild(like_button);

    const i_like = document.createElement("i");
    i_like.classList.add("like-button__icon");
    i_like.classList.add("fas");
    i_like.classList.add("fa-thumbs-up");
    i_like.setAttribute("aria-hidden", "true");
    like_button.appendChild(i_like);

    const span_like = document.createElement("span");
    span_like.classList.add("like-button__label");
    span_like.innerHTML = "Mi Piace";
    like_button.appendChild(span_like);

    const likes_counter = document.createElement("div");
    likes_counter.classList.add("likes__counter");
    likes.appendChild(likes_counter);
    likes_counter.innerHTML = `Piace a <b id="like-counter-1" class="js-likes-counter">${e.likes}</b> persone`;
})






