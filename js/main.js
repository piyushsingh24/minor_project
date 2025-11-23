let startBtn = document.getElementById("startButton");
let startMenu = document.getElementsByClassName("startmenu")[0];
// let chromeIcon = document.getElementById("chromeIcon");

// Only start button toggles start menu
startBtn.addEventListener("click", () => {
    if (startMenu.style.bottom === "60px") {
        startMenu.style.bottom = "-600px";
    } else {
        startMenu.style.bottom = "60px";
    }
});

document.getElementById("#chromeIcon").addEventListener("click", () => {
    window.location.href = "project.html";
});

$('.feedback-slider').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000, 
    autoplayHoverPause: true,
    responsive:{
        0:{ items:1 },
        600:{ items:1 },
        1000:{ items:2 }
    }
});

