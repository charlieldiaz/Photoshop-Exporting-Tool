////////////// Iterate over the selected layers ///////////
//////////////////////////////////////////////////
//Selecionamos la parte que queremos que sea parte del grupo/ layer la parte mas importante es que podemos hacer inclusive layers. 
function donesome(){
    var doc= app.activeDocument;
    var layers = getSelectedLayersInfo();
    // if we _really_ want to get artLayers we can select them one by one with IDs
    alert(layers.length);
    for (var i = 0; i < layers.length; i++) {
      
      selectByID(layers[i].id);
      // alert(activeDocument.activeLayer.name);
    
      //Here is the code to make the LayerGroup Visible one at the time. Only LayerSet
    //   if(app.activeDocument.activeLayer.typename == "LayerSet") {
        
          function makeVisible(){
            var doc = app.activeDocument;
            var selectedLayer= doc.activeLayer;
            for(var i = 0 ; i < doc.layers.length;i++){
                doc.layers[i].visible =  0;
            }
            // alert(selectedLayer);
            selectedLayer.visible=true;
            alert(selectedLayer);
            alert(selectedLayer.visible);

    
    
            /// Save the Groups that are selected 
      
      var docName= doc.activeLayer.name;
      savePng(docName);   /////We call the save function here
      
        }
        makeVisible();
        // alert(activeDocument.activeLayer.name);
        // alert("LayerSet");
        
    
    }
    
    // and reselecting everything back
    for (var i = 0; i < layers.length; i++) {
      selectByID(layers[i].id, true);
    }
    
    
    function getSelectedLayersInfo()
    {
      var lyrs = [];
      var lyr;
      var ref = new ActionReference();
      var desc;
      var tempIndex = 0;
      var ref2;
      ref.putProperty(stringIDToTypeID("property"), stringIDToTypeID("targetLayers"));
      ref.putEnumerated(charIDToTypeID('Dcmn'), charIDToTypeID('Ordn'), charIDToTypeID('Trgt'));
    
      var targetLayers = executeActionGet(ref).getList(stringIDToTypeID("targetLayers"));
      for (var i = 0; i < targetLayers.count; i++)
      {
        ref2 = new ActionReference();
    
        // if there's a background layer in the document, AM indices start with 1, without it from 0. ¯\_(ツ)_/¯ 
        try
        {
          activeDocument.backgroundLayer;
          ref2.putIndex(charIDToTypeID('Lyr '), targetLayers.getReference(i).getIndex());
          desc = executeActionGet(ref2);
          tempIndex = desc.getInteger(stringIDToTypeID("itemIndex")) - 1;
    
        }
        catch (o)
        {
          ref2.putIndex(charIDToTypeID('Lyr '), targetLayers.getReference(i).getIndex() + 1);
          desc = executeActionGet(ref2);
          tempIndex = desc.getInteger(stringIDToTypeID("itemIndex"));
        }
    
        lyr = {};
        lyr.index = tempIndex;
        lyr.id = desc.getInteger(stringIDToTypeID("layerID"));
        lyr.name = desc.getString(charIDToTypeID("Nm  "));
        lyrs.push(lyr);
      }
      alert(lyrs);
      return lyrs;
    }
    
    function selectByID(id, add) {
        if (add == undefined) add = false;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putIdentifier(charIDToTypeID('Lyr '), id);
        desc1.putReference(charIDToTypeID('null'), ref1);
        if (add) desc1.putEnumerated(stringIDToTypeID("selectionModifier"), stringIDToTypeID("selectionModifierType"), stringIDToTypeID("addToSelection"));
        executeAction(charIDToTypeID('slct'), desc1, DialogModes.NO);
    } // end of selectByID()
    
    // alert(layers);
    
    ////////////// Saving function below ///////////
    //////////////////////////////////////////////////
    
    function savePng(name){
      var file= new File(doc.path + '/images/' +  name + '.png')
      var opts = new ExportOptionsSaveForWeb();
      opts.quality =10; //////////// To be changed
      opts.transparency =true;
      type= ExportType.SAVEFORWEB
      
      doc.exportDocument(file, type,opts);
    }    
    }
    donesome();