// Barba.js :
// --> Too difficult to integrate with Locomotive Scroll, but this code works without Locomotive Scroll.

function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

barba.hooks.afterEnter(() => {
    scroll.destroy();
});

barba.hooks.after(() => {
    scroll.init();
});

barba.init({
    transitions: [
        {
            name: "grid_side_transition",
            async leave(data) {
                anime
                    .timeline({ loop: false })
                    .add({
                        targets: ".loading_screen_left_inner",
                        duration: 1400,
                        translateX: ["-100%", 0],
                        easing: "cubicBezier(0.5, 0, 0, 1)",
                    })
                    .add(
                        {
                            targets: ".loading_screen_right_inner",
                            duration: 1400,
                            translateX: ["100%", 0],
                            easing: "cubicBezier(0.5, 0, 0, 1)",
                        },
                        0
                    );
                const done = this.async();
                await delay(1500);
                done();
            },
            async enter(data) {
                anime
                    .timeline({ loop: false })
                    .add({
                        targets: ".loading_screen_left_inner",
                        duration: 1400,
                        translateX: [0, "100%"],
                        easing: "cubicBezier(0.5, 0, 0, 1)",
                    })
                    .add(
                        {
                            targets: ".loading_screen_right_inner",
                            duration: 1400,
                            translateX: [0, "-100%"],
                            easing: "cubicBezier(0.5, 0, 0, 1)",
                        },
                        0
                    );
                setTimeout(() => {
                    introductionAnim();
                }, 100);
            },
        },
    ],
});
