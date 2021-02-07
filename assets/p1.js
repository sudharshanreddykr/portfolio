function toggle() {
    var x = document.getElementById("menu");

    if (x.className === "menu") {
        x.className += ' responsive';
    } else {
        x.className = 'menu';
    }
}


/* slide animation */

var sIndex = 1;
// actionSlide(sIndex);

// function actionSlide(n) {
//     var i = 0;
//     var slide = document.getElementsByClassName("slide");
//     var dots = document.getElementsByClassName("dot");

//     if(n > slide.length) {
//         sIndex = 1;
//     }

//     if(n < 1) {
//         sIndex = slide.length;
//     }

//     while(i < slide.length) {
//         slide[i].style.display = "none";
//         i++;
//     }

//     while(i < dots.length) {
//         dots[i].className = dots[i].className.replace(" active", "");
//         i++;
//     }

//     slide[sIndex-1].style.display = "block";
//     dots[sIndex-1].className += " active";
// }


actionSlide();

function actionSlide() {
    var i = 0;
    var slide = document.getElementsByClassName("slide");

    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }

    sIndex++;
    if (sIndex > slide.length) {
        sIndex = 1;
    }
    slide[sIndex - 1].style.display = "block";
    //  slide timer
    setTimeout(actionSlide, 4000); /* every 2s change slide */

}

/* slide animation ends */

function moveSlide(num) {
    actionSlide(sIndex += num);
}

function present(num) {
    actionSlide(sIndex = num);
}