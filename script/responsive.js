const nav = document.querySelector(".nav");
const menuBtn = document.querySelector(".icon-menu");

const responsive = () => {
    const handleExpand = () => {
        nav.style.display = "block";
        body.style.overflow = "hidden";
    }
    menuBtn.addEventListener("click", handleExpand);
};

export default responsive;
