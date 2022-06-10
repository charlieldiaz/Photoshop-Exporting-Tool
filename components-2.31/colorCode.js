/////  "Grn " , "Ylw "

function colorCode(){
    var idsetd = charIDToTypeID( "setd" );
        var desc1174 = new ActionDescriptor();
        var idnull = charIDToTypeID( "null" );
            var ref223 = new ActionReference();
            var idLyr = charIDToTypeID( "Lyr " );
            var idOrdn = charIDToTypeID( "Ordn" );
            var idTrgt = charIDToTypeID( "Trgt" );
            ref223.putEnumerated( idLyr, idOrdn, idTrgt );
        desc1174.putReference( idnull, ref223 );
        var idT = charIDToTypeID( "T   " );
            var desc1175 = new ActionDescriptor();
            var idClr = charIDToTypeID( "Clr " );
            var idClr = charIDToTypeID( "Clr " );
            var idGrn = charIDToTypeID( "Ylw " );
            desc1175.putEnumerated( idClr, idClr, idGrn );
        var idLyr = charIDToTypeID( "Lyr " );
        desc1174.putObject( idT, idLyr, desc1175 );
    executeAction( idsetd, desc1174, DialogModes.NO );

};