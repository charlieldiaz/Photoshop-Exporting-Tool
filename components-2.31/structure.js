      // ////////////////////////////////////////////
      // ////////////////////////////////////////////
      // // / Create Structure for files to be placed
      
      function main(){
        var selectedFolder = File.openDialog("Please select folder", true);
        if(selectedFolder == null) return;
        var fileList= selectedFolder;
        var names = [];
        if(fileList.length>0){
          for (var i = 0; i < fileList.length; i++) {  
            
            // if (i==1 )   names =  decodeURI(fileList[i].name);
            names.push( decodeURI(fileList[i].name.match(/(.*)\.[^\.]+$/)[1]));
          }
          // return logInfo(names)
          // alert(names);
          return names;
          
        }
        else alert('You must select a folder with files');
      }
      
      
      function structure(){
        var doc =  app.activeDocument;
        var groupLayerNamesArr = main() /// This will return an array of the names of the files

        for (var i = 0; i < groupLayerNamesArr.length; i++) {
          
          var layerSetRef = doc.layerSets.add();
          layerSetRef.name = groupLayerNamesArr[i];
          
          colorCode();

        }
}