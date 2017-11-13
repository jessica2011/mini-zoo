var image = document.getElementsByClassName('animal');
var boxImages = document.querySelectorAll('.images-js');
var selectColors = document.querySelector('.option-colors-js');
var selectTipo = document.querySelector('.select-tipo-js');

selectColors.onchange = function() {
    if (selectColors.value == "original") {
        for (i = 0; i < image.length; i++) {
            image[i].classList.remove('white-black');
            image[i].classList.remove('negative-colors');
            image[i].classList.remove('sepia');
        }
    } else if (selectColors.value == "white-black") {
        for (i = 0; i < image.length; i++) {
            image[i].classList.add("white-black");
            image[i].classList.remove('negative-colors');
            image[i].classList.remove('sepia');
            image[i].classList.remove('original');
        }

    } else if (selectColors.value == "sepia") {
        for (i = 0; i < image.length; i++) {
            image[i].classList.add("sepia");
            image[i].classList.remove('negative-colors');
            image[i].classList.remove('white-black');
            image[i].classList.remove('original');
        }

    } else if (selectColors.value == "negative-colors") {
        for (i = 0; i < image.length; i++) {
            image[i].classList.add('negative-colors');
            image[i].classList.remove('white-black');
            image[i].classList.remove('sepia');
            image[i].classList.remove('original');
        }

    }
}

selectTipo.onchange = function() {
    if (selectTipo.value == '') {
        boxImages[0].classList.add('box-hide');
        boxImages[0].classList.remove('box-show');
        boxImages[1].classList.add('box-hide');
        boxImages[1].classList.remove('box-show');

    } else if (selectTipo.value == 'birds') {
        boxImages[0].classList.add('box-show');
        boxImages[0].classList.remove('box-hide');
        boxImages[1].classList.add('box-hide');
        boxImages[1].classList.remove('box-show');
    } else {
        boxImages[0].classList.add('box-hide');
        boxImages[0].classList.remove('box-show');
        boxImages[1].classList.remove('box-hide');
        boxImages[1].classList.add('box-show');
    }
}