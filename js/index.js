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

let cardEmail = document.querySelector('#card-email')
cardEmail.addEventListener('click', function(){
    window.location.href = 'mailto:tamtn@anphatel.com.vn';
})

let cardLocation = document.querySelector('#card-location')
cardLocation.addEventListener('click', function(){
    window.location.href = 'https://www.google.com/maps/dir//KDC+13A+H%E1%BB%93ng+Quang+13A+%C4%90.+Nguy%E1%BB%85n+V%C4%83n+Linh+Phong+Ph%C3%BA+B%C3%ACnh+Ch%C3%A1nh,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh/@10.7095839,106.6393783,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x31752fe75f955d21:0x1e611427f2963b0c!2m2!1d106.6393783!2d10.7095839?entry=ttu';
})

let customerCard = document.querySelector('#customer-contact-card')
customerCard.addEventListener('click', function(){
    window.location.href = 'mailto:tamtn@anphatel.com.vn?subject=Kh%C3%A1ch%20h%C3%A0ng%20li%C3%AAn%20h%E1%BB%87%20h%E1%BB%A3p%20t%C3%A1c';
})

let hiringCard = document.querySelector('#hiring-contact-card')
hiringCard.addEventListener('click', function(){
    window.location.href = 'mailto:tamtn@anphatel.com.vn?subject=Li%C3%AAn%20h%E1%BB%87%20tuy%E1%BB%83n%20d%E1%BB%A5ng';
})
