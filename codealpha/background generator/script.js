document.addEventListener("DOMContentLoaded", function() {
    const colorBox = document.getElementById("colorBox");
    const generateButton = document.getElementById("generateButton");
    const colorCodeInput = document.getElementById("colorCode");
    const copyButton = document.getElementById("copyButton");

    generateButton.addEventListener("click", generateRandomColor);
    colorBox.addEventListener("click", generateRandomColor);
    copyButton.addEventListener("click", copyColorCode);

    function generateRandomColor() {
        const randomColor = getRandomHexColor();
        colorBox.style.backgroundColor = randomColor;
        colorCodeInput.value = randomColor;
    }

    function getRandomHexColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function copyColorCode() {
        colorCodeInput.select();
        colorCodeInput.setSelectionRange(0, 99999); // For mobile devices

        document.execCommand("copy");
        alert("Color code copied to clipboard: " + colorCodeInput.value);
    }
});
