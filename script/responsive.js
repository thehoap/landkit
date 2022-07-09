const nav = document.querySelector(".nav");
const menuBtn = document.querySelector(".icon-menu");
const closeBtn = document.querySelector(".icon-close");

const navmainItemMulti = document.querySelector(".nav-main__item--multi");
const navsubMultiItems = document.querySelectorAll(
    ".nav-main__item--multi .nav-sub__item"
);

const headerBtn = document.querySelector(".header__btn");

const responsive = () => {
    menuBtn.addEventListener("click", () => {
        nav.classList.add("expand");
        headerBtn.classList.add("expand");
        document.body.style.overflow = "hidden";
    });
    closeBtn.addEventListener("click", () => {
        nav.classList.remove("expand");
        headerBtn.classList.remove("expand");
        document.body.style.overflow = "initial";
    });

    for (let navsubMultiItem of navsubMultiItems) {
        const navsubMultiItemIcon =
            navsubMultiItem.querySelector(".icon-chevron");

        const handleChevronIcon = () => {
            if (window.innerWidth < 992) {
                navsubMultiItemIcon.setAttribute("name", "chevron-down");
            } else {
                navsubMultiItemIcon.setAttribute("name", "chevron-forward");
            }
        };
        window.addEventListener("resize", () => {
            handleChevronIcon();
            if (window.innerWidth > 992) {
                nav.classList.remove("expand");
                document.body.style.overflow = "initial";
            }
        });
        window.addEventListener("load", handleChevronIcon);

        const navsubMultiItemUl = navsubMultiItem.querySelector("ul");
        navsubMultiItem.addEventListener("click", () => {
            const UlClassList = navsubMultiItemUl.classList;

            //Expand/Hide sub sub-menu
            UlClassList.toggle("expand");

            //Toggle Icon
            if (UlClassList.value.includes("expand")) {
                navsubMultiItemIcon.setAttribute("name", "chevron-up");
            } else {
                navsubMultiItemIcon.setAttribute("name", "chevron-down");
            }
        });
    }
};

export default responsive;
