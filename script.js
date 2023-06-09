const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morales',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const carouselElement = document.querySelector("div.carousel");

let activeIndex = 4;

images.forEach((element, index) => {
    carouselElement.innerHTML += `<div class='carouselItem'><img src="${images[index].image}" alt=""></div> <h1>${images[index].title}</h1> <h2>${images[index].text}</h2>`;
});

document.querySelectorAll("div.carouselItem")[activeIndex].classList.add("active");

document.querySelectorAll("h1")[activeIndex].classList.add("active");

document.querySelectorAll("h2")[activeIndex].classList.add("active");

const prevButtonInput = document.getElementById("prevButton");

prevButtonInput.addEventListener("click", function(){
    if(activeIndex == 0){
        activeIndex = images.length - 1;
    } else {
        activeIndex = activeIndex - 1;
    }
    document.querySelector("div.carouselItem.active").classList.remove("active");
    document.querySelectorAll("div.carouselItem")[activeIndex].classList.add("active");

    document.querySelector("h1.active").classList.remove("active");
    document.querySelectorAll("h1")[activeIndex].classList.add("active");

    document.querySelector("h2.active").classList.remove("active");
    document.querySelectorAll("h2")[activeIndex].classList.add("active");
})

const nextButtonInput = document.getElementById("nextButton");

nextButtonInput.addEventListener("click", function(){
    if(activeIndex == images.length - 1){
        activeIndex = 0;
    } else {
        activeIndex = activeIndex + 1;
    }
    document.querySelector("div.carouselItem.active").classList.remove("active");
    document.querySelectorAll("div.carouselItem")[activeIndex].classList.add("active");

    document.querySelector("h1.active").classList.remove("active");
    document.querySelectorAll("h1")[activeIndex].classList.add("active");

    document.querySelector("h2.active").classList.remove("active");
    document.querySelectorAll("h2")[activeIndex].classList.add("active");
})