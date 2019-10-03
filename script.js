let fpsAnimation = 50;
let destSide = 8;
let curIndexPage = 0;
let notClickedDiv;

let titleTexts = ['Срочная доставка день в день', 'Подписание договора за 1 час'];
let smallTexts = ['Для тех, кто не может ждать у нас есть услуга срочной курьерской доставки корреспондеции и других видов отправлений',
                  'В течение часа наш курьер заберет вашу посылку и подпишет с Вами договор о предоставлении услуг.'];
let imageSrcs = ['picturesSlide1/car.png', 'picturesSlide1/contract.png'];

window.onload = function () {
    notClickedDiv = $('.notClickedButton');
    addClickedDiv(notClickedDiv[curIndexPage]);
};

function clickPage(index) {
    if (curIndexPage !== index) {
        $(notClickedDiv[curIndexPage]).empty();
        addClickedDiv(notClickedDiv[index]);
        curIndexPage = index;
        $('.titleText').html(titleTexts[curIndexPage]);
        $('.smallText').html(smallTexts[curIndexPage]);
        $('.imageRectRight').attr('src', imageSrcs[curIndexPage]);
    }
}

function addClickedDiv(notClickedDiv) {
    $(notClickedDiv).html("<div class='clickedButton'></div>");
    let curSide = 0;

    function changeSettingChildElem(childElem, side) {
        childElem.setProperty('left', (7 - side / 2) + 'px');
        childElem.setProperty('top', (7 - side / 2) + 'px');
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
    }, 1000 / fpsAnimation)
}
