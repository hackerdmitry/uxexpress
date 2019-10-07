let fpsAnimation = 50;
let destSide = 8;
let curIndexPage = 0;
let notClickedDiv;

let titleTexts = ['Срочная доставка день в день', 'Подписание договора за 1 час'];
let smallTexts = ['Для тех, кто не может ждать у нас есть услуга срочной курьерской доставки корреспондеции и других видов отправлений',
                  'В течение часа наш курьер заберет вашу посылку и подпишет с Вами договор о предоставлении услуг.'];
let imageSrcs = ['picturesSlide1/car.png', 'picturesSlide1/contract.png'];
let imageMarginTops = ['22px', '59px'];
let imageMarginLefts = ['1230px', '1315px'];

window.onload = function () {
    notClickedDiv = $('.notClickedButton');
    addClickedDiv(notClickedDiv[curIndexPage]);
};

function clickPage(index) {
    if (curIndexPage !== index) {
        $(notClickedDiv[curIndexPage]).empty();
        addAnimationScroll();
        addClickedDiv(notClickedDiv[index]);
        curIndexPage = index;
        $('.titleText').html(titleTexts[curIndexPage]);
        $('.smallText').html(smallTexts[curIndexPage]);

        let $imageRectRight = $('.imageRectRight');
        $($imageRectRight.children()[0]).attr('src', imageSrcs[curIndexPage]);
        $imageRectRight.css('margin-top', imageMarginTops[curIndexPage]);
        $imageRectRight.css('margin-left', imageMarginLefts[curIndexPage]);
    }
}

function addClickedDiv(notClickedDiv) {
    $(notClickedDiv).html("<div class='clickedButton'></div>");
    let curSide = 0;

    function changeSettingChildElem(childElem, side) {
        childElem.setProperty('margin-left', (7 - side / 2) + 'px');
        childElem.setProperty('margin-top', (7 - side / 2) + 'px');
        childElem.setProperty('width', side + 'px');
        childElem.setProperty('height', side + 'px');
    }

    let timer = setInterval(function () {
        let childElem = $(notClickedDiv).children()[0].style;
        changeSettingChildElem(childElem, curSide);
        curSide++;
        if (curSide >= destSide) {
            changeSettingChildElem(childElem, destSide);
            clearInterval(timer);
        }
    }, 1000 / fpsAnimation);
}

function addAnimationScroll() {
    let movingElems = [$('#firstPage')/*, $('.smallText'), $('.imageRectRight')*/];
    let movingElemsMarginLeft = [];

    for (let i = 0; i < movingElems.length; i++) {
        let margLeft = movingElems[i].css('margin-left');
        movingElemsMarginLeft[i] = parseInt(margLeft.substr(0, margLeft.length - 2))
    }


    const speed = 75;
    let countAllOpers = 1920;

    let timer2 = setInterval(function () {
        for (let i = 0; i < movingElems.length; i++) {
            movingElems[i].css('margin-left', movingElemsMarginLeft[i] + countAllOpers + 'px')
        }
        countAllOpers -= speed;
        console.log(countAllOpers);
        if (countAllOpers <= 0) {
            for (let i = 0; i < movingElems.length; i++) {
                movingElems[i].css('margin-left', movingElemsMarginLeft[i] + 'px')
            }
            clearInterval(timer2);
        }
    }, 1000 / fpsAnimation);
}
