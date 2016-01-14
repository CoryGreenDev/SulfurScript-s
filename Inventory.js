#pragma strict

var Sticks : int = 0;
var Planks : int = 0;
var Stone : int = 0;

public var showGUI : boolean = false;

public var guiSkin : GUISkin;

var minVal : int = 0;

function Start(){
  guiSkin = gameObject.Find("FirstPersonCharacter").GetComponent(GUISkin);
}

function Update (){
  if(Sticks <= 0) {
      Sticks == 0;
    }
    
    if(Planks <= 0) {
      Planks == 0;
    }
    
    if(Stone <= 0) {
      Stone == 0;
    }
    if(Input.GetKeyDown("e")){
      showGUI = true;
      if(showGUI == true && Input.GetKeyDown("e")){
        showGUI == false;
      }
    }
}

function OnGUI(){
  if(showGUI == true){
  GUI.BeginGroup()
    //Inventory BG (Either use GUIskin or create Custom, Use Assets-> Create-> GUISkin)
    GUI.Box(Rect(Screen.width / 2 - 150, Screen.height / 2 - 150, 100, 20), "Your Status");
      GUI.Button(Rect(100, 250, 100, 20, 20));
    
    //Stick Display
      GUI.Label(Rect(100, 190, 20, 20), "Sticks");
        //GUI.Display(Sticks); Depreciated. 
      
    //Plank Display
        GUI.Label(Rect(120, 190, 20, 20), "Planks");
        //GUI.Display(Planks); Depreciated.
    //Stone Display
        GUI.Label(Rect(140, 190, 20, 20), "Stone");
        //GUI.Display(Stone); Depreciated.
  }
  
  
}

