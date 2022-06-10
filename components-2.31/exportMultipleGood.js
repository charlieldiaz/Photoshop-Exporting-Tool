#include "./components/selectAllLayers.js";
// #include "./components/isArtboard.js"; //// This function doesnt work well when imported.
#include "./components/getSelectedLayersInfo.js";
#include "./components/selectByID.js";
#include "./components/makeAllGroupsInvicible.js";
#include "./components/savePng.js";
#include "./components/saveJpg.js";




function exportMultiple(){
    var doc= app.activeDocument;
    var layers = getSelectedLayersInfo();

    // Select all layers

    selectAllLayers();

    var Alllayers = getSelectedLayersInfo();

    makeAllGroupsInvicible(Alllayers);
  
  
    var a= 0;
    for(c=0; c< layers.length; c++){
      selectByID(layers[c].id);
      if(app.activeDocument.activeLayer.typename == "LayerSet"){

      // alert(activeDocument.activeLayer.name);

      for (var i = 0; i < Alllayers.length; i++) {
        selectByID(Alllayers[i].id);
        //  alert('esta aqui xx'+ activeDocument.activeLayer.name);
         
         
         if(app.activeDocument.activeLayer.id === layers[c].id){
           overallLayer= app.activeDocument.activeLayer;
          // alert('esta es el id de seleccion'+ layers[c].id + ' y id de all layers '+ app.activeDocument.activeLayer.id)
          // alert(layers[c])
          layers[c].visible = 1;
          a=1;

          //  alert('here ' + overallLayer.name);
          }
          
          
           
           function isArtBoard(){
            var ref = new ActionReference();
            ref.putEnumerated(charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));
            var isArtboardLayer = executeActionGet(ref).getBoolean(stringIDToTypeID("artboardEnabled"));
            $.writeln(isArtboardLayer);
            return(isArtboardLayer);
        
        }

        var test = isArtBoard();

        

           if (a ===1 && test){
            alert('the test is '+test)

            makeAllGroupsInvicible(Alllayers);
            alert('parapapa');
                  // overallLayer.visible = true;
                  alert(app.activeDocument.activeLayer.id + 'overall y ' + layers[c].id);
                  app.activeDocument.activeLayer.visible= true;
                  layers[c].visible= true;

            
            // alert(overallLayer.name + ' y' + layers[c].name)
            alert('here antes de salvar');

            var docName= layers[c].name;



            if(checkboxPng.value){
              savePng(docName)
            }
            // checkboxPng.value?savePng(docName):null;
            alert('here despues de salvar')

            checkboxJpeg.value?saveJpeg(docName):null;    
            

            var i = Alllayers.length;


          }
          // break;

      
          
          
          // else{
            //   return;
            // }
            
          }
          // makeAllGroupsInvicible(Alllayers);
    }
    }




    //   ///// Aqui 
    // // if we _really_ want to get artLayers we can select them one by one with IDs
    // // alert(layers.length);
    // for (var i = 0; i < layers.length; i++) {
    //   selectByID(layers[i].id);
    //   // alert(activeDocument.activeLayer.name);
      
    //   //Here is the code to make the LayerGroup Visible one at the time. Only LayerSet
    //   if(app.activeDocument.activeLayer.typename == "LayerSet") {
        
    //     function makeVisible(){
            
    //         var doc = app.activeDocument;
    //         var selectedLayer= doc.activeLayer;
    //         for(var i = 0 ; i < doc.layers.length;i++){
    //             doc.layers[i].visible =  0;
    //         }
    //         // alert(selectedLayer);
    //         selectedLayer.visible=true;  
    
    //         /// Save the Groups that are selected 
      
    //   var docName= doc.activeLayer.name;
    
    // checkboxPng.value?savePng(docName):null;
    // checkboxJpeg.value?saveJpeg(docName):null;
    //     }
    //     makeVisible();
    //     // alert(activeDocument.activeLayer.name);
    //     // alert("LayerSet");
    //     }else{
    //           }
    // }
    
    // // and reselecting everything back
    // for (var i = 0; i < layers.length; i++) {
    //   selectByID(layers[i].id, true);
    // }  

    // ////aqui
  }