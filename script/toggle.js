const toggleInputPricing = document.getElementById("toggle-input-pricing");
const toggleLabelPricing = document.getElementById("toggle-label-pricing");

const labelPricing = document.getElementById("label-pricing");

const interval = 500;

const updateCount = (isChecked) => {
    let displayValue = +labelPricing.innerText;
    const annualValue = +labelPricing.getAttribute("data-annual");
    const monthlyValue = +labelPricing.getAttribute("data-monthly");

    const duration = interval / Math.abs(monthlyValue - annualValue);

    const counter = setInterval(() => {
        if (!!isChecked) {
            displayValue += 1;
        } else {
            displayValue -= 1;
        }
        labelPricing.innerText = displayValue;
        if (displayValue === monthlyValue || displayValue === annualValue) {
            clearInterval(counter);
        }
    }, duration);
};

const toggle = () => {
    toggleInputPricing.addEventListener("change", (e) => {
        updateCount(e.target.checked);
    });
};

export default toggle;
