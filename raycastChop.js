#pragma strict

private var hit : raycastHit;

private var rayLength : int = 10;

function Update () {
  if(Input.GetMouseDown(1)) {
    if(raycast.hit.on-collider("Tree")) {
      Wait();
      TreeController();
    }
  }
}


function Wait() {
  yield WaitForSeconds (0.7);
}

function TreeController() {

  var treeController : TreeContoller;
    treeController.TreeChop;
    //v0.1
}
