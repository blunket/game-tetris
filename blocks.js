
var blockSize = 30;

var Block = function(type, spaces, color) {
    this.type = type,
    this.spaces = spaces, //array of occupied spaces as 16 bit integers
    this.color = color,
    this.state = 0,       //rotation. (position in spaces array)
    this.col = 5,
    this.row = 0
}

var colors = ["white", "purple", "cyan", "yellow", "blue", "orange", "green", "red"];

var t_block = function() {
    states = [0x0E40, 0x4C40, 0x4E00, 0x4640];
    color = 1;
    return new Block ("t", states, color);
}

var i_block = function() {
    states = [0x0F00, 0x2222, 0x00F0, 0x4444];
    color = 2;
    return new Block ("i", states, color);
}

var o_block = function() {
    states = [0xCC00, 0xCC00, 0xCC00, 0xCC00];
    color = 3;
    return new Block ("o", states, color);
}

var j_block = function() {
    states = [0x44C0, 0x8E00, 0x6440, 0x0E20];
    color = 4;
    return new Block ("j", states, color);
}

var l_block = function() {
    states = [0x4460, 0x0E80, 0xC440, 0x2E00];
    color = 5;
    return new Block ("l", states, color);
}

var s_block = function() {
    states = [0x06C0, 0x8C40, 0x6C00, 0x4620];
    color = 6;
    return new Block ("s", states, color);
}

var z_block = function() {
    states = [0x0C60, 0x4C80, 0xC600, 0x2640];
    color = 7;
    return new Block ("z", states, color);
}

var grid = new Array(); //create empty grid
for (a = 0; a < 20; a++) {
    grid.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
}
