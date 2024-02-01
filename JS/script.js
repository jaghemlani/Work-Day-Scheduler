$(function() {
   

    setInterval(() => {
        $('#currentDay').text(dayjs().format("MMM DD, YYYY hh:mm:ss a"));
        
        
        //lines 9-20 is for the webpage to update color blocks based on the time
        $('.time-block').each(function() {
           var timeBlock = $(this).attr('id').slice(5);
           console.log(timeBlock);
           var currentHour = dayjs().format("H");
           console.log(currentHour);

            if (currentHour > timeBlock) {
                $(this).addClass("past");
                $(this).removeClass("future", "present");
                
            } else if (currentHour < timeBlock) {
                $(this).addClass("future");
                $(this).removeClass("past", "present");
                
            } else {
                $(this).addClass("present");
                $(this).removeClass("past", "future");
                
            }
        });

    }, 1000);
});

//following lines are for click function to save data that is enetered into timeblock
$(".saveBtn").click(function () {
    var $description = $(this).siblings(".description");
    var eventStuff = $description.val();
    var timeBlock = $(this).closest(".time-block").attr("id");
    localStorage.setItem(timeBlock, eventStuff);
});

$(".time-block").each(function(){
    var $description = $(this).children(".description");
    var timeBlock = $(this).attr("id");
    $description.val(localStorage.getItem(timeBlock));
});


  