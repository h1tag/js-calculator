$(document).ready(function () {
    //'use strict';

    handleClick();
});

var click_counter = 0;

function clear() {
    //'use strict';

    $("#screen-data").empty();
}

function handleClick() {
    /*if(click_counter === 0){
      clear();
    }*/

    click_counter++;
    // C button
    $("#clear").click(function () {
        $("#screen-data").empty();
        $("#screen-data").html('0');
    });

    // 9 button
    $("#nine").click(function () {
        // show the data on the calculator screen
        $("#screen-data").append(9);
    });

    $("#eight").click(function () {
        $("#screen-data").append(8);
    });

    $("#seven").click(function () {
        $("#screen-data").append(7);
    });

    $("#six").click(function () {
        $("#screen-data").append(6);
    });

    $("#five").click(function () {
        $("#screen-data").append(5);
    });

    $("#four").click(function () {
        $("#screen-data").append(4);
    });

    $("#three").click(function () {
        $("#screen-data").append(3);
    });

    $("#two").click(function () {
        $("#screen-data").append(2);
    });

    $("#one").click(function () {
        $("#screen-data").append(1);
    });

    $("#zero").click(function () {
        $("#screen-data").append(0);
    });

    $("#point").click(function () {
        $("#screen-data").append('.');
    });

    $("#plus").click(function () {
        $("#screen-data").append('+');
    });

    $("#minus").click(function () {
        $("#screen-data").append('-');
    });

    $("#multi").click(function () {
        $("#screen-data").append('*');
    });

    $("#divide").click(function () {
        $("#screen-data").append('/');
    });

    $("#equal").click(function () {
        //$("#screen-data").append('=');
        $("#screen-data").html(eval($("#screen-data").html()));
    });
}

function result() {
    return eval($("#screen-data").html());
}
