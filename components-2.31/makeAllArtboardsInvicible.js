
function makeAllArtboardInvicible(Alllayers){



for (var i = 0; i < Alllayers.length; i++) {

    selectByID(Alllayers[i]);
    // alert(activeDocument.activeLayer.name);


    app.activeDocument.activeLayer.visible=0;


    }
}