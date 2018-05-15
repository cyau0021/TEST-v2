
function ShowOptionsAlert(lampje) {
    $.confirm({
        theme: 'dark',
        title: 'Options',
        content: 'Wat wilt u doen met de geselecteerde POI?',
        buttons: {
            Bezoeken:{
                btnClass: 'btn-default',
                action: function(){
                    ShowPaymentAlert(lampje);
                }
            },
            Informatie: {
                btnClass: 'btn-default',
                action: function(){
                    //redirect the user to the details page of the POI
                    window.location.replace('interview.html');
                }
            }
        }
    })
};

function ShowPaymentAlert(lampje) {
    $.confirm({
        theme: 'dark',
        title: 'Are you sure?',
        content: 'De kosten bedragen €8,50 om naar deze locatie te verplaatsen. Weet je zeker dat je dit wilt doen?',
        buttons: {
            confirm:{
                btnClass: 'btn-success',
                action: function(){

                    //use ajax to call a php script to execute a python script on the server side :D
                    $.post( "../php/MovePlayer.php", {lampje : lampje}, function(data) {
                        alert(data);
                    })
                }
            },
            cancel: {
                btnClass: 'btn-danger'
                //do nothing
            }
        }
    });
};


