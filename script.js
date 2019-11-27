let curIndexPage = 0;
let htmlHeaderBody = [];

function synchronizePageButtons($headerBody) {
    let $checkButton = $('.check-button')[0];
    let checkmate = $($checkButton).html();
    $($checkButton).empty();
    let $scrollButtons = $('#scroll-buttons');
    let checkButtonCode = $($scrollButtons).html();
    let htmlScrollButtons = checkButtonCode;
    for (let i = 1; i < $headerBody.size(); i++) {
        htmlScrollButtons += checkButtonCode.replace(0, i);
    }
    $($scrollButtons).html(htmlScrollButtons);
    $($('.check-button')[0]).html(checkmate);
}

window.onload = function () {
    let $headerBody = $('.header-body');
    for (let i = 0; i < $headerBody.size(); i++) {
        htmlHeaderBody[i] = $($headerBody[i]).html();
        $($headerBody[i]).empty();
    }
    $($headerBody[0]).html(htmlHeaderBody[0]);
    synchronizePageButtons($headerBody);
};

let isAnimate = false;

function startAnimation(index) {
    isAnimate = true;
    let $headerBody = $('.header-body');

    let check_buttons = $('.check-button');
    $(check_buttons[index]).html($(check_buttons[curIndexPage]).html());
    $(check_buttons[curIndexPage]).empty();
    $($headerBody[0]).html(htmlHeaderBody[curIndexPage]);
    $($headerBody[1]).html(htmlHeaderBody[index]);

    $($headerBody[0]).addClass("left");
    $($headerBody[1]).addClass("left");
    return $headerBody;
}

function endAnimation($headerBody, index) {
    setTimeout(function () {
        $($headerBody[0]).html($($headerBody[1]).html());
        $($headerBody[0]).removeClass("left");
        $($headerBody[1]).removeClass("left");

        curIndexPage = index;
        isAnimate = false;
    }, 1000);// * $($headerBody[0]).css('transition').split(' ')[1].replace('s', ''));
}

function clickPage(index) {
    if (curIndexPage !== index && !isAnimate) {
        let $headerBody = startAnimation(index);
        endAnimation($headerBody, index);
    }
}


