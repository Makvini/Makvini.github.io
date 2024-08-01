document.addEventListener('DOMContentLoaded', function() {
    function updateImage() {
        const imgs1 = document.querySelectorAll(".slidshowImg1");
        const imgs2 = document.querySelectorAll(".slidshowImg2");
        const imgs3 = document.querySelectorAll(".slidshowImg3");

        let width = window.innerWidth;

        if (width <= 768) {
            imgs1.forEach((element, index) => {
                element.src = `../static/slider_photo/mobile/1/step${index + 1}.png`; 
            });
            imgs2.forEach((element, index) => {
                element.src = `../static/slider_photo/mobile/2/step${index + 1}.png`; 
            });
            imgs3.forEach((element, index) => {
                element.src = `../static/slider_photo/mobile/3/step${index + 1}.png`; 
            });
        } else {
            imgs1.forEach((element, index) => {
                element.src = `../static/slider_photo/desctop/1/step${index + 1}.png`; 
            });
            imgs2.forEach((element, index) => {
                element.src = `../static/slider_photo/desctop/2/step${index + 1}.png`; 
            });
            imgs3.forEach((element, index) => {
                element.src = `../static/slider_photo/desctop/3/step${index + 1}.png`; 
            });
        }
    }


    updateImage();
    window.addEventListener('resize', updateImage);
});
