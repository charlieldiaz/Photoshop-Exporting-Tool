// function isArtBoard()
// {
//     var ref = new ActionReference();
//     ref.putEnumerated(charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));
//     return executeActionGet(ref).getBoolean(stringIDToTypeID("artboardEnabled"));
// }; // end of isArtBoard()

// isArtBoard();

function isArtBoard(){
    var ref = new ActionReference();
    ref.putEnumerated(charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));
    var isArtboardLayer = executeActionGet(ref).getBoolean(stringIDToTypeID("artboardEnabled"));
    $.writeln(isArtboardLayer);
    return(isArtboardLayer);

}
// var a = isArtBoard()
// alert(a);