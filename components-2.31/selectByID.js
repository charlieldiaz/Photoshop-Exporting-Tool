/// This function will iterate from bottom rto top and select by Id

function selectByID(id, add) {
    if (add == undefined) add = false;
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putIdentifier(charIDToTypeID('Lyr '), id);
    desc1.putReference(charIDToTypeID('null'), ref1);
    if (add) desc1.putEnumerated(stringIDToTypeID("selectionModifier"), stringIDToTypeID("selectionModifierType"), stringIDToTypeID("addToSelection"));
    executeAction(charIDToTypeID('slct'), desc1, DialogModes.NO);
} // end of selectByID()