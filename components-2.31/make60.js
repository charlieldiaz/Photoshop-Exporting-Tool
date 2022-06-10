function make60(){

    // if(doc.resolution<200){
    var newResolution= (doc.resolution)*0.6; 
    var newWidth= (doc.width)*0.6; 
    var newHeight= (doc.height)*0.6; 
  
    doc.resizeImage (newWidth, newHeight, newResolution, ResampleMethod.AUTOMATIC);
    alert('Width: '+ newWidth +', Height: '+ newHeight + ", Resolution: " +newResolution +'px');
    myDialogWindow.close();
  }