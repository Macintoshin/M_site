const cube = document.querySelector('.cube');

function rotateCube(event) {
  if (event.key === 'ArrowUp') {
    cube.style.transform = 'rotateX(-90deg)';
    document.getElementById("bottom").style.boxShadow = "0px 0px 0px 0px black";
  } else if (event.key === 'ArrowDown') {
    cube.style.transform = 'rotateX(90deg)';
    document.getElementById("bottom").style.boxShadow = "0px 0px 0px 0px black";
  } else if (event.key === 'ArrowRight') {
    cube.style.transform = 'rotateY(-90deg)';
    document.getElementById("bottom").style.boxShadow = "0px 0px 0px 0px black";
  } else if (event.key === 'ArrowLeft') {
    cube.style.transform = 'rotateY(90deg)';
    document.getElementById("bottom").style.boxShadow = "0px 0px 0px 0px black";
  } else if (event.key === '/') {
    cube.style.transform = 'rotateY(0deg)';
    document.getElementById("bottom").style.boxShadow = "0px 0px 0px 0px black";
  } else if (event.key === 'e') {
    cube.style.transform = 'rotateY(180deg)';
    document.getElementById("bottom").style.boxShadow = "0px 0px 0px 0px black";
  } else if (event.key === 'r') {
    cube.style.transform = 'rotateY(45deg) rotateZ(-10deg) rotateX(-10deg)';
    document.getElementById("bottom").style.boxShadow = "0px 0px 100px 10px black";
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