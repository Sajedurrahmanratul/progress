// picking items

const circle = document.querySelectorAll(".circle")
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const progress = document.getElementById("progress")

let currentActive = 1;

next.addEventListener("click", function () {
    currentActive++;

    if (currentActive > circle.length) {
        currentActive = circle.length
    }
    active();
});

prev.addEventListener("click", function () {
    currentActive--;

    if (currentActive > circle.length) {
        currentActive = circle.length;
    }
    active();
});



function active() {
    circle.forEach(function (circle, idx) {
        if (idx < currentActive) {
            circle.classList.add("active");
        }

        else {
            circle.classList.remove("active");
        }
    });

    const actives = document.querySelectorAll(".active");

    progress.style.width = (actives.length - 1) / (circle.length - 1) * 100 + "%";

    if (currentActive === 0) {
        prev.disabled = true;
    }

    else if (currentActive == circle) {
        next.disabled = true;
    }

    else {
        prev.disabled = false;
        next.disabled = false;
    }
};

