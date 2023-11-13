$(document).ready(function() {
    $('.phone-card').click(function() {
        // Lấy số điện thoại từ thuộc tính data-phone-number
        var phoneNumber = $(this).data('phone-number');

        // Kiểm tra nếu đang chạy trên điện thoại di động
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            // Mở ứng dụng gọi điện thoại với số điện thoại đã cho
            window.location.href = 'tel:' + phoneNumber;
        } else {
            // Hiển thị thông báo trên máy tính nếu không phải điện thoại di động
            alert('Bạn cần một thiết bị di động để thực hiện cuộc gọi.');
        }
    });

    $('#card-email').click(function() {
        window.location.href = 'mailto:tamtn@anphatel.com.vn';
    })
    $('#card-location').click(function() {
        window.location.href = 'https://www.google.com/maps/dir//KDC+13A+H%E1%BB%93ng+Quang+13A+%C4%90.+Nguy%E1%BB%85n+V%C4%83n+Linh+Phong+Ph%C3%BA+B%C3%ACnh+Ch%C3%A1nh,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh/@10.7095839,106.6393783,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x31752fe75f955d21:0x1e611427f2963b0c!2m2!1d106.6393783!2d10.7095839?entry=ttu';
    })
    $('#customer-contact-card').click(function() {
        window.location.href = 'mailto:tamtn@anphatel.com.vn?subject=Kh%C3%A1ch%20h%C3%A0ng%20li%C3%AAn%20h%E1%BB%87%20h%E1%BB%A3p%20t%C3%A1c';
    })
    $('#hiring-contact-card').click(function() {
    window.location.href = 'mailto:tamtn@anphatel.com.vn?subject=Li%C3%AAn%20h%E1%BB%87%20tuy%E1%BB%83n%20d%E1%BB%A5ng';
    })
});
