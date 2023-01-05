const cube = document.querySelector('.cube');

function rotateCube(event) {
  if (event.key === 'ArrowUp') {
    cube.style.transform = 'rotateY(-5deg) rotateX(-85deg) rotateZ(10deg)';
    document.getElementById("bottom").style.boxShadow = "0px 0px 0px 0px black";
  } else if (event.key === 'ArrowDown') {
    cube.style.transform = 'rotateY(-10deg) rotateX(85deg) rotateZ(5deg)';
    document.getElementById("bottom").style.boxShadow = "0px 0px 0px 0px black";
  } else if (event.key === 'ArrowRight') {
    cube.style.transform = 'rotateY(-85deg) rotateX(-5deg) rotateZ(2deg)';
    document.getElementById("bottom").style.boxShadow = "0px 0px 0px 0px black";
  } else if (event.key === 'ArrowLeft') {
    cube.style.transform = 'rotateY(85deg) rotateX(10deg) rotateZ(2deg)';
    document.getElementById("bottom").style.boxShadow = "0px 0px 0px 0px black";
  } else if (event.key === 'm') {
    cube.style.transform = 'rotateY(5deg) rotateZ(-1deg) rotateX(-1deg)';
    document.getElementById("bottom").style.boxShadow = "0px 0px 0px 0px black";
  }
}
document.addEventListener('keydown', rotateCube);
function hideWindow() {
  var x = document.getElementById("Text");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
  var x = document.getElementById("ShowButton");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}