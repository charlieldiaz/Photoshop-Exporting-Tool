# Photoshop Exporting Tool
This is a tool to batch export Layers of photoshop files to PNG and JPG formats. 

# What is it ? 
This is a tool to batch export photoshop layers. It works with Groups and Artboards. The tool is script based. 
As new versions are created I will upload them and update the documentation. 

# Current Version: v2.32 Stable-MacOSX

# When to use: 
There are several photoshop files this tool can help you export layers. Depending on the format (Artboard or group based) different functions can help. Keep on mind that if a file is not correctly set the tool will not export the assets to the correct size. This tool is the most useful when you need assets that will be repeated across different sizes and they will have all the same names.

Folder based file layer structure:
<img width="215" alt="image" src="https://user-images.githubusercontent.com/33541110/158155659-0aa8c6b8-0fdf-4b93-89c5-7a2e9f4c2082.png">

Artboard based file layer structure:
<img width="178" alt="image" src="https://user-images.githubusercontent.com/33541110/158156186-6ea059e6-5b3c-49f0-91e6-cfabf857727b.png">



# Exported Formats:
PNG: The tool will export assets to 24-PNG (Save for web) with a compression of 9 (highest native compression available in photoshop). This can be compressed further using Kraken (Most of the image support down to 30% quality compression looking good) or TinyPNG. 

JPG: The tool will export assets to JPG (Save for web) with a medium quality. This can be compressed further using Kraken.

Since this tool is meant to batch export assets; the most efficient way to reduce the file size is to change the PS document resolution in the "resizing section".

# How to install:
1. Place the file in the aplications folder -> photoshop -> presets -> scripts
2. Restart photoshop
3. Go to Edit -> edit key-shortcuts -> file -> scripts -> select the files and add a short cut to call the tool. 

# How to use:

#This tool creates file duplicates beside the actual files. They are blank copies so you can recognize the real assets.

The first step is to decide if the naming for the future files. If there is already an image folder for the project it's a good idea to copy that folder path. 

1. Click on Create Structure : This will open a finder window that will allow you to pick a folder that contains the names of the images you want to use when exporting. This will create yellow folders with the file names that will be place on top of the layers. Click cancel or ESC when you have created the structure.

2. If you dont have an image folder for the project you may use a different project image folder or create new folders with your name choice and change their colour label to Yellow. 

Note: Sometimes the tool with create an extra Yellow folder with the name "Group". You may delete this folder as this will just help you when creating several structures in a row to visualize structures from each other. 
<img width="189" alt="image" src="https://user-images.githubusercontent.com/33541110/158158071-cc20623b-b6e2-4d76-b63d-85815dc980b9.png">

# Group
3-A. If the type of PS file you are working with is folder based. Just place the yellow folders on top of the structure and populate the the folders with the assets you wish to export. 

-Make sure that the assets inside the Yellow folders are not folders. 
-Make sure that the folder structure is the only yellow labeled folder (you can have yellow labeled assets inside).
-Make sure that the there visibility of layers and Yellow Groups that you want to export when working with folder based files.
-Make sure that no locked layer is below (It will export visible).
-You can place SmartObjects inside the yellow folders 
<img width="210" alt="image" src="https://user-images.githubusercontent.com/33541110/158158760-8e2e0956-6824-4cd7-bbd4-6219fa6fd711.png">

IMPORTANT: unselect the layers at this point (The tool knows to only select the yellow folders). (There will be a future version that will allow you to select specific folder export). You can press with the tool in the move tool (V) in the canvas background or at the empty area of the layers menu.

4-A. Call the tool again and select if you want to export PNG and Jpeg or just PNG or just JPG.

5-A. Be Patient! depending on the size of the file it will take some time. Go to finder's desktop (00_Exported_images) and you will see the following folder with its division. 
![image](https://user-images.githubusercontent.com/33541110/158159396-e787e84a-083d-4b7d-8b05-040d67870ccd.png)

Note: If you export multiple times the tool with automatically rename the new files based on their layer ID. It's better to delete the old files and create new ones to avoid confusion. You can export up to 2 sets of images at the time. (2 groups of images with the same name). 


# Artboard
3-B. If the type of PS file you are working with is Artboard based. Just place the folders on inside the artboard of the structure and populate to the yellow folders with the assets you wish to export. 

-Make sure that the assets inside the artboards that you dont want to export are inside a folder or delete them. 
-Make sure that the assets inside the Yellow folders are not folders. 
-Make sure that the folder structure is the only yellow labeled folder (you can have yellow labeled assets inside).
-Make sure that the there visibility of layers and Yellow Groups that you want to export when working with folder based files.
-Make sure that no locked layer is below (It will export visible).
-You can place SmartObjects inside the yellow folders 
-Artboards can have a different colour as far as they are not Yellow. (Even the ones that contain the yellow folder shouldnt be Yellow).
<img width="244" alt="image" src="https://user-images.githubusercontent.com/33541110/158161417-ea3e845a-33b1-49fe-8924-4d0aa71a5f75.png">


IMPORTANT: 
-You can only export 2 Set of images at the time for Artboard files. (I recommend you delete the artboards you dont use and undo this right afterwards. 
-Unselect the layers at this point (The tool knows to only select the yellow folders). (There will be a future version that will allow you to select specific folder export). You can press with the tool in the move tool (V) in the canvas background or at the empty area of the layers menu. 
-Make artboards you will not use are invisible. Otherwise you will increase the time of the export and you have many unecesary duplicatess. 

4-B. Call the tool again and select if you want to export PNG and Jpeg or just PNG or just JPG.

5-B. Be Patient! depending on the size of the file it will take some time. Go to finder's desktop (00_Exported_images) and you will see the following folder with its artboard name division. 
![image](https://user-images.githubusercontent.com/33541110/158162648-13a5e140-084d-4d0f-ba7f-0dbcacd425d5.png)

5-B. Be Patient! depending on the size of the file it will take some time. Go to finder's desktop (00_Exported_images) and you will see the following folder with its artboard name division. 

Note: If you export multiple times the tool with automatically rename the new files based on their layer ID. It's better to delete the old files and create new ones to avoid confusion. You can export up to 2 sets of images at the time. (2 groups of images with the same name). 

# Extra
# Resizing Section
This will resize all the document by 50%, 60%, 70%.. All the way to double (retina) of the original size. 

<img width="392" alt="image" src="https://user-images.githubusercontent.com/33541110/158163495-026217c8-8b52-4cba-ad36-e026576ea9a3.png">

# Prep File
This will make Artboard based files have transparency on their properties. (You should click on it at the beginning of work).

<img width="393" alt="image" src="https://user-images.githubusercontent.com/33541110/158163854-58dff7cc-9a7d-40f7-bff9-96ae3eaf452a.png">


# Export Only section
This is an experimental function. If you uncheck this section it will allow to export mutiple highlighted assets with the name of the asset. There will be future updates on it. 

<img width="172" alt="image" src="https://user-images.githubusercontent.com/33541110/158164196-08a8d4eb-1b16-4ecb-a670-5e63ab6e7212.png">


