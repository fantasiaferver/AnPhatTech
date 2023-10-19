ScrollReveal().reveal(".card", { reset: false, delay: 300, easing: "ease-out", interval: 200, scale: 1.1 })
ScrollReveal({ distance: '60px' });
ScrollReveal().reveal(".to-scale", { reset: false, delay: 300, easing: "ease-out", interval: 200, scale: 1.1 })
ScrollReveal().reveal('.to-left-item', { origin: 'left', reset: false, delay: 300, easing: "ease-out", interval: 100 });
ScrollReveal().reveal('.to-right-item', { origin: 'right', reset: false, delay: 300, easing: "ease-out", interval: 100 });
ScrollReveal().reveal('.to-top-item', { origin: 'top', reset: false, delay: 300, easing: "ease-out", interval: 100 });

const backToTopButton = document.getElementById("back-to-top");

// Thêm thuộc tính display: none cho nút
backToTopButton.style.display = "none";

// Tạo sự kiện scroll cho trang web
window.addEventListener("scroll", function () {
    // Kiểm tra vị trí cuộn của trang
    const scrollTop = document.documentElement.scrollTop;

    // Hiển thị nút khi cuộn ra khỏi đầu trang
    if (scrollTop > 500) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

// Tạo sự kiện click cho nút
backToTopButton.addEventListener("click", function () {
    // Di chuyển trang web lên đầu trang
    window.scrollTo(0, 0);
});

