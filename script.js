"use strict"

// FUNCTIONS
const createDiv = () => {
    const grid = document.querySelector(".container");
    const div = document.createElement("div");
    grid.appendChild(div);
}

const addEventListeners = () => {
    const gridItems = document.querySelectorAll(".container div");
    gridItems.forEach(element => element.addEventListener("mouseenter", colorDiv));
}

const colorDiv = (event) => {
    const target = event.target;
    target.classList.add("colored")
}

// MAIN
const gridItemNumber = 16 * 16;
for (let i = 0; i < gridItemNumber; i++) {
    createDiv();
}
addEventListeners();