// function run(){
//     var layer = activeDocument.activeLayer; //Grab the currently selected layer

//     //Calculate length and width based on the rectangular bounds of the selected layer
//     var length = layer.bounds[2]-layer.bounds[0]; //Grab the length
//     var width = layer.bounds[3]-layer.bounds[1]; //Grab the width

//     //Create a text layer
//     var textLayer = activeDocument.artLayers.add(); //Make a new layer on the canvas
//     textLayer.kind = LayerKind.TEXT; //Make that layer a text layer
//     textLayer.name = "Dimensions"; //Name the layer "Dimensions"
//     var textReference = textLayer.textItem; //Create a textItem which we'll use to fill the text layer
//     textReference.contents = "Length: " + length + " Width: " + width; //Set the contents of that textItem to the length and width

// }
// run();

//////////////// Aqui

// Remove ' px' from document width and height
app.preferences.rulerUnits = Units.PIXELS;
var w = app.activeDocument.width.toString().replace(' px', '');
var h = app.activeDocument.height.toString().replace(' px', '');

//or
// var w = app.activeDocument.width.value;
// var h = app.activeDocument.height.value;

alert(w+'x'+h);