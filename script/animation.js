const fly = document.querySelectorAll(".fly-up, .fly-left, .fly-right");
const windowHeight = window.innerHeight;
const flyPoint = 100;

const sectionNumberic = document.querySelector(".section--numberic");
const counters = document.querySelectorAll(".counter");
const interval = 500;

const counter = () => {
    for (let i = 0; i < counters.length; i++) {
        let displayCounter = +counters[i].innerText;
        const dataTarget = +counters[i].getAttribute("data-target");
        if (displayCounter === dataTarget) {
            return
        }

        const duration = interval / dataTarget;

        const counter = setInterval(() => {
            displayCounter += 1;
            counters[i].innerText = displayCounter;
            if (displayCounter === dataTarget) {
                clearInterval(counter);
            }
        }, duration);
    }
};

const activeFly = () => {
    for (let i = 0; i < fly.length; i++) {
        const flyTop = fly[i].getBoundingClientRect().top;
        if (flyTop < windowHeight - flyPoint) {
            fly[i].classList.add("active");
        }
    }
};
const handleFly = () => {
    activeFly();
};

const animation = () => {
    activeFly();
    window.addEventListener("scroll", handleFly);

    counter();
};

export default animation;
