
function makeAllLayersInvicible(Alllayers){
for (var i = 0; i < Alllayers.length; i++) {
    selectByID(Alllayers[i].id);
    // alert(activeDocument.activeLayer.name);
    app.activeDocument.activeLayer.visible=0;
    alert('here!!')
     
    }
}