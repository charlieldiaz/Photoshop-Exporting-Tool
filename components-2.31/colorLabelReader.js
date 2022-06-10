function colorLabelReader(color){
  var ref = new ActionReference();
  
     ref.putEnumerated( charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") );
  
     var desc = executeActionGet(ref);
  
    varColor = ( typeIDToStringID(desc.getEnumerationValue( stringIDToTypeID('color')) ));
    testColor = color;
    if(varColor === testColor){
      return true;
    }else{
      // alert('no es amarillo');
      return false;
    }
}