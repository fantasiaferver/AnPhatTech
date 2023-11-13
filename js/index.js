// Scroll Animation
ScrollReveal({ distance: '60px' });
ScrollReveal().reveal(".to-easeout-item", { easing: "ease-out", interval: 50, delay: 100 })
ScrollReveal().reveal(".to-scale", { reset: false, delay: 300, easing: "ease-out", interval: 200, scale: 1.1 })
ScrollReveal().reveal('.to-left-item', { origin: 'left', reset: false, delay: 300, easing: "ease-out", interval: 100 });
ScrollReveal().reveal('.to-right-item', { origin: 'right', reset: false, delay: 300, easing: "ease-out", interval: 100 });
ScrollReveal().reveal('.to-top-item', { origin: 'top', reset: false, delay: 300, easing: "ease-out", interval: 100 });


window.onscroll = function () {
    const mainNav = document.getElementById('roto');
    // const upbtn = document.getElementById("upBtn");
    if (mainNav) {
        if (window.pageYOffset > 1) {
            mainNav.classList.add("active");
            // upbtn.classList.add("active");
        } else {
            mainNav.classList.remove("active");
            // upbtn.classList.remove("active");
        }
    }
}

// Button Scroll to top
const backToTopButton = document.getElementById("back-to-top");
backToTopButton.style.display = "none";
window.addEventListener("scroll", function () {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 500) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});
backToTopButton.addEventListener("click", function () {
    window.scrollTo(0, 0);
});


