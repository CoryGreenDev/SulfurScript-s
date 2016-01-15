//Created by Cory Green @ 9:25 AM on 1/15/16 or January 15th 2016.

//v0.2

//Not free by any means, email me @ corygreen5858@gmail.com for usage.

//If found stolen, you will be brought into the court of law.

//You have been warned.

#pragma strict

private var PlayerGUI : playerGUI;

var tent : int = 0;
var raft : int = 0;

var hPfor1 : int = 0;

var showGUI : boolean = false;

//Start checksum for Varaibles to make sure that you can not go under 0 or above 10

function Update () {
  if(tent <= 0){
  tent == 0;
  }
  
  if(raft <= 0){
  raft == 0;
  }
  
  if(hPfor1 <= 0){
  hPfor1 == 0;
  }
  
  if(tent >= 10){
    tent == 10;
  }
  
  if(raft >= 5){
    raft == 5;
  }
  
  if(hPfor1 >= 10) {
    hPfor1 == 10;
  }
  
  if(showGUI == true){
    
  }
  
  
  //GUI Show if key 'B' is pressed.
  
  //NOTE! : Numbers are subjected to changed when used in the Unity Enviroment. Change Numbers in script, too lazy to make var's :P
  if(Input.GetKeyDown("b") && hPfor1 == 1 || raft == 1 || tent == 1)
    {
      //GUI = True
      
      showGUI == true;
      
      //Start GUI.Group
        GUI.StartGroup()
          GUI.Box(Rect(Screen.width / 2 - 150, Screen.height / 2 - 150, 200, 100), "Crafing Menu");
        //Tent Crafting
        GUI.Label(Rect (30, 30, 25, 200, 150), "Craft A Tent?");
          GUI.Button (Rect (35, 30, 25, 200, 150), "Craft"); 
            if(Button.Clicked(1) && tent >= 1){
              Instantiate(("tent"),Mouse.Cursor.x, Mouse.Cursor.y - 150, 500, 700);
          Stop();
          
        //Raft Crafting
        GUI.Label(Rect (30, 30, 25, 200, 150), "Craft A Raft?");
          GUI.Button (Rect (35, 30, 25, 200, 150), "Craft"); 
            if(Button.Clicked(1) && raft >= 1){
              Instantiate(("raft"),Mouse.Cursor.x, Mouse.Cursor.y - 150, 200, 150);
          Stop();
          
        //House Crafting
        GUI.Label(Rect (30, 30, 25, 200, 150), "Build a House?");
          GUI.Button (Rect (35, 30, 25, 200, 150), "Build"); 
            if(Button.Clicked(1) && hPfor1 >= 3){
              Instantiate(("mHouse1"),Mouse.Cursor.x, Mouse.Cursor.y - 150, 1600, 2000);
          Stop();
            } 
    }
  }
}
function Stop(){
  GUI.EndGroup();
  Debug.Log(console("successful craft"));
} else {
    Debug.Log("crafted but exception in Ending.");
  }
}
