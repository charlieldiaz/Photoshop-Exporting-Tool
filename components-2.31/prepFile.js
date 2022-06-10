////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
////////////////PREP FILE ///////////////////////////////


function prepFile(){

  var activeDoc = app.activeDocument;
  
  var artboards = activeDoc.layers;
  
  var currentArtboardsIDs = [];
  for (var i=0; i<artboards.length; i++)
  {


  
        // select ID as we go along
        var layerID = artboards[i].id;
        currentArtboardsIDs.push(layerID);
  

  }

////// Select all layers ends here.


      // if we _really_ want to get artLayers we can select them one by one with IDs
      // alert(layers.length);
      for (var i = 0; i < currentArtboardsIDs.length; i++) {
        
        selectByID(currentArtboardsIDs[i]);
        // alert(activeDocument.activeLayer.name);
      
        if(app.activeDocument.activeLayer.typename == "LayerSet") {
          
          ///This Code below will 
          var ideditArtboardEvent = stringIDToTypeID( "editArtboardEvent" );
var desc461 = new ActionDescriptor();
var idnull = charIDToTypeID( "null" );
  var ref50 = new ActionReference();
  var idLyr = charIDToTypeID( "Lyr " );
  var idOrdn = charIDToTypeID( "Ordn" );
  var idTrgt = charIDToTypeID( "Trgt" );
  ref50.putEnumerated( idLyr, idOrdn, idTrgt );
desc461.putReference( idnull, ref50 );
var idartboard = stringIDToTypeID( "artboard" );
  var desc462 = new ActionDescriptor();
  var idartboardRect = stringIDToTypeID( "artboardRect" );
      var desc463 = new ActionDescriptor();
      var idTop = charIDToTypeID( "Top " );
      desc463.putDouble( idTop, 0.000000 );
      var idLeft = charIDToTypeID( "Left" );
      desc463.putDouble( idLeft, 864.000000 );
      var idBtom = charIDToTypeID( "Btom" );
      desc463.putDouble( idBtom, 360.000000 );
      var idRght = charIDToTypeID( "Rght" );
      desc463.putDouble( idRght, 1114.000000 );
  var idclassFloatRect = stringIDToTypeID( "classFloatRect" );
  desc462.putObject( idartboardRect, idclassFloatRect, desc463 );
  var idguideIDs = stringIDToTypeID( "guideIDs" );
      var list30 = new ActionList();
  desc462.putList( idguideIDs, list30 );
  var idartboardPresetName = stringIDToTypeID( "artboardPresetName" );
  desc462.putString( idartboardPresetName, """""" );
  var idClr = charIDToTypeID( "Clr " );
      var desc464 = new ActionDescriptor();
      var idRd = charIDToTypeID( "Rd  " );
      desc464.putDouble( idRd, 255.000000 );
      var idGrn = charIDToTypeID( "Grn " );
      desc464.putDouble( idGrn, 255.000000 );
      var idBl = charIDToTypeID( "Bl  " );
      desc464.putDouble( idBl, 255.000000 );
  var idRGBC = charIDToTypeID( "RGBC" );
  desc462.putObject( idClr, idRGBC, desc464 );
  var idartboardBackgroundType = stringIDToTypeID( "artboardBackgroundType" );
  desc462.putInteger( idartboardBackgroundType, 3 );
var idartboard = stringIDToTypeID( "artboard" );
desc461.putObject( idartboard, idartboard, desc462 );
var idchangeSizes = stringIDToTypeID( "changeSizes" );
desc461.putInteger( idchangeSizes, 8 );
var idchangeBackground = stringIDToTypeID( "changeBackground" );
desc461.putInteger( idchangeBackground, 1 );
executeAction( ideditArtboardEvent, desc461, DialogModes.NO );
            }else{
                }
      
      }
      alert('All Artboard backgrounds are transparent.')
      
      // and reselecting everything back
      // for (var i = 0; i < layers.length; i++) {
      //   selectByID(layers[i].id, true);
      // }
      
      
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
        // alert(lyrs);
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
      
   
    }