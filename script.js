// Get pages
const welcome = document.getElementById("welcome");
const flowers = document.getElementById("flowers");
const letter = document.getElementById("letter");
const gallery = document.getElementById("gallery");
const finalPage = document.getElementById("final");

// Buttons
const startBtn = document.getElementById("startBtn");
const letterBtn = document.getElementById("letterBtn");
const galleryBtn = document.getElementById("galleryBtn");
const endBtn = document.getElementById("endBtn");

// Music
const music = document.getElementById("music");

// Change page
function showPage(page) {
    document.querySelectorAll(".page").forEach(p => {
        p.classList.remove("active");
    });

    page.classList.add("active");
}

// Welcome -> Flowers
startBtn.onclick = () => {
    showPage(flowers);

    music.play().catch(() => {
        console.log("Music blocked until user interaction.");
    });
};

// Flowers -> Letter
letterBtn.onclick = () => {
    showPage(letter);
};

// Letter -> Gallery
galleryBtn.onclick = () => {
    showPage(gallery);
};

// Gallery -> Final
endBtn.onclick = () => {
    showPage(finalPage);
};

// Click photo to enlarge
document.querySelectorAll(".gallery img").forEach(img => {

    img.addEventListener("click", () => {

        if (img.classList.contains("zoom")) {
            img.classList.remove("zoom");
        } else {
            document.querySelectorAll(".gallery img").forEach(i => i.classList.remove("zoom"));
            img.classList.add("zoom");
        }

    });

});
