#include "./components-2.31/colorLabelReader.js";
#include "./components-2.31/selectByID.js";



function getYellowGroupsIDs(allLayers){

    var yellowGroupsIDs = [];
    
    
    for(a=0; a< allLayers.length; a++){
        selectByID(allLayers[a].id);
        
    
        var isYellowtest= colorLabelReader("yellowColor")
        // alert('este es el test '+ isYellowtest)
        if(isYellowtest){
            

            var layerID = allLayers[a].id;
            yellowGroupsIDs.push(layerID);

        }
        
    }
    
    return yellowGroupsIDs;
}