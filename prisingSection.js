
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

// рейтинг

// document.addEventListener("DOMContentLoaded", function () {
//     const stars = document.querySelectorAll(".star");
//     const ratingValue = document.getElementById("rating-value");

//     stars.forEach(star => {
//         star.addEventListener("click", function () {
//             let rating = this.getAttribute("data-value");
//             ratingValue.textContent = `Ваш рейтинг: ${rating}`;

//             stars.forEach(s => s.classList.remove("active"));
//             for (let i = 0; i < rating; i++) {
//                 stars[i].classList.add("active");
//             }
//         });

//         star.addEventListener("mouseover", function () {
//             let hoverRating = this.getAttribute("data-value");
//             stars.forEach(s => s.classList.remove("active"));
//             for (let i = 0; i < hoverRating; i++) {
//                 stars[i].classList.add("active");
//             }
//         });

//         star.addEventListener("mouseout", function () {
//             let selectedRating = document.querySelector(".star.active")?.getAttribute("data-value") || 0;
//             stars.forEach(s => s.classList.remove("active"));
//             for (let i = 0; i < selectedRating; i++) {
//                 stars[i].classList.add("active");
//             }
//         });
//     });
// });


 document.addEventListener("DOMContentLoaded", function() {
            document.querySelectorAll(".review-card_2").forEach(card => {
                const rating = parseFloat(card.getAttribute("data-rating"));
                const starsContainer = card.querySelector(".stars5"); 

                for (let i = 0; i < 5; i++) {
                    const star = document.createElement("div");
                    star.classList.add("star");


                     if (i < rating) {
                        star.classList.add("filled");
                    } else if (i < rating) {
                        star.classList.add("half");
                    }


                    starsContainer.appendChild(star);
                };
                  
                // for (let i = 0; i < 5; i++) {
    
                    
                //     let fillColor = "#ddd"; // Серый цвет по умолчанию
                //     if (i < rating) {
                //         fillColor = `url(#grad-${i})`; // Градиентная заливка
                //     };
                    // star.innerHTML = `
                    //     <defs>
                    //         <linearGradient id="grad-${i}" x1="0%" y1="0%" x2="100%" y2="0%">
                    //             <stop offset="0%" stop-color="#FF6600"/>
                    //             <stop offset="20%" stop-color="#F26659"/>
                    //             <stop offset="40%" stop-color="#F06177"/>
                    //             <stop offset="60%" stop-color="#E65D97"/>
                    //             <stop offset="80%" stop-color="#CA46D2"/>
                    //             <stop offset="100%" stop-color="#8D13F9"/>
                    //         </linearGradient>
                    //          <linearGradient id="grad-half" x1="0%" y1="0%" x2="100%" y2="0%">
                    //             <stop offset="50%" stop-color="#FF6600"/>
                    //             <stop offset="50%" stop-color="#ddd"/>
                    //         </linearGradient>
                    //     </defs>
                    //     <path d="M22.6936 0L35.4931 23.2177L62 22.6936L38.7823 35.4931L39.3064 62L26.5069 38.7823L0 39.3064L23.2177 26.5069L22.6936 0Z" fill="url(#grad-${i}"/>
                    // `;
                    // starsContainer.appendChild(star);
                });
        });

            function showStep(index) {
                const steps = document.querySelectorAll('.step');
                const buttons = document.querySelectorAll('.pagination button');
                
                steps.forEach(step => step.classList.remove('active'));
                buttons.forEach(button => button.classList.remove('active'));
                
                steps[index].classList.add('active');
                buttons[index].classList.add('active');
            }

function playVideo() {
            alert("Здесь будет воспроизводиться видео!");
        }

// function toggleAnswer(element) {
//             let answer = element.nextElementSibling;
//             let symbol = element.querySelector(".faq-symbol");
//             if (answer.style.display === "none" || answer.style.display === "") {
//                 answer.style.display = "block";
//                 symbol.textContent = "−";
//             } else {
//                 answer.style.display = "none";
//                 symbol.textContent = "+";
//             }
//         }

        
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        item.nextElementSibling.classList.toggle('active');

        let icon = item.querySelector('.faq-icon path');
        if (icon) {
            if (icon.getAttribute('data-state') === 'minus') {
                icon.setAttribute('d', 'M24.785 2V48M2 25H48'); // Линии "+" (плюс)
                icon.setAttribute('data-state', 'plus');
            } else {
                 icon.setAttribute('d', 'M24.785  25H48'); // Линия "-" (минус)
                icon.setAttribute('data-state', 'minus');
               
            }
        }
    });
});

   document.addEventListener("DOMContentLoaded", function () {
            const btn = document.getElementById("toggle-btn");
            const text = document.getElementById("more-text");
       const textP = document.getElementById('litlle-text');
       console.log(textP.textContent);

            btn.addEventListener("click", function () {
                if (text.style.display === "none" || text.style.display === "") {
                    text.style.display = "block";
                    textP.style.display = "none";
                    btn.textContent = "Скрыть";
                } else {
                    text.style.display = "none";
                    textP.style.display = "block";
                    btn.textContent = "Читать больше";
                }
            });
        });