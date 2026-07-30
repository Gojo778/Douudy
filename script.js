// ==========================
// Pages
// ==========================

const lockPage = document.getElementById("lockPage");
const letterPage = document.getElementById("letterPage");
const flowersPage = document.getElementById("flowersPage");
const envelopePage = document.getElementById("envelopePage");
const galleryPage = document.getElementById("galleryPage");
const finalPage = document.getElementById("finalPage");

// ==========================
// Buttons
// ==========================

const unlockBtn = document.getElementById("unlockBtn");
const flowersBtn = document.getElementById("flowersBtn");
const openEnvelope = document.getElementById("openEnvelope");
const galleryBtn = document.getElementById("galleryBtn");
const finalBtn = document.getElementById("finalBtn");

// ==========================
// Secret Code
// ==========================

const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");
const c3 = document.getElementById("c3");

const errorMsg = document.getElementById("errorMsg");

// ==========================
// Change Page
// ==========================

function showPage(page){

document.querySelectorAll(".page").forEach(p=>{

p.classList.remove("active");

});

page.classList.add("active");

window.scrollTo(0,0);

}

// ==========================
// Unlock
// ==========================

unlockBtn.onclick = ()=>{

if(

c1.value==="07"

&&

c2.value==="06"

&&

c3.value==="08"

){

unlockBtn.innerHTML="Unlocked ❤️";

unlockBtn.style.background="#5ed38d";

setTimeout(()=>{

showPage(letterPage);

},900);

}else{

errorMsg.innerHTML="Wrong code ❤️ Try again.";

c1.value="";
c2.value="";
c3.value="";

}

};

// ==========================
// Continue Buttons
// ==========================

flowersBtn.onclick=()=>{

showPage(flowersPage);

};

openEnvelope.onclick=()=>{

showPage(envelopePage);

};

galleryBtn.onclick=()=>{

showPage(galleryPage);

};

finalBtn.onclick=()=>{

showPage(finalPage);

};

// ==========================
// Gallery Animation
// ==========================

document.querySelectorAll(".gallery img")

.forEach(img=>{

img.onclick=()=>{

img.classList.toggle("zoom");

};

});
// ==========================
// Auto Move Between Inputs
// ==========================

[c1, c2, c3].forEach((input, index) => {

    input.addEventListener("input", () => {

        if (input.value.length === 2) {

            const inputs = [c1, c2, c3];

            if (inputs[index + 1]) {
                inputs[index + 1].focus();
            }

        }

    });

});

// ==========================
// Enter Key Unlock
// ==========================

[c1, c2, c3].forEach(input => {

    input.addEventListener("keypress", e => {

        if (e.key === "Enter") {

            unlockBtn.click();

        }

    });

});

// ==========================
// Fade Animation
// ==========================

function fadePage(page){

    page.style.opacity="0";

    setTimeout(()=>{

        page.style.opacity="1";

    },100);

}

// ==========================
// Hearts On Click
// ==========================

document.addEventListener("click",(e)=>{

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";
    heart.style.left=e.clientX+"px";
    heart.style.top=e.clientY+"px";
    heart.style.fontSize="26px";
    heart.style.pointerEvents="none";
    heart.style.animation="heartPop 1.3s forwards";
    heart.style.zIndex="9999";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },1300);

});
