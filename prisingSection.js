
 function openWhatsApp() {
            window.location.href = 'https://wa.me/74951183282';
        }
        function openTelegram() {
            window.location.href = 'https://t.me/yourtelegram';
        }
function buyPlan(plan, price) {
            alert(`Вы выбрали тариф "${plan}" за ${price} ₽`);
};
 function buyService(service, price) {
            alert(`Вы выбрали услугу "${service}" от ${price} ₽`);
};
function showSlide(index) {
            const slides = document.querySelector('.slides');
            slides.style.transform = `translateX(${-index * 100}%)`;
        }
        