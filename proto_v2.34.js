// #target photoshop
#include "./components-2.31/structure.js";
#include "./components-2.31/exportMultiple.js";
// #include "./components-2.31/exportAllSelected.js";
// #include "./components-2.31/prepFile.js";
#include "./components-2.31/savePng.js";
#include "./components-2.31/saveJpg.js";
#include "./components-2.31/colorCode.js";
#include "./components-2.31/makeRetina.js";
#include "./components-2.31/make50.js";
#include "./components-2.31/make60.js";
#include "./components-2.31/make70.js";
#include "./components-2.31/make80.js";
#include "./components-2.31/make90.js";
#include "./components-2.31/howToUse.js";
#include "./components-2.31/kraken.js";





var doc= app.activeDocument;


// GUI - START

// MYDIALOGWINDOW
var myDialogWindow = new Window("dialog", "Exporting tool  v2.34 (Stable-MacOSX) Diaz, Carlos 2022");

    myDialogWindow.orientation = "column"; 
    myDialogWindow.alignChildren = ["center","top"]; 


    
    // BUTTONGROUP Top
    var buttonGroupTop = myDialogWindow.add("Group", undefined, undefined, {name: "buttonGroupTop"}); 
    buttonGroupTop.orientation = "row"; 
    
    // BUTTONGROUP Mid
    var buttonGroupMid = myDialogWindow.add("Group", undefined, undefined, {name: "buttonGroupMid"}); 
    // buttonGroupMid.orientation = "colum"; 

     // BUTTONGROUP Bottom
     var buttonGroupBottom = myDialogWindow.add("Group", undefined, undefined, {name: "buttonGroupMid"}); 
     buttonGroupBottom.orientation = "colum"; 


// BUTTONGROUP Artboard Checkbox
var buttonGroup = buttonGroupTop.add("panel", undefined, undefined, {name: "buttonGroup"}); 
    buttonGroup.text = "Export only"; 
    buttonGroup.orientation = "column"; 
    buttonGroup.alignChildren = ["left","top"]; 
    buttonGroup.spacing = 10; 
    buttonGroup.margins = 10; 


var checkboxGroup = buttonGroup.add("checkbox", undefined, undefined, {name: "checkboxGroup"}); 
checkboxGroup.text = "Groups/ArtBoards"; 
  checkboxGroup.value = true;
  checkboxGroup.preferredSize = [1, 60];


    // BUTTONGROUP Kraken
var krakenGroup = buttonGroupTop.add("panel", undefined, undefined, {name: "krakenGroup"}); 
krakenGroup.text = "Kraken when"; 
krakenGroup.orientation = "column"; 
krakenGroup.alignChildren = ["left","top"]; 
krakenGroup.spacing = 10; 
krakenGroup.margins = 10; 


var krakenCheckboxGroup = krakenGroup.add("checkbox", undefined, undefined, {name: "krakenCheckboxGroup"}); 
krakenCheckboxGroup.text = "Exporting"; 
krakenCheckboxGroup.value = false;
krakenCheckboxGroup.preferredSize = [1, 60];




  // BUTTONGROUP PNG/JPEG Checkbox
var buttonGroup = buttonGroupTop.add("panel", undefined, undefined, {name: "buttonGroup"}); 
buttonGroup.text = "Export"; 
buttonGroup.orientation = "column"; 
buttonGroup.alignChildren = ["left","top"]; 
buttonGroup.spacing = 10; 
buttonGroup.margins = 10; 
buttonGroup.preferredSize = [1, 90];

var checkboxPng = buttonGroup.add("checkbox", undefined, undefined, {name: "checkboxPng"}); 
checkboxPng.text = "PNG"; 
checkboxPng.value = true;

var checkboxJpeg = buttonGroup.add("checkbox", undefined, undefined, {name: "checkboxJpeg"}); 
checkboxJpeg.text = "JPG"; 
// checkboxJpeg.value = 0;


// BUTTONGROUP MID
var buttonGroup2 = buttonGroupMid.add("Group", undefined, undefined, {name: "buttonGroup2"}); 

    // buttonGroup2.orientation = "column"; 
    buttonGroup2.alignChildren = ["left","top"]; 
    buttonGroup2.spacing = 10; 
    buttonGroup2.margins = 10; 

    var prepButton = buttonGroup2.add("button", undefined, undefined, {name: "prepButton"}); 
      prepButton.text = "Prep Artboards"; 
    prepButton.onClick = prepFile;

    var krakenButton = buttonGroup2.add("button", undefined, undefined, {name: "krakenButton"}); 
      krakenButton.text = "Kraken"; 
    krakenButton.onClick = kraken;

    var createButton = buttonGroup2.add("button", undefined, undefined, {name: "createButton"}); 
      createButton.text = "Create Structure"; 
    createButton.onClick = structure;


    

///Resizing Group
var buttonGroup = buttonGroupBottom.add("panel", undefined, undefined, {name: "buttonGroup"}); 
    buttonGroup.text = "Resizing"; 
    buttonGroup.orientation = "column"; 
    buttonGroup.alignChildren = "center"
    buttonGroup.spacing = 5; 
    buttonGroup.margins = 5; 

    // dlg.staticTxtBx = dlg.add('statictext',undefined, reminder,{multiline: true});  /// to make multiple lines

    
    
    var buttonGroup3 = buttonGroup.add("Group", undefined, undefined, {name: "buttonGroup3"}); 
    buttonGroup3.text = "Resizing"; 
    buttonGroup3.orientation = "row"; 
    buttonGroup3.alignChildren = "center"
    buttonGroup3.spacing = 5; 
    buttonGroup3.margins = 5; 
    
    var Resolution= (doc.resolution); 
    var Width= (doc.width); 
    var Height= (doc.height); 
  
   var docSize = buttonGroup3.add("statictext", undefined, undefined, {name: "docSize"});
    docSize.text = Width +', '+ Height + ", Res: " +Resolution +'px'; //"Message"; 
    docSize.alignment = "center";

    var buttonGroup4 = buttonGroup.add("Group", undefined, undefined, {name: "buttonGroup4"}); 
    // buttonGroup4.text = "Resizing"; 
    buttonGroup4.orientation = "row"; 
    // buttonGroup4.alignChildren = ["left","top"]; 
    buttonGroup4.spacing = 5; 
    buttonGroup4.margins = 5; 

var make50Button = buttonGroup4.add("button", undefined, undefined, {name: "make50Button"}); 
make50Button.text = "5"; 
make50Button.onClick = make50;

var make60Button = buttonGroup4.add("button", undefined, undefined, {name: "make60Button"}); 
make60Button.text = "6"; 
make60Button.onClick = make60;

var make70Button = buttonGroup4.add("button", undefined, undefined, {name: "make70Button"}); 
make70Button.text = "7"; 
make70Button.onClick = make70;

var make80Button = buttonGroup4.add("button", undefined, undefined, {name: "make80Button"}); 
make80Button.text = "8"; 
make80Button.onClick = make80;

var make90Button = buttonGroup4.add("button", undefined, undefined, {name: "make90Button"}); 
make90Button.text = "9"; 
make90Button.onClick = make90;

var makeRetinaButton = buttonGroup4.add("button", undefined, undefined, {name: "makeRetinaButton"}); 
makeRetinaButton.text = "Retina"; 
makeRetinaButton.onClick = makeRetina;

// MYDIALOGWINDOW LOW

var myButtonGroup = myDialogWindow.add ("group");
 myButtonGroup.alignment = "right";
//  myButtonGroup.add ("statictext", undefined, "Quality (1-10)");

//// Quality Slider
// var myText = myButtonGroup.add ("edittext", undefined, "10");
// myText.active = true;

  function myInput () {
    var myWindow = new Window ("dialog", "Quality");
     var myInputGroup = myWindow.add ("group");
     myInputGroup.add ("statictext", undefined, "Name:");
     var myText = myInputGroup.add ("edittext", undefined, '10');
     myText.characters = 20;
     myText.active = true;
     var myButtonGroup = myWindow.add ("group");
     myButtonGroup.alignment = "right";
     myButtonGroup.add ("button", undefined, "OK");
     myButtonGroup.add ("button", undefined, "Cancel");
    if (myWindow.show () == 1) {
     return myText.text;
    }
    exit ();
    }
      
    
    
    // var slider1 = myButtonGroup.add("slider");
    // slider1.minvalue = 1;
    // slider1.maxvalue = 10;
    // slider1.value = 10;
    // slider1.preferredSize.width = 55;
    // slider1.preferredSize.height = 15;
    // slider1.onChanging = function(){
    //   // edittext2.text = this.value.toFixed(0);
    //   // return qualitySelected= this.value.toFixed(0);
    // };
    // edittext2.value= slider1.onChanging;
    
    var howToUseButton = myButtonGroup.add("button", undefined, undefined, {name: "howToUseButton"}); 
    howToUseButton.text = "How to use ?";     
    howToUseButton.onClick=   howToUse;
    
    var exportButton = myButtonGroup.add("button", undefined, undefined, {name: "exportButton"}); 
    exportButton.text = "Export"; 
    exportButton.onClick=   selectedExport;

    
    ///Selection from radius
    function selectedExport(){
      
      // var qualitySelected=Number( myInput());
      // alert('Quality to be exported:' + qualitySelected); ///////    ///////   //////     /////////   //////   //////      ////////      ///////
      
      var doc = app.activeDocument;
      var docName= doc.activeLayer.name;
      if(checkboxPng.value==false && checkboxJpeg.value==false){
        alert('You must select a format to be exported (PNG/JPEG)')
      }else if(checkboxGroup.value== true){
        exportMultiple(checkboxPng.value, checkboxJpeg.value, krakenCheckboxGroup.value);
      }else if(checkboxGroup.value== false){
        exportAllSelected(checkboxPng.value, checkboxJpeg.value);      
      }
    }
    

    var cancelButton = myButtonGroup.add ("button", undefined, undefined, {name: "cancel"}); 
    cancelButton.text = "Cancel"; 
    cancelButton.onClick= function(){
      myDialogWindow.close();}
      
      // SHOW THE WINDOW
      myDialogWindow.show();
      
      // //////////////
      
      



////////////// Iterate over the selected layers ///////////
//////////////////////////////////////////////////
//Selecionamos la parte que queremos que sea parte del grupo/ layer la parte mas importante es que podemos hacer inclusive layers. 




  /// Code needs to double down because there is herarchy inside the file therefore we need to pass insde function other functions. 
  //att this is easier and resource friendly

//   function savePng(docName){
// //  alert(qualitySelected + 'numero dos');
//     var file= new File(doc.path + '/images/' +  docName + '.png')
//     var opts = new ExportOptionsSaveForWeb();
//     opts.quality =10; //////////// To be changed
//     // opts.quality =qualitySelected; //////////// To be changed

//     opts.transparency =true;
//     type= ExportType.SAVEFORWEB
    
//     doc.exportDocument(file, type,opts);
// }    


  




//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////



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