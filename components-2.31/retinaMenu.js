#include "./components-2.31/makeRetina.js";

function retinaMenu(){

    var myRetinaWindow = new Window("dialog", "Exporting tool  v2.30 (Stable-MacOSX) Diaz, Carlos 2022");

    myRetinaWindow.orientation = "column"; 
    myRetinaWindow.alignChildren = ["center","top"]; 


    
    // BUTTONGROUP Top
    var buttonGroupTop = myRetinaWindow.add("Group", undefined, undefined, {name: "buttonGroupTop"}); 
    buttonGroupTop.orientation = "row"; 
    
    // BUTTONGROUP Global
    var buttonGroupMid = myRetinaWindow.add("Group", undefined, undefined, {name: "buttonGroupMid"}); 
    // buttonGroupMid.orientation = "colum"; 


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
    checkboxJpeg.text = "JPEG"; 
    // checkboxJpeg.value = 0;


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




// BUTTONGROUP MID
var buttonGroup2 = buttonGroupMid.add("Group", undefined, undefined, {name: "buttonGroup2"}); 

    // buttonGroup2.orientation = "column"; 
    buttonGroup2.alignChildren = ["left","top"]; 
    buttonGroup2.spacing = 10; 
    buttonGroup2.margins = 10; 

    var createButton = buttonGroup2.add("button", undefined, undefined, {name: "createButton"}); 
      createButton.text = "Create Structure"; 
    createButton.onClick = structure;

    var prepButton = buttonGroup2.add("button", undefined, undefined, {name: "prepButton"}); 
      prepButton.text = "Prep file"; 
    prepButton.onClick = prepFile;

    var makeRetinaButton = buttonGroup2.add("button", undefined, undefined, {name: "makeRetinaButton"}); 
    makeRetinaButton.text = "Make Retina"; 
    makeRetinaButton.onClick = makeRetina();



// myRetinaWindow LOW

var myButtonGroup = myRetinaWindow.add ("group");
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
      
    
    
    var slider1 = myButtonGroup.add("slider");
    slider1.minvalue = 1;
    slider1.maxvalue = 10;
    slider1.value = 10;
    slider1.preferredSize.width = 55;
    slider1.preferredSize.height = 15;
    slider1.onChanging = function(){
      // edittext2.text = this.value.toFixed(0);
      // return qualitySelected= this.value.toFixed(0);
    };
    // edittext2.value= slider1.onChanging;
    
    
    var exportButton = myButtonGroup.add("button", undefined, undefined, {name: "exportButton"}); 
    exportButton.text = "Export"; 
    //  exportButton.onClick=   exportMultiple;
    
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
        exportMultiple(checkboxPng.value, checkboxJpeg.value);
      }else if(checkboxGroup.value== false){
        exportAllSelected(checkboxPng.value, checkboxJpeg.value);      
      }
    }
    

    var cancelButton = myButtonGroup.add ("button", undefined, undefined, {name: "cancel"}); 
    cancelButton.text = "Cancel"; 
    cancelButton.onClick= function(){
      myRetinaWindow.close();}
      
      // SHOW THE WINDOW
      myRetinaWindow.show();
}