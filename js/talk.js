new TypeIt("#zbczxy", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("ZBC && ZXY")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("The Story of Us")
    .pause(3000)
    .go();

new TypeIt('#talkToXHJ', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();
