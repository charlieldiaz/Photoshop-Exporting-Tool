#include "./components-2.31/getSelectedLayersInfo.js";
#include "./components-2.31/selectAllLayers.js";
#include "./components-2.31/getYellowGroupsIDs.js";
#include "./components-2.31/isArtBoard.js";
#include "./components-2.31/exportMultipleArtboard.js";
#include "./components-2.31/exportMultipleGroup.js";
#include "./components-2.31/kraken.js";







function exportMultiple(checkboxPngValue, checkboxJpegValue, krakenValue){

  var doc= app.activeDocument;
  var selectedLayers = getSelectedLayersInfo();
  

  if(selectedLayers.length=== 0){

    //Get yellow Layers
    selectAllLayers();
    var alllayers = getSelectedLayersInfo();
    var selectedLayers = getYellowGroupsIDs(alllayers);
    
    // Check if there are Artboards
    var isThereArtboard;
    selectAllLayers();
    var selectedLayersForTest = getSelectedLayersInfo();
    for (var i = 0; i < selectedLayersForTest.length; i++) {
      selectByID(selectedLayersForTest[i].id);
      
   

      var testArtboard = isArtBoard();

    if(testArtboard=== true){
      isThereArtboard = true;
    }
    }

    if(isThereArtboard){

      exportMultipleArtboard(checkboxPngValue, checkboxJpegValue, selectedLayers, krakenValue);
    }else{
      
      exportMultipleGroup(checkboxPngValue, checkboxJpegValue, selectedLayers, krakenValue);
    }

    
  }

}

