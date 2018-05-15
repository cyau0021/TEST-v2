
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
        content: 'Het kost je 1 beurt om je naar deze locatie te verplaatsen, weet je zeker dat je dit wilt doen?',
        buttons: {
            confirm:{
                btnClass: 'btn-success',
                action: function(){

                    //use ajax to call a php script to execute a python script on the server side to turn on a light :D
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

function ShowIsKillerAlert(suspectId){
    $.confirm({
        theme: 'dark',
        title: 'Zeker weten?',
        content: 'Ben je er zeker van dat deze verdachte de dader is? Je hebt maar 1 kans om iemand aan te wijzen, indien je de verkeerde persoon aanwijst is het spel verloren.',
        buttons: {
            Aresteer:{
                btnClass: 'btn-success',
                action: function(){
                    //use ajax to call a php script to execute a python script on the server side to turn on a light :D
                    $.post( "../php/database.php", {action : 'checkIsKiller', suspectId : suspectId}, function(data) {
                        if(data){
                            alert('You win');
                        } else{
                            alert('You lose');
                        }
                    })
                }
            },
            Anuleer: {
                btnClass: 'btn-danger',
                action: function(){
                    //redirect the user to the details page of the POI
                    window.location.replace('interview.html');
                }
            }
        }
    })
}


