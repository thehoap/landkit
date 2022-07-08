const fly = document.querySelectorAll(".fly-up, .fly-left, .fly-right");
const windowHeight = window.innerHeight;
const flyPoint = 150;

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
};

export default animation;
