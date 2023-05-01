
const text = document.querySelector('.text');
const txt = ["欢迎来到402", "一个记事墙", "开发耗时114514h"];

var index = 0;
var xiaBiao = 0;
var huan = true;

setInterval(function () {

    if (huan) {
        text.innerHTML = txt[xiaBiao].slice(0, ++index);
    }
    else {
        text.innerHTML = txt[xiaBiao].slice(0, index--);
    }

    if (index == txt[xiaBiao].length + 5) {
        huan = false;
    }
    else if (index < 0) {
        index = 0;
        huan = true;
        xiaBiao++;
        if (xiaBiao >= txt.length) {
            xiaBiao = 0;
        }
    }

}, 200)

$("#yc").click(
    function () {
        $("#wyy").fadeOut(1000);
    }
)

$("#yc").dblclick (
    function () {
        $("#wyy").fadeIn(1000);
    }
)

