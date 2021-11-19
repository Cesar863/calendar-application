var today = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(today);

$(document).ready(function (){
    $(".saveBtn").on("click", function (){
        var task = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })

    function theTimeNow (){
        var currentTime = moment().hour();

        $(".time-block").each(function () {
            var taskTime = parseInt($(this). attr("id").split("hour")[1]);

            if (taskTime < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (taskTime === currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
            }
        )
    }

});