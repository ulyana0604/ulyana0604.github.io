

function play5x5() { 
	document.getElementById('box2').style.display = "none";
	document.getElementById('box1').style.display = "block";
	document.getElementById('box1').innerHTML="";
	document.getElementById('box2').innerHTML="";
	var fiveXfive = {
  Move: {up: -5, left: -1, down: 5, right: 1},
  order: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24].sort(function() { return Math.random()-.6; }).concat(0),
  hole: 24,
  isCompleted: function() { return !this.order.some(function(item, i) { return item > 0 && item-1 !== i; }); },
  go: function(move) {
    var index = this.hole + move;
    if (!this.order[index]) return false;
    if (move == fiveXfive.Move.left || move == fiveXfive.Move.right)
      if (Math.floor(this.hole/5) !== Math.floor(index/5)) return false;
    this.swap(index, this.hole);
    this.hole = index;
    return true; },
  swap: function(i1, i2) { var t = this.order[i1]; this.order[i1] = this.order[i2]; this.order[i2] = t; },
  solvable: function(a) {
    for (var kDisorder = 0, i = 1, len = a.length-1; i < len; i++)
      for (var j = i-1; j >= 0; j--) if (a[j] > a[i]) kDisorder++;
    return !(kDisorder % 2); } };
if (!fiveXfive.solvable(fiveXfive.order)) fiveXfive.swap(0, 1);
var box = document.getElementById('box1');
for (var i = 0; i < 25; i++) box.appendChild(document.createElement('div'));
window.addEventListener('keydown', function(e) {
  if (fiveXfive.go(fiveXfive.Move[{39: 'left', 37: 'right', 40: 'up', 38: 'down'}[e.keyCode]])) {
    draw(); if (fiveXfive.isCompleted()) {
      window.removeEventListener('keydown', arguments.callee); } }});
draw();
function draw() {
  for (var i = 0, tile; tile = box.childNodes[i], i < 25; i++) {
    tile.textContent = fiveXfive.order[i]; tile.style.visibility = fiveXfive.order[i]? 'visible' : 'hidden'; } };
	
				   }



function play6x6() { 
	document.getElementById('box1').style.display = "none";
	document.getElementById('box2').style.display = "block";
	document.getElementById('box2').innerHTML="";
	document.getElementById('box1').innerHTML="";
	var sixXsix = {
  Move: {up: -6, left: -1, down: 6, right: 1},
  order: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35].sort(function() { return Math.random()-.5; }).concat(0),
  hole: 35,
  isCompleted: function() { return !this.order.some(function(item, i) { return item > 0 && item-1 !== i; }); },
  go: function(move) {
    var index = this.hole + move;
    if (!this.order[index]) return false;
    if (move == sixXsix.Move.left || move == sixXsix.Move.right)
      if (Math.floor(this.hole/6) !== Math.floor(index/6)) return false;
    this.swap(index, this.hole);
    this.hole = index;
    return true; },
  swap: function(i1, i2) { var t = this.order[i1]; this.order[i1] = this.order[i2]; this.order[i2] = t; },
  solvable: function(a) {
    for (var kDisorder = 0, i = 1, len = a.length-1; i < len; i++)
      for (var j = i-1; j >= 0; j--) if (a[j] > a[i]) kDisorder++;
    return !(kDisorder % 2); } };
if (!sixXsix.solvable(sixXsix.order)) sixXsix.swap(0, 1);
var bbox = document.getElementById('box2');
for (var i = 0; i < 36; i++) bbox.appendChild(document.createElement('div'));
window.addEventListener('keydown', function(e) {
  if (sixXsix.go(sixXsix.Move[{39: 'left', 37: 'right', 40: 'up', 38: 'down'}[e.keyCode]])) {
    draw(); if (sixXsix.isCompleted()) {
      window.removeEventListener('keydown', arguments.callee); } }});
draw();
function draw() {
  for (var i = 0, tile; tile = bbox.childNodes[i], i < 36; i++) {
    tile.textContent = sixXsix.order[i]; tile.style.visibility = sixXsix.order[i]? 'visible' : 'hidden'; } };
	
				   }

function roulsDiv() {
   document.getElementById('roulsText').style.display= "block";
}

function hide() {
   document.getElementById('roulsText').style.display= "none";
}


