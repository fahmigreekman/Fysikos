document.addEventListener("DOMContentLoaded", () => {
    const splashOverlay = document.getElementById("system-splash");
    const btnUnderstand = document.getElementById("btn-understand");
    const checkbox = document.getElementById("dont-show-again");
    
    if (!localStorage.getItem("fysikos_system_alert_seen")) {
        setTimeout(() => {
            splashOverlay.classList.add("active");
        }, 500);
    }

    btnUnderstand.addEventListener("click", () => {
        if (checkbox.checked) {
            localStorage.setItem("fysikos_system_alert_seen", "true");
        }
        splashOverlay.classList.remove("active");
    });

    const bubbles = document.querySelectorAll(".bubble");

    bubbles.forEach((bubble, i) => {
        bubble.style.opacity = "0";
        bubble.style.transform = "translateY(40px)";
        setTimeout(() => {
            bubble.style.transition = "all 0.6s ease-out";
            bubble.style.opacity = "1";
            bubble.style.transform = "translateY(0)";
        }, 150 * i);
    });
});

const bubbles = document.querySelectorAll(".bubble");

bubbles.forEach(bubble => {
    bubble.addEventListener("mouseenter", () => {
        bubble.style.transform = "scale(1.1)";
        bubble.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
        bubble.style.transition = "all 0.3s ease";
    });

    bubble.addEventListener("mouseleave", () => {
        bubble.style.transform = "scale(1)";
        bubble.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
    });

    bubble.addEventListener("mousedown", () => {
        bubble.style.transform = "scale(0.9)";
        bubble.style.transition = "transform 0.1s ease";
    });

    bubble.addEventListener("mouseup", () => {
        bubble.style.transform = "scale(1.15)";
        bubble.style.transition = "transform 0.15s ease";
        setTimeout(() => {
            bubble.style.transform = "scale(1)";
        }, 150);
    });
});

window.addEventListener("load", () => {
    const title = document.getElementById("judul-topik");
    if (title) {
        title.style.opacity = "0";
        title.style.transform = "translateY(-20px)";
        setTimeout(() => {
            title.style.transition = "all 0.8s ease";
            title.style.opacity = "1";
            title.style.transform = "translateY(0)";
        }, 200);
    }
});