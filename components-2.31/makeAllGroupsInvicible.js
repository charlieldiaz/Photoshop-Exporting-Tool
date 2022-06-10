
function makeAllGroupsInvicible(Alllayers){
for (var i = 0; i < Alllayers.length; i++) {
    selectByID(Alllayers[i].id);
    // alert(activeDocument.activeLayer.name);
    if(app.activeDocument.activeLayer.typename == "LayerSet") {

    app.activeDocument.activeLayer.visible=0;

    }
    }
}