let box = document.querySelectorAll(".box");

box.forEach((row) => {
    row.addEventListener("click", () => {
        const x = document.querySelector(".active");
        row.classList.toggle("active");
        x && x.classList.remove("active");
    })
})

let box1 = document.querySelectorAll(".box1");

box1.forEach((row) => {
    row.addEventListener("click", () => {
        const x = document.querySelector(".active1");
        row.classList.toggle("active1");
        x && x.classList.remove("active1");
    })
})

let box3 = document.querySelectorAll(".box3");

box3.forEach((row) => {
    row.addEventListener("click", () => {
        const x = document.querySelector(".active3");
        row.classList.toggle("active3");
        x && x.classList.remove("active3");
    })
})