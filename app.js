var textWrapper = document.querySelector(".intro-title");
textWrapper.innerHTML = textWrapper.textContent.replace(
    /([^\x00-\x80]|\w)/g,
    "<span class='letter'>$&</span>"
);

anime
    .timeline({ loop: false })
    .add({
        targets: ".intro-title .letter",
        translateX: [140, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1400,
        delay: function(el, i) {
            return 500 + 50 * i;
        }
    })
    .add({
        targets: ".intro-title .letter",
        translateX: [0, -140],
        opacity: [1, 0],
        easing: "easeInExpo",
        duration: 1200,
        delay: function(el, i) {
            return 700 + 50 * i;
        }
    });

TweenMax.to(".loader", 2.2, {
    delay: 5,
    top: "-100%",
    ease: Expo.easeInOut
});

TweenMax.from(".nav", 1, {
    delay: 7,
    opacity: 0,
    y: -360,
    ease: Expo.easeInOut
})

TweenMax.from(".titlle", 1, {
    delay: 8,
    opacity: 0,
    x: -60,
    ease: Expo.ease
})

TweenMax.from(".container-scroll", 1, {
    delay: 6.5,
    opacity: 0,
    y: 160,
    ease: Expo.easeInOut
})

TweenMax.from(".scroll", 2, {
    delay: 8.5,
    opacity: 0,
    x: 560,
    ease: Expo.easeInOut
})

