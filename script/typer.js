const typerItem = document.querySelector(".typer-item");

const words = ["developers.", "founders.", "designers."];
let index = 0;
const duration = 4000;

const typer = () => {
    typerItem.innerText = words[0];
    setInterval(() => {
        index++;
        if (index === 3) {
            index = 0;
        }
        typerItem.innerText = words[index];
    }, duration);
};

export default typer;
