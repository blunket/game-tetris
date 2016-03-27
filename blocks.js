
var blockSize = 30;

var Block = function(type, spaces, color) {
    this.type = type,
    this.spaces = spaces, //array of occupied spaces as 16 bit integers
    this.color = color,
    this.state = 0,       //rotation (position in spaces array)
    this.col = 3,
    this.row = -1
}

var colors = ["white", "purple", "cyan", "yellow", "blue", "orange", "green", "red"];

var t_block = function() {
    states = [0x0720, 0x2320, 0x2700, 0x2620];
    color = 1;
    return new Block ("t", states, color);
}

var i_block = function() {
    states = [0x0F00, 0x2222];
    color = 2;
    return new Block ("i", states, color);
}

var o_block = function() {
    states = [0x0660];
    color = 3;
    return new Block ("o", states, color);
}

var j_block = function() {
    states = [0x0710, 0x3220, 0x4700, 0x2260];
    color = 4;
    return new Block ("j", states, color);
}

var l_block = function() {
    states = [0x0740, 0x2230, 0x1700, 0x6220];
    color = 5;
    return new Block ("l", states, color);
}

var s_block = function() {
    states = [0x0360, 0x2310];
    color = 6;
    return new Block ("s", states, color);
}

var z_block = function() {
    states = [0x0630, 0x1320];
    color = 7;
    return new Block ("z", states, color);
}

var grid = new Array(); //create empty grid
for (a = 0; a < 20; a++) {
    grid.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
}

for (a = 0; a < 4; a++) {
    grid.push([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]);  //add a few rows beneath for collision detection
}
