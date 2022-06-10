// call the source document
function selectAllVisibleArtboards(){
  var activeDoc = app.activeDocument;
  
  var artboards = activeDoc.layers;
  
  var visibleArtboards = [];
  for (var i=0; i<artboards.length; i++)
  {
      if(artboards[i].visible)
      {
  
        // select ID as we go along
        var layerID = artboards[i].id;
        visibleArtboards.push(layerID);
  
      }
  }
  
  // Loop over the layers again and select all the art boards
  for (var i=0; i<visibleArtboards.length; i++)
  {
     // add to current selection of layers
     select_by_ID(visibleArtboards[i], true);
  }
  
  
  
  
  function select_by_ID(id, add)
  {
      if (add == undefined) add = false;
      var desc1 = new ActionDescriptor();
      var ref1 = new ActionReference();
      ref1.putIdentifier(charIDToTypeID('Lyr '), id);
      desc1.putReference(charIDToTypeID('null'), ref1);
      if (add) desc1.putEnumerated(stringIDToTypeID("selectionModifier"), stringIDToTypeID("selectionModifierType"), stringIDToTypeID("addToSelection"));
      executeAction(charIDToTypeID('slct'), desc1, DialogModes.NO);
  } // end of selectByID()

}