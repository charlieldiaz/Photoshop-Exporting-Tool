function make70(){

    // if(doc.resolution<200){
    var newResolution= (doc.resolution)*0.7; 
    var newWidth= (doc.width)*0.7; 
    var newHeight= (doc.height)*0.7; 
  
    doc.resizeImage (newWidth, newHeight, newResolution, ResampleMethod.AUTOMATIC);
    alert('Width: '+ newWidth +', Height: '+ newHeight + ", Resolution: " +newResolution +'px');
    myDialogWindow.close();
  }