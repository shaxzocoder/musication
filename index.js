let background = document.body;
let btn = document.getElementById("button");
let isRed = false;

background.style.background = "black";

btn.addEventListener("click", () => {
    if (isRed) {
        background.style.background = "black";
    } else {
        background.style.background = "red";
    }
    isRed = !isRed; // Toggle the state
});



