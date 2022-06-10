function makeRetina(){

    // if(doc.resolution<200){
    var newResolution= (doc.resolution)*2; 
    var newWidth= (doc.width)*2; 
    var newHeight= (doc.height)*2; 
  
    doc.resizeImage (newWidth, newHeight, newResolution, ResampleMethod.AUTOMATIC);
    alert('Width: '+ newWidth +', Height: '+ newHeight + ", Resolution: " +newResolution +'px');
    myDialogWindow.close();
  
  }