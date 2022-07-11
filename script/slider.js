const sliderImg = document.querySelectorAll(".slider-img");
const sliderContentWrapper = document.querySelector(".slider-content-wrapper");
const sliderContent = document.querySelectorAll(".slider-content");
const sliderContentDisplay = document.querySelector(".slider-content.display");

const prevBtn = document.querySelector(".slider-direction--previous");
const nextBtn = document.querySelector(".slider-direction--next");

let index = 0;

const handleDirection = (direction) => {
    if (direction === 1) {
        sliderImg[index].classList.toggle("active");
        index++;
        if (index >= sliderImg.length) {
            index = 0;
        }
        for (let i = 0; i < sliderContent.length; i++) {
            sliderContent[i].classList.toggle("display");
        }
        sliderImg[index].classList.toggle("active");
    } else if (direction === -1) {
        sliderImg[index].classList.toggle("active");
        index--;
        if (index < 0) {
            index = sliderImg.length - 1;
        }
        for (let i = 0; i < sliderContent.length; i++) {
            sliderContent[i].classList.toggle("display");
        }
        sliderImg[index].classList.toggle("active");
    }
};

const slider = () => {
    nextBtn.addEventListener("click", () => {
        handleDirection(1);
    });
    prevBtn.addEventListener("click", () => {
        handleDirection(-1);
    });
};

export default slider;
