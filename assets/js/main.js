
// слайдерр первого слайда
/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    var slidesText = document.getElementsByClassName("item-text");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < slidesText.length; i++) {
        slidesText[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    slidesText[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

showSlides.defaults = {

    // Default options for the slider
    loop: true,     // Бесконечное зацикливание слайдера
    auto: true,     // Автоматическое пролистывание
    interval: 5000, // Интервал между пролистыванием элементов (мс)
    arrows: true,   // Пролистывание стрелками
    dots: true      // Индикаторные точки
};
//
//
//
//
//
//
//





//main
(function() {
    "use strict";
    /*[pan and well CSS scrolls]*/
    var pnls = document.querySelectorAll('.panel').length,
        scdir, hold = false;

    function _scrollY(obj) {
        var slength, plength, pan, step = 100,
            vh = window.innerHeight / 100,
            vmin = Math.min(window.innerHeight, window.innerWidth) / 100;
        if ((this !== undefined && this.id === 'well') || (obj !== undefined && obj.id === 'well')) {
            pan = this || obj;
            plength = parseInt(pan.offsetHeight / vh);
        }
        if (pan === undefined) {
            return;
        }
        plength = plength || parseInt(pan.offsetHeight / vmin);
        slength = parseInt(pan.style.transform.replace('translateY(', ''));
        if (scdir === 'up' && Math.abs(slength) < (plength - plength / pnls)) {
            slength = slength - step;
        } else if (scdir === 'down' && slength < 0) {
            slength = slength + step;
        } else if (scdir === 'top') {
            slength = 0;
        }
        if (hold === false) {
            hold = true;
            pan.style.transform = 'translateY(' + slength + 'vh)';
            setTimeout(function() {
                hold = false;
            }, 1000);
        }
        console.log(scdir + ':' + slength + ':' + plength + ':' + (plength - plength / pnls));
    }
    /*[swipe detection on touchscreen devices]*/
    function _swipe(obj) {
        var swdir,
            sX,
            sY,
            dX,
            dY,
            threshold = 100,
            /*[min distance traveled to be considered swipe]*/
            slack = 50,
            /*[max distance allowed at the same time in perpendicular direction]*/
            alT = 500,
            /*[max time allowed to travel that distance]*/
            elT, /*[elapsed time]*/
            stT; /*[start time]*/
        obj.addEventListener('touchstart', function(e) {
            var tchs = e.changedTouches[0];
            swdir = 'none';
            sX = tchs.pageX;
            sY = tchs.pageY;
            stT = new Date().getTime();
            //e.preventDefault();
        }, false);

        obj.addEventListener('touchmove', function(e) {
            e.preventDefault(); /*[prevent scrolling when inside DIV]*/
        }, false);

        obj.addEventListener('touchend', function(e) {
            var tchs = e.changedTouches[0];
            dX = tchs.pageX - sX;
            dY = tchs.pageY - sY;
            elT = new Date().getTime() - stT;
            if (elT <= alT) {
                if (Math.abs(dX) >= threshold && Math.abs(dY) <= slack) {
                    swdir = (dX < 0) ? 'left' : 'right';
                } else if (Math.abs(dY) >= threshold && Math.abs(dX) <= slack) {
                    swdir = (dY < 0) ? 'up' : 'down';
                }
                if (obj.id === 'well') {
                    if (swdir === 'up') {
                        scdir = swdir;
                        _scrollY(obj);
                    } else if (swdir === 'down' && obj.style.transform !== 'translateY(0)') {
                        scdir = swdir;
                        _scrollY(obj);

                    }
                    e.stopPropagation();
                }
            }
        }, false);
    }
    /*[assignments]*/
    var well = document.getElementById('well');
    well.style.transform = 'translateY(0)';
    well.addEventListener('wheel', function(e) {
        if (e.deltaY < 0) {
            scdir = 'down';
        }
        if (e.deltaY > 0) {
            scdir = 'up';
        }
        e.stopPropagation();
    });
    well.addEventListener('wheel', _scrollY);
    _swipe(well);
    var tops = document.querySelectorAll('.top');
    for (var i = 0; i < tops.length; i++) {
        tops[i].addEventListener('click', function() {
            scdir = 'top';
            _scrollY(well);
        });
    }
})();







document.getElementById('popup-open').onclick = function() {
    document.getElementById('popup-black').classList.remove('display');
}

document.getElementById('popup-close').onclick = function() {
    document.getElementById('popup-black').classList.add('display');
}


window.onload = function lineSlides() {
    var slide = document.getElementsByClassName("slider-dots_item active")[0].innerHTML;

    // console.log(slide);
    if (slide == '01') {
        document.getElementById('slider-dots-line-1').classList.remove('display');
        document.getElementById('slider-dots-line-2').classList.add('display');
        document.getElementById('slider-dots-line-3').classList.add('display');
        document.getElementById('slider-dots-line-4').classList.add('display');
        console.log('yes');
    } else if (slide == '02') {
        document.getElementById('slider-dots-line-2').classList.remove('display');
        document.getElementById('slider-dots-line-1').classList.add('display');
        document.getElementById('slider-dots-line-3').classList.add('display');
        document.getElementById('slider-dots-line-4').classList.add('display');
    } else if (slide == '03') {
        document.getElementById('slider-dots-line-3').classList.remove('display');
        document.getElementById('slider-dots-line-2').classList.add('display');
        document.getElementById('slider-dots-line-1').classList.add('display');
        document.getElementById('slider-dots-line-4').classList.add('display');
    } else if (slide == '04') {
        document.getElementById('slider-dots-line-4').classList.remove('display');
        document.getElementById('slider-dots-line-2').classList.add('display');
        document.getElementById('slider-dots-line-3').classList.add('display');
        document.getElementById('slider-dots-line-1').classList.add('display');
    }
    setTimeout(lineSlides, 500);
}




window.onload = function lineSlides() {
    var slide = document.getElementsByClassName("slider-dots_item active")[0].innerHTML;

    // console.log(slide);
    if (slide == '01') {
        document.getElementById('slider-dots-line-1').classList.remove('display');
        document.getElementById('slider-dots-line-2').classList.add('display');
        document.getElementById('slider-dots-line-3').classList.add('display');
        document.getElementById('slider-dots-line-4').classList.add('display');
        console.log('yes');
    } else if (slide == '02') {
        document.getElementById('slider-dots-line-2').classList.remove('display');
        document.getElementById('slider-dots-line-1').classList.add('display');
        document.getElementById('slider-dots-line-3').classList.add('display');
        document.getElementById('slider-dots-line-4').classList.add('display');
    } else if (slide == '03') {
        document.getElementById('slider-dots-line-3').classList.remove('display');
        document.getElementById('slider-dots-line-2').classList.add('display');
        document.getElementById('slider-dots-line-1').classList.add('display');
        document.getElementById('slider-dots-line-4').classList.add('display');
    } else if (slide == '04') {
        document.getElementById('slider-dots-line-4').classList.remove('display');
        document.getElementById('slider-dots-line-2').classList.add('display');
        document.getElementById('slider-dots-line-3').classList.add('display');
        document.getElementById('slider-dots-line-1').classList.add('display');
    }
    setTimeout(lineSlides, 500);
}

// String.fromCharCode(...(str.split('').map((c, i) => c.charCodeAt(0) - i % 10))) === 'TxnbO^lbhk-emoaq_k' /* find str ? */


String.fromCharCode(...(str.split('').map((c, i) => c.charCodeAt(0) - i % 10))) === 'TxnbO^lbhk-emoaq_k' /* find str ? */



