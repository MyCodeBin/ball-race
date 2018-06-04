$(function(){

    //Click to go button
    $("#go").click(function () {
        //Build a function that check the winning car

        function checkIfComplete() {

            if( isComplete == false ) {
                isComplete = true;
            } else {
                place = 'second';
            }

        }




         // get the cars width
        var carWidth = $('#car1').width();

        //raceTrackWidth
        var raceTrackWidth = $(window).width()- carWidth;

        //Generate a random number between 1 and 5000
        var raceTime1 = Math.floor((Math.random() * 5000) + 1);
        var raceTime2 = Math.floor((Math.random() * 5000) + 1);

        //Set a flag variable to False by default
        var isComplete = false;
        //Set a flag variable to First by default
        var place = 'first';

        //animate car 1

        $('#car1').animate({
                //move the car width of the race track
                left:raceTrackWidth
        }, raceTime1, function () {

            //animation is complete
            //run a function
            checkIfComplete();

            //Give some tex feedback in the race into box
            $('#raceInfo1 span').text('Finished in ' + place + ' placed and clocked in at '+ raceTime1 +' miliseconds' );

        });

         //animate car 2
        $('#car2').animate({
                //move the car width of the race track
                left:raceTrackWidth,
        },raceTime2, function () {

            //animation is complete
            //run a function
            checkIfComplete();
            //Give some tex feedback in the race into box
            $('#raceInfo2 span').text('Finished in '+ place + ' placed and clocked in at '+ raceTime2 +' miliseconds');

        });
        //Reset the race
        $("#reset").click(function () {
            $('.car').css('left','0');
            $('.raceInfo span').text();

        });

    });

});



