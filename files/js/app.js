// Header Title (Harry Potter) :
const harryPotterTitle = document.querySelector("header h1");
harryPotterTitle.innerHTML = harryPotterTitle.textContent.replace(/\S/g, `<span class="letter">$&</span>`);

// Introduction :
anime
    .timeline({ loop: false })
    .add(
        {
            targets: "h1 .letter",
            duration: 2000,
            skew: [15, 0],
            translateX: [-40, 0],
            translateY: [-180, 100],
            rotateY: [-90, 0],
            easing: "easeOutElastic(0.7, 1)",
            delay: (el, i) => 100 + 40 * i,
        },
        1000
    )
    .add(
        {
            targets: ".apparition",
            duration: 1250,
            scaleY: [1, 0],
            easing: "easeOutExpo",
        },
        "-=1000"
    )
    .add(
        {
            targets: "h1 .letter",
            duration: 2000,
            translateY: [100, 0],
            easing: "easeOutElastic(0.7, 1)",
            delay: (el, i) => 100 + 40 * i,
        },
        "-= 1000"
    )
    .add(
        {
            targets: "p.desc",
            duration: 2000,
            translateY: [40, 0],
            rotateX: [-45, 0],
            opacity: [0, 1],
            easing: "easeOutExpo",
        },
        "-= 1800"
    )
    .add(
        {
            targets: "header a",
            duration: 1200,
            translateY: [40, 0],
            opacity: [0, 1],
            easing: "easeOutExpo",
        },
        "-= 1800"
    )
    .add(
        {
            targets: ".scroll_visit i",
            duration: 1200,
            scale: [0, 1],
            easing: "easeOutExpo",
        },
        "-= 1600"
    );
