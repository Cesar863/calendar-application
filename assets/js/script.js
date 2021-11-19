var today = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(today);

$(document).ready(function (){
    $(".saveBtn").on("click", function (){
        var task = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })

    function theTimeNow (){
        var currentTime=
    }

})