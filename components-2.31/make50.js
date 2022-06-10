function make50(){

    // if(doc.resolution<200){
    var newResolution= (doc.resolution)*0.5; 
    var newWidth= (doc.width)*0.5; 
    var newHeight= (doc.height)*0.5; 
  
    doc.resizeImage (newWidth, newHeight, newResolution, ResampleMethod.AUTOMATIC);
    alert('Width: '+ newWidth +', Height: '+ newHeight + ", Resolution: " +newResolution +'px');
    myDialogWindow.close();
  }