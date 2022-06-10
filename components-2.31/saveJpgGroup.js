#include "./components-2.31/kraken.js";


function saveJpgGroup(layerName, a) {



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
    
 
    // create folder if it does not exist;
    
    var folderString = docPath+"/00_Exported_images/"+"/"+docName+"/JPGs/";
    // alert(folderString);
    
    if (Folder(folderString).exists == false) {new Folder(folderString).create()};
    
    // jpg options;
    // var saveFile = new File(folderString+"/"+basename+"_"+".png")
    var saveFile = new File(folderString+"/"+basename+".jpg")
    
    if (File(folderString+"/"+basename+".jpg").exists == true){
    
        var saveFile = new File(folderString+"/"+basename+"_"+a+".jpg")
    }

        var saveOptions = new JPEGSaveOptions();
        saveOptions.embedColorProfile = true;
        saveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
        saveOptions.matte = MatteType.NONE;
        saveOptions.quality = 4;

        activeDocument.saveAs(saveFile, saveOptions, true, Extension.LOWERCASE);
    
       



// ////////////////


//     var saveOptions = new JPEGSaveOptions();
//     saveOptions.embedColorProfile = true;
//     saveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
//     saveOptions.matte = MatteType.NONE;
//     saveOptions.quality = 4;
  
//     var saveName = new File(doc.path + '/images/' +  docName + '.jpg')
//     doc.saveAs(saveName, saveOptions, true, Extension.LOWERCASE);
  
  }