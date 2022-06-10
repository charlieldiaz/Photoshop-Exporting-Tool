#include "./components-2.31/selectAllLayers.js";
// #include "./components-2.31/isArtboard.js"; //// This function doesnt work well when imported.
#include "./components-2.31/getSelectedLayersInfo.js";
#include "./components-2.31/selectByID.js";
#include "./components-2.31/makeAllGroupsInvicible.js";
#include "./components-2.31/savePng.js";
#include "./components-2.31/saveJpg.js";
#include "./components-2.31/selectAllVisibleArtboards.js";
#include "./components-2.31/getYellowGroupsIDs.js";
#include "./components-2.31/makeAllArtboardsInvicible.js";
#include "./components-2.31/kraken.js";





function exportMultipleArtboard(checkboxPngValue, checkboxJpegValue, selectedLayers, krakenValue){
    var doc= app.activeDocument;
    selectAllVisibleArtboards();
    var artboardLayers = getSelectedLayersInfo();
    
    // // // Select all layers
    
    selectAllLayers();
    
    var Alllayers = getSelectedLayersInfo();
    
    var yellowGroupsIDs = selectedLayers;


    
    
    
    for(a=0; a< artboardLayers.length; a++){
        for(c=0; c< yellowGroupsIDs.length; c++){
            makeAllGroupsInvicible(Alllayers); // This is for the coloured groups
            // makeAllGroupsInvicible(Alllayers); /// this is for the artboards

            
            // makeAllArtboardsInvicible(Alllayers);
            selectByID(yellowGroupsIDs[c]);
            docName= app.activeDocument.activeLayer.name;

            if(app.activeDocument.activeLayer.typename == "LayerSet"){
                app.activeDocument.visibility=1;
                app.activeDocument.visibility=true;
                // alert('esto es amarillo');
                
                selectByID(artboardLayers[a].id);

                app.activeDocument.visibility=1;
                app.activeDocument.visibility=true;
                artboardName= app.activeDocument.activeLayer.name;
                // alert('esto es un artboard');


                // selectByID(yellowGroupsIDs[c])
                
                if(checkboxPngValue){

                  savePng(docName, artboardName,a);
                }

                if(checkboxJpegValue){

                    saveJpg(docName, artboardName,a);
                  }

            }

        }
    }
    if(krakenValue){
        kraken();
    }
}