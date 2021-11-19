var today = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(today);

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var task = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, task);
    })

    function theTimeNow() {
        var currentTime = moment().hour();

        $(".time-block").each(function () {
            var taskTime = parseInt($(this).attr("id").split("hour")[1]);

            if (taskTime < currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            } else if (taskTime === currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("present");
                $(this).removeClass("future");
                $(this).addClass("past");
            }
        })
    }

    $("#9Am .description").val(localStorage.getItem("9Am"));
    $("#10Am .description").val(localStorage.getItem("10Am"));
    $("#11Am .description").val(localStorage.getItem("11Am"));
    $("#12Pm .description").val(localStorage.getItem("12Pm"));
    $("#1Pm .description").val(localStorage.getItem("1Pm"));
    $("#2Pm .description").val(localStorage.getItem("2Pm"));
    $("#3Pm .description").val(localStorage.getItem("3Pm"));
    $("#4Pm .description").val(localStorage.getItem("4Pm"));
    $("#5Pm .description").val(localStorage.getItem("5Pm"));
    
    theTimeNow();
});