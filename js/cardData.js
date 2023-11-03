// Field of company using for cards
const cards = [
    {
        image: './image/cards-image/cap-thong-tin.png',
        text: 'Mua bán cáp thông tin, vật tư phụ kiện đi kèm',
        description: `Cáp thông tin là một loại cáp dùng để truyền tải các tín hiệu điện tử, như âm thanh, hình ảnh, dữ liệu, v.v. Cáp thông tin có thể được chia thành nhiều loại khác nhau, tùy thuộc vào đặc tính kỹ thuật, chất liệu và ứng dụng của chúng. Ví dụ, có cáp đồng trục, cáp quang, cáp xoắn đôi, v.v.
        Vật tư phụ kiện đi kèm là những thiết bị hoặc linh kiện được sử dụng để lắp đặt, bảo trì hoặc nâng cao hiệu suất của cáp thông tin. Vật tư phụ kiện đi kèm có thể bao gồm các đầu nối, ổ cắm, khớp nối, băng keo, ống co nhiệt, v.v. Vật tư phụ kiện đi kèm cần phải phù hợp với loại cáp thông tin và tiêu chuẩn kỹ thuật của hệ thống truyền thông.`
    },
    {
        image: './image/cards-image/may-han-quang.png',
        text: 'Máy hàn, máy đo và các dụng cụ thi công khác thuộc lĩnh vực viễn thông',
        description: `Một trong những yếu tố quan trọng để đảm bảo chất lượng công trình viễn thông là sử dụng đúng loại máy hàn, máy đo và các dụng cụ thi công khác. Máy hàn là thiết bị dùng để nối các sợi quang với nhau, máy đo là thiết bị dùng để kiểm tra độ suy hao của cáp quang, còn các dụng cụ thi công khác bao gồm dao cắt sợi quang, kìm bấm đầu nối, ống co nhiệt, máy thổi khí và các phụ kiện đi kèm.
        Các thiết bị này phải được chọn lựa kỹ lưỡng, phù hợp với tiêu chuẩn kỹ thuật và yêu cầu của khách hàng.`
    },
    {
        image: './image/cards-image/card1.jpg',
        text: 'Kéo cáp quang (treo, ngầm), trồng trụ',
        description: `Là một trong những dịch vụ quan trọng trong lĩnh vực viễn thông. Có hai hình thức thi công kéo cáp quang phổ biến là treo và ngầm. Thi công kéo cáp quang treo là hình thức kéo cáp quang trên các cột điện, cột viễn thông hoặc các cấu kiện khác. Thi công kéo cáp quang ngầm là hình thức kéo cáp quang dưới đất, qua các ống bảo vệ hoặc các kỹ thuật khác. Trồng trụ là một công đoạn quan trọng trong thi công kéo cáp quang ngầm, đòi hỏi sự chuyên nghiệp và kỹ thuật cao. Trồng trụ là việc đặt các cột bê tông hoặc thép vào đất để tạo điểm neo cho cáp quang.`
    },
    {
        image: './image/cards-image/card2.jpg',
        text: 'Hàn nối, đo kiểm các node quang',
        description: `Là công việc đòi hỏi kỹ năng chuyên môn cao, cẩn thận và chính xác. Đội ngũ thi công của chúng tôi biết cách sử dụng các thiết bị hàn nối quang, đo kiểm quang và xử lý các sự cố có thể xảy ra. Công việc này cũng yêu cầu người thi công phải có kiến thức về các tiêu chuẩn kỹ thuật, quy trình thi công và an toàn lao động`
    },
    {
        image: './image/cards-image/card3.jpg',
        text: 'Xây mới, cải tạo cống bể cáp quang đặt ống dẫn cáp',
        description: `Công ty chúng tôi là đơn vị chuyên nghiệp trong lĩnh vực xây mới và cải tạo cống bể cáp quang. Chúng tôi có kinh nghiệm và trang thiết bị hiện đại để đáp ứng nhu cầu đặt ống dẫn cáp quang trên các tuyến đường, tòa nhà, khu dân cư, khu công nghiệp, v.v... Chúng tôi cam kết mang lại dịch vụ chất lượng cao, an toàn và tiết kiệm cho khách hàng.`
    },
    {
        image: './image/cards-image/card4.jpg',
        text: 'Xây dựng móng, nhà trạm BTS',
        description: `Xây dựng móng, nhà trạm BTS là một công việc quan trọng đòi hỏi sự chuyên nghiệp và kỹ thuật cao. Móng và nhà trạm BTS phải đảm bảo độ bền, ổn định và an toàn cho các thiết bị và nhân viên vận hành. Quá trình xây dựng móng, nhà trạm BTS của chúng tôi đảm bảo các bước sau: Khảo sát địa hình, địa chất và yêu cầu kỹ thuật của dự án; Thiết kế bản vẽ thi công, tính toán kết cấu và lập dự toán chi phí; Chuẩn bị vật tư, thiết bị và nhân công cần thiết; Thi công móng, nhà trạm BTS theo bản vẽ thiết kế đã được phê duyệt; Kiểm tra, nghiệm thu và bàn giao công trình.
        `
    },
    {
        image: './image/cards-image/card5.jpg',
        text: 'Lắp đặt nhà container, nhà lắp ghép CO3',
        description: `Nhà container lắp ghép có thể được thiết kế nội thất theo nhiều phong cách khác nhau, tùy thuộc vào nhu cầu của khách hàng. Đội lắp đặt nhà container, nhà lắp ghép CO3 của chúng tôi có đầy đủ các tiêu chí như: Có chuyên môn và kỹ năng lắp đặt nhà container, nhà lắp ghép CO3; Có đầy đủ các trang thiết bị cần thiết; Có khả năng làm việc an toàn. Đảm bảo chất lượng công trình, tiệm thời gian, an toan cho khách hàng sử dụng.`
    },
    {
        image: './image/cards-image/card6.jpg',
        text: 'Lắp đặt cột dây CO cột tự đứng',
        description: `Lắp đặt cột dây CO, cột tự đứng là một công việc đòi hỏi kỹ thuật và kinh nghiệm. Công việc này bao gồm các bước chuẩn bị, thi công phần móng, lắp đặt cột, thi công phần dây cáp và thi công phần phụ kiện. Đội ngũ làm việc lắp đặt cột dây CO, cột tự đứng của chúng tôi có chuyên môn, kinh nghiệm, sức khỏe, tinh thần trách nhiệm, khả năng làm việc nhóm và tuân thủ các quy định về an toàn lao động`
    },
    {
        image: './image/cards-image/card7.jpg',
        text: 'Thi công tiếp địa',
        description: `Thi công tiếp địa là một công việc quan trọng trong các công trình xây dựng, có tác dụng bảo vệ người và thiết bị khỏi các nguy cơ do sét gây ra. Là công việc quan trọng, đòi hỏi kỹ thuật và kinh nghiệm. Đội ngũ làm việc cần có các phẩm chất và kỹ năng cần thiết để đảm bảo an toàn cho người và thiết bị`
    },
    {
        image: './image/cards-image/card8.jpg',
        text: 'Lắp đặt BTS 2G, 3G, 4G, cosite, Minishell,…',
        description: `Lắp đặt camera là công việc đòi hỏi kỹ thuật và kinh nghiệm. Đội ngũ làm việc cần có các phẩm chất và kỹ năng cần thiết để đảm bảo chất lượng hình ảnh và khả năng ghi hình của camera`
    },
    {
        image: './image/cards-image/card9.jpg',
        text: 'Lắp đặt Camera',
        description: `Lắp đặt camera là công việc đòi hỏi kỹ thuật và kinh nghiệm. Đội ngũ làm việc cần có các phẩm chất và kỹ năng cần thiết để đảm bảo chất lượng hình ảnh và khả năng ghi hình của camera`
    },
];

const cardsList = document.querySelector('.list-cards');
for (const card of cards) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card', 'p-0', 'my-3');
    cardElement.style.width = '18rem';
    cardElement.style.background = "rgba(255, 255, 255, 0.08)";
    cardElement.style.borderRadius = "16px";
    cardElement.style.boxShadow = "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px";
    cardElement.style.backdropFilter = "blur(4.5px)";
    cardElement.style.webkitBackdropFilter = "blur(4.5px)";
    cardElement.style.border = "1px solid rgba(255, 255, 255, 0.28)";

    const cardImage = document.createElement('img');
    cardImage.src = card.image;
    cardImage.classList.add('card-img-top');
    cardElement.appendChild(cardImage);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardText = document.createElement('p');
    cardText.classList.add('card-text', 'fw-medium', 'text-center');
    cardText.textContent = card.text;
    cardBody.appendChild(cardText);

    cardElement.appendChild(cardBody);

    cardsList.appendChild(cardElement);

    // Add ScrollReveal to each card
    ScrollReveal().reveal(cardElement, {
        reset: false,
        delay: 300,
        easing: "ease-out",
        interval: 200,
        scale: 1.1
    });

    cardElement.addEventListener("mouseenter", function() {
        // Áp dụng hiệu ứng zoom
        cardElement.style.transform = "scale(1.03)";
        cardElement.style.transition = "transform 0.5s ease";
      });
    
      // Xử lý sự kiện mouseleave
      cardElement.addEventListener("mouseleave", function() {
        // Hủy hiệu ứng zoom
        cardElement.style.transform = "scale(1)";
        cardElement.style.transition = "transform 0.5s ease";
      });
}

