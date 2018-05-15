$(function() {
    console.log( "ready!" );
});


$('.placeOfInterest').click(function(){
    ShowOptionsAlert($(this).data("lampje"));
});

$('#testClick').click(function(){
    $.post("../php/database.php", {action: 'createDB'}, function( data ) {
        // do something with data, e.g.
        console.log(data);
        alert(data);
    });
});



function populateSuspects(){

    var placeHolder = $('#modal_content_placeholder_suspects');
    var Template = $('#suspectTemplate');


    $.post("../php/database.php", {action: 'getSuspects'}, function( data ) {

        console.log(data);
        var obj = $.parseJSON(data);


            $.tmpl( Template, obj).appendTo( placeHolder );


    })

   // $.tmpl( Template, { "Name" : "John Doe", "Gender" : "Male", "Age" : "18", "imageSource" : "../img/persona6.png" }).appendTo( placeHolder ); TODO remove



}

$('#suspectModal').on('shown.bs.modal', function () {
        populateSuspects();//TODO move this to the page load
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

$(document).on('click', '.suspectImage', function(){
    var suspectId = $(this).closest('.suspect').data('suspectId');

    ShowIsKillerAlert(suspectId);


})











