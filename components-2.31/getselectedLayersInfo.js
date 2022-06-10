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
  return lyrs;
}