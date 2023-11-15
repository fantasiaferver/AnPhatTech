var data = [
    {
        "ten_hop_dong": "DỰ ÁN ĐẦU TƯ XÂY DỰNG HẠ TẦNG CỐ ĐỊNH BĂNG RỘNG  TẠI TỈNH ĐỒNG THÁP",
        "gia_tri": 1000,
        // "mo_ta": " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt laboriosam labore velit id enim, temporibus quidem fugit eum recusandae sit consequatur consequuntur voluptatum quis tempora modi, voluptatem similique obcaecati placeat.",
        "link_hinh_anh": ["../image/project-card-image/dong-thap1.jpg","../image/project-card-image/dong-thap2.jpg"],
    },
    {
        "ten_hop_dong": "DỰ ÁN ĐẦU TƯ XÂY DỰNG HẠ TẦNG CỐ ĐỊNH BĂNG RỘNG  TẠI TỈNH VĨNH LONG",
        "gia_tri": 2000,
        // "mo_ta": "Mo ta hop dong 2",
        "link_hinh_anh": ["../image/project-card-image/vinh-long1.jpg", "../image/project-card-image/vinh-long2.jpg"]
    },
    {
        "ten_hop_dong": "DỰ ÁN ĐẦU TƯ XÂY DỰNG HẠ TẦNG CỐ ĐỊNH BĂNG RỘNG  TẠI TỈNH TIỀN GIANG",
        "gia_tri": 3000,
        // "mo_ta": "Mo ta hop dong 3",
        "link_hinh_anh": ["https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png",]
    },
    {
        "ten_hop_dong": "DỰ ÁN ĐẦU TƯ XÂY DỰNG HẠ TẦNG CỐ ĐỊNH BĂNG RỘNG  TẠI TỈNH ĐỒNG NAI",
        "gia_tri": 4000,
        // "mo_ta": "Mo ta hop dong 4",
        "link_hinh_anh": ["https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"]
    },
    {
        "ten_hop_dong": "DỰ ÁN ĐẦU TƯ XÂY DỰNG HẠ TẦNG CỐ ĐỊNH BĂNG RỘNG  TẠI TỈNH TÂY NINH",
        "gia_tri": 5000,
        // "mo_ta": "Mo ta hop dong 5",
        "link_hinh_anh": ["https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"]
    },
    {
        "ten_hop_dong": "THI CÔNG CẢNG CÁT LÁI",
        "gia_tri": 6000,
        // "mo_ta": "Mo ta hop dong 6",
        "link_hinh_anh": ["../image/project-card-image/cat-lai1.jpg","../image/project-card-image/cat-lai2.jpg","../image/project-card-image/cat-lai3.jpg"]
    },
    {
        "ten_hop_dong": "KÝ KẾT GHI NHỚ PHỐI HỢP HỆ THỐNG VIỄN THÔNG & CNTT CHO CÁC KHU PHI THUẾ QUAN TỈNH BÀ RỊA VŨNG TÀU",
        "gia_tri": 7000,
        // "mo_ta": "Mo ta hop dong 7",
        "link_hinh_anh": ["https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"]
    },
    {
        "ten_hop_dong": "DỰ ÁN XÂY DỰNG HẠ TẦNG CỐ ĐỊNH BĂNG RỘNG CHO CÁC TÒA NHÀ , KCN TẠI HCM",
        "gia_tri": 8000,
        // "mo_ta": "Mo ta hop dong 8",
        "link_hinh_anh": ["../image/project-card-image/toa-nha-1.jpg","../image/project-card-image/toa-nha-2.jpg","../image/project-card-image/toa-nha-3.jpg"]
    }
];

$.each(data, function(index, value) {
    var card = $("<div>").addClass("card-project").css("width", "30em");
    var img = $("<img>").addClass("card-img-top").attr("src", value.link_hinh_anh[0]).attr("alt", "...");
    var card_body = $("<div>").addClass("card-body");
    var title = $("<h5>").addClass("card-title").text(value.ten_hop_dong);
    var text = $("<p>").addClass("card-text").text(value.gia_tri + " USD");
    var button = $("<a>").addClass("btn btn-primary btn-detail")
                        .attr("href", "#")
                        .attr("data-bs-toggle", "modal")
                        .attr("data-bs-target", "#exampleModal")
                        .data("hopdong", value)
                        .text("Chi tiết");

    card_body.append(title).append(text).append(button);
    card.append(img).append(card_body);
    $("#contain-list-card-project").append(card);
});

$(".btn-detail").on("click", function() {
    var hopdong = $(this).data("hopdong");

    // Hiển thị dữ liệu trong modal
    var modalContent = $("#modalContent");
    modalContent.html("<p><strong>Tên hợp đồng:</strong> " + hopdong.ten_hop_dong + "</p>" +
                      "<p><strong>Giá trị:</strong> " + hopdong.gia_tri + " USD</p>"
                    //   " + <p><strong>Mô tả:</strong> " + hopdong.mo_ta + "</p>"
                    );

    // Thêm Carousel vào modal
    var carousel = $("<div>").addClass("carousel slide").attr("id", "imageCarousel");
    var carouselInner = $("<div>").addClass("carousel-inner");

    $.each(hopdong.link_hinh_anh, function(i, imgSrc) {
        var carouselItem = $("<div>").addClass("carousel-item");
        var img = $("<img>").addClass("d-block w-100").attr("src", imgSrc).attr("alt", "...");
        carouselItem.append(img);
        if (i === 0) {
            carouselItem.addClass("active");
        }
        carouselInner.append(carouselItem);
    });

    var prevButton = $("<button>").addClass("carousel-control-prev").attr("type", "button").attr("data-bs-target", "#imageCarousel").attr("data-bs-slide", "prev");
    var prevIcon = $("<span>").addClass("carousel-control-prev-icon").attr("aria-hidden", "true");
    var prevText = $("<span>").addClass("visually-hidden").text("Previous");
    prevButton.append(prevIcon).append(prevText);

    var nextButton = $("<button>").addClass("carousel-control-next").attr("type", "button").attr("data-bs-target", "#imageCarousel").attr("data-bs-slide", "next");
    var nextIcon = $("<span>").addClass("carousel-control-next-icon").attr("aria-hidden", "true");
    var nextText = $("<span>").addClass("visually-hidden").text("Next");
    nextButton.append(nextIcon).append(nextText);

    carousel.append(carouselInner).append(prevButton).append(nextButton);
    modalContent.append(carousel);

    $("#imageCarousel").carousel();
});


