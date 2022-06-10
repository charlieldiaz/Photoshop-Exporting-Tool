function savePng(layerName, artboardName,a){
var thedoc = app.activeDocument;
var docName = thedoc.name;

// getting the name and location;

var layerName = layerName;

if (layerName.indexOf(".") != -1) {var basename = layerName.match(/(.*)\.[^\.]+$/)[1]}

else {var basename = layerName};

// getting the location, if unsaved save to desktop;

// var docPath = thedoc.path
// alert(thedoc.path);
// try {var docPath = thedoc.path}

var docPath = "~/Desktop"

try {var artboardName = artboardName}

catch (e) {var artboardName = ""};

// create folder if it does not exist;

var folderString = docPath+"/00_Exported_images/"+"/"+docName+"/"+"/"+artboardName+"/PNGs/";
// alert(folderString);

if (Folder(folderString).exists == false) {new Folder(folderString).create()};

// jpg options;
// var saveFile = new File(folderString+"/"+basename+"_"+artboardName+".png")
var saveFile = new File(folderString+"/"+basename+".png")

if (File(folderString+"/"+basename+".png").exists == true){

    var saveFile = new File(folderString+"/"+basename+"_"+a+".png")
}
    var pngOpts = new PNGSaveOptions;
    pngOpts.compression = 9;
    pngOpts.interlaced = false;
    activeDocument.saveAs(saveFile, pngOpts, true, Extension.LOWERCASE);


}