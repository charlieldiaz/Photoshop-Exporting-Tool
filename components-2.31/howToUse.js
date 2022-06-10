function howToUse(url) {

    // var url = 'https://community.adobe.com/t5/photoshop-ecosystem-discussions/open-url-in-browser-via-photoshop/m-p/7817309#M279764'

    // var fname = "shortcut.url";
  
    // var shortcut = new File(Folder.temp + '/' + fname);
  
    // shortcut.open('w');
  
    // shortcut.writeln('[InternetShortcut]');
  
    // shortcut.writeln('URL=' + url);
  
    // shortcut.writeln();
  
    // shortcut.close();
  
    // shortcut.execute();
  
    // shortcut.remove();

    try{

        var URL = new File(Folder.temp + "/HowToUse.html");
     
        URL.open("w");
     
        URL.writeln('<html><HEAD><meta HTTP-EQUIV="REFRESH" content="0; url=https://github.com/charlieldiaz/PS-Exporting-Tool/blob/master/README.md"></HEAD></HTML>');
     
        URL.close();
     
        URL.execute();   // The temp HTML file  created
     
     }catch(e){
     
     alert("Error, Can Not Open.");
     
     };
  
  };