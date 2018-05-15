$(function() {
    console.log( "ready!" );
});


$('.placeOfInterest').click(function(){
    ShowOptionsAlert($(this).data("lampje"));
});

$('#testClick').click(function(){
});


function populateInitialInterviewQuestions() {
    var placeHolder = $('#interview-question-placeholder');
    var Template = $('#interviewQuestionTemplate');



    $.post("../php/database.php", {action: 'getInitialQuestions'}, function( data ) {

        var obj = $.parseJSON(data);

        console.log(obj);

            $.tmpl( Template, obj).appendTo( placeHolder );

    })
}

function populateSequelInterviewQuestions(id) {
    var placeHolder = $('#interview-question-placeholder');
    var Template = $('#interviewQuestionTemplate');


    $.post("../php/database.php", {action: 'getSequelQuestions', questionId: id}, function( data ) {
        //var obj = $.parseJSON(data);


        if (data != "") {
            var obj = $.parseJSON(data);

            console.log(obj);


            $.tmpl(Template, obj).appendTo(placeHolder);
        }
        else {
            // Change greeting text into an answer.
            $("#interviewAnswer").html("Ga weg");
            alert("ga weg");
        }

    });
}



function populateSuspects(){

    var placeHolder = $('#modal_content_placeholder_suspects');
    var Template = $('#suspectTemplate');


    $.post("../php/database.php", {action: 'getSuspects'}, function( data ) {

        console.log(data);
        var obj = $.parseJSON(data);


        $.each( obj, function( index, value ) {
            $.tmpl( Template, obj).appendTo( placeHolder );
        })

    })



}

function populatePersonInfo() {

    var placeHolder = $('#interview-modal-contentplaceholder');
    var Template = $('#personOfInterestTemplate');


    $.post("../php/database.php", {action: 'getPersonOfInterest'}, function( data ) {


        var obj = $.parseJSON(data);



        $.tmpl( Template, obj).appendTo(placeHolder);

    })
}



$('#suspectModal').on('shown.bs.modal', function () {
        populateSuspects();//TODO move this to the page load
    });

$('#interviewModal').on('shown.bs.modal', function () {
    //Clear the content placeholder of its html
    populateInitialInterviewQuestions();


    $('#interview-modal-contentplaceholder').empty();

    populatePersonInfo();
});

$(document).on('click', '.interviewQuestionButton', function() {
    var answer = $(this).data('answer');
    var id = $(this).data('questionId');



    // Change greeting text into an answer.
    $("#interviewAnswer").html(answer);

    $('#interview-question-placeholder').empty();

    populateSequelInterviewQuestions(id);

});


//A method to Hightlicht one of the suspects
$(document).on('click', '.btnHighlicht', function() {
    $(this).closest('.suspect').css('background-color', '#39ce4d');
});

//A method to Lowlight one of the suspects
$(document).on('click', '.btnLowLight', function() {
    $(this).closest('.suspect').css('background-color', '#e83049');
});

//A method to neurtral the suspect
$(document).on('click', '.btnNeurtral', function() {
    $(this).closest('.suspect').css('background-color', '#3e4551');
});











