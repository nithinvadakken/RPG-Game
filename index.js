// map and drawing
var ctx = null;
var tileW = 40, tileH = 40;
var mapW = 70, mapH = 81;


// width for first map=70; height for second map=81
var gameMap0 = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 4, 4, 4, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 4, 4, 4, 2, 2, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0,
    0, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 2, 4, 4, 4, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
    0, 1, 1, 1, 1, 3, 6, 6, 6, 6, 3, 0, 1, 1, 1, 2, 4, 4, 4, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0,
    0, 1, 1, 1, 1, 3, 6, 6, 6, 6, 3, 1, 1, 1, 1, 2, 4, 4, 4, 2, 2, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
    0, 1, 1, 1, 1, 3, 6, 6, 6, 6, 3, 0, 1, 0, 1, 2, 4, 4, 4, 2, 2, 1, 1, 1, 1, 3, 6, 6, 6, 6, 6, 6, 3, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0,
    0, 1, 1, 1, 1, 3, 6, 6, 6, 6, 3, 1, 1, 2, 2, 2, 4, 4, 4, 2, 2, 1, 1, 1, 1, 3, 6, 6, 6, 6, 6, 6, 3, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 2, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0,
    0, 1, 1, 1, 1, 3, 6, 6, 6, 6, 3, 1, 2, 2, 4, 2, 4, 4, 4, 2, 2, 1, 1, 1, 1, 3, 6, 6, 6, 6, 6, 6, 3, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0,
    0, 0, 0, 1, 1, 3, 3, 6, 3, 3, 3, 2, 2, 2, 4, 4, 4, 4, 4, 2, 2, 1, 1, 1, 1, 3, 6, 6, 6, 14, 6, 6, 3, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0,
    0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 4, 4, 4, 4, 4, 2, 2, 1, 1, 1, 1, 3, 6, 6, 6, 6, 6, 6, 3, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 4, 4, 4, 4, 2, 2, 2, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 4, 4, 4, 4, 4, 4, 2, 2, 1, 1, 1, 1, 3, 6, 6, 6, 6, 6, 6, 3, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 4, 4, 4, 4, 2, 2, 2, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0,
    0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 2, 2, 4, 4, 4, 4, 2, 2, 1, 2, 1, 1, 0, 0, 3, 6, 6, 6, 6, 6, 6, 3, 1, 7, 1, 1, 1, 1, 1, 1, 2, 2, 2, 4, 4, 4, 4, 4, 4, 2, 2, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 4, 4, 4, 4, 2, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 6, 3, 3, 3, 1, 7, 1, 1, 1, 1, 1, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0,
    0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 2, 2, 4, 4, 4, 4, 2, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 4, 4, 4, 4, 2, 1, 1, 1, 1, 1, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 1, 1, 1, 1, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0,
    0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 2, 2, 2, 4, 4, 4, 4, 2, 2, 1, 1, 0, 0, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0,
    0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 2, 2, 2, 4, 4, 4, 4, 2, 2, 1, 1, 1, 0, 7, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 7, 1, 1, 1, 1, 1, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 4, 4, 4, 4, 2, 2, 1, 1, 1, 1, 7, 1, 3, 6, 6, 6, 6, 6, 6, 3, 1, 7, 1, 1, 1, 1, 1, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0,
    0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 2, 2, 2, 4, 4, 4, 4, 2, 2, 0, 1, 0, 1, 7, 1, 3, 6, 6, 6, 6, 6, 6, 3, 1, 7, 1, 0, 1, 1, 0, 2, 2, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0,
    0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 2, 5, 5, 5, 5, 5, 5, 5, 5, 2, 1, 0, 1, 7, 1, 3, 6, 6, 6, 6, 6, 6, 3, 1, 7, 1, 0, 1, 1, 0, 2, 2, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 5, 5, 5, 5, 5, 5, 5, 5, 2, 1, 1, 1, 7, 1, 3, 6, 6, 6, 10, 6, 6, 3, 1, 7, 1, 1, 1, 1, 1, 2, 2, 4, 4, 4, 4, 4, 4, 2, 2, 2, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0,
    0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 2, 5, 5, 5, 5, 5, 5, 5, 5, 2, 1, 1, 1, 7, 1, 3, 6, 6, 6, 6, 6, 6, 3, 1, 7, 1, 1, 1, 0, 0, 1, 2, 2, 4, 4, 4, 4, 4, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 4, 4, 4, 4, 4, 2, 2, 1, 1, 1, 7, 1, 3, 6, 6, 6, 6, 6, 6, 3, 1, 7, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0,
    0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 4, 4, 4, 4, 2, 2, 2, 1, 1, 1, 7, 1, 3, 6, 6, 6, 6, 6, 6, 3, 1, 7, 1, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 4, 4, 4, 2, 2, 2, 2, 1, 1, 1, 7, 1, 3, 3, 3, 3, 6, 3, 3, 3, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
    0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 4, 4, 4, 2, 2, 2, 2, 1, 1, 1, 7, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 7, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0,
    0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 4, 4, 4, 2, 2, 2, 2, 1, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 2, 2, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0,
    0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 2, 2, 2, 4, 4, 4, 2, 2, 1, 1, 1, 1, 1, 7, 1, 3, 3, 3, 6, 3, 3, 3, 3, 1, 7, 1, 3, 3, 3, 6, 3, 3, 3, 3, 1, 7, 0, 3, 3, 3, 6, 3, 3, 3, 3, 1, 7, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
    0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 2, 2, 2, 4, 4, 4, 2, 2, 1, 1, 1, 1, 1, 7, 1, 3, 6, 6, 6, 6, 6, 6, 3, 1, 7, 1, 3, 6, 6, 6, 6, 6, 6, 3, 1, 7, 0, 3, 6, 6, 6, 6, 6, 6, 3, 1, 7, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
    0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 2, 2, 4, 4, 4, 2, 2, 1, 1, 0, 1, 1, 7, 1, 3, 6, 6, 6, 6, 6, 6, 3, 1, 7, 1, 3, 6, 6, 6, 6, 6, 6, 3, 1, 7, 0, 3, 6, 6, 6, 6, 6, 6, 3, 1, 7, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0,
    0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 2, 2, 4, 4, 4, 2, 2, 1, 1, 0, 1, 1, 7, 0, 3, 6, 6, 6, 6, 6, 6, 3, 1, 7, 1, 3, 6, 6, 6, 6, 6, 6, 3, 1, 7, 1, 3, 6, 6, 6, 6, 6, 6, 3, 1, 7, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 4, 4, 4, 2, 2, 1, 1, 1, 1, 1, 7, 1, 3, 6, 6, 6, 9, 6, 6, 3, 1, 7, 1, 3, 6, 6, 6, 15, 6, 6, 3, 1, 7, 1, 3, 6, 6, 6, 13, 6, 6, 3, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0,
    0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 2, 2, 4, 4, 4, 2, 2, 0, 1, 1, 0, 0, 7, 1, 3, 6, 6, 6, 6, 6, 6, 3, 1, 7, 1, 3, 6, 6, 6, 6, 6, 6, 3, 1, 7, 1, 3, 6, 6, 6, 6, 6, 6, 3, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 4, 4, 4, 2, 2, 2, 1, 1, 1, 1, 7, 1, 3, 6, 6, 6, 6, 6, 6, 3, 1, 7, 1, 3, 6, 6, 6, 6, 6, 6, 3, 1, 7, 1, 3, 6, 6, 6, 6, 6, 6, 3, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0,
    0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 2, 2, 4, 4, 4, 2, 2, 2, 1, 1, 0, 0, 7, 0, 3, 6, 6, 6, 6, 6, 6, 3, 1, 7, 1, 3, 6, 6, 6, 6, 6, 6, 3, 1, 7, 1, 3, 6, 6, 6, 6, 6, 6, 3, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0,
    0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 4, 4, 4, 2, 2, 2, 1, 0, 1, 0, 7, 0, 3, 3, 3, 3, 3, 3, 3, 3, 1, 7, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 7, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 2, 4, 4, 4, 4, 2, 2, 2, 1, 0, 1, 1, 7, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 7, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 7, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 4, 4, 4, 4, 2, 2, 2, 1, 1, 1, 1, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 4, 4, 4, 4, 2, 2, 2, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 4, 4, 4, 4, 2, 2, 2, 1, 1, 1, 1, 7, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 7, 1, 3, 3, 3, 3, 3, 3, 3, 3, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 4, 4, 4, 4, 2, 2, 2, 1, 1, 1, 1, 7, 1, 3, 6, 6, 6, 6, 6, 6, 3, 1, 7, 1, 3, 6, 6, 6, 6, 6, 6, 3, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 4, 4, 4, 4, 4, 2, 2, 2, 1, 1, 1, 1, 7, 1, 3, 6, 6, 6, 6, 6, 6, 3, 1, 7, 1, 3, 6, 6, 6, 6, 6, 6, 3, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 4, 4, 4, 4, 4, 2, 2, 2, 1, 1, 1, 1, 7, 1, 3, 6, 6, 6, 6, 6, 6, 3, 1, 7, 0, 3, 6, 6, 6, 6, 6, 6, 3, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 4, 4, 4, 4, 4, 2, 2, 2, 1, 1, 1, 1, 7, 7, 6, 6, 6, 6, 11, 6, 6, 3, 1, 7, 0, 3, 6, 6, 6, 12, 6, 6, 3, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 4, 4, 4, 4, 4, 2, 2, 2, 1, 1, 1, 1, 7, 1, 3, 6, 6, 6, 6, 6, 6, 3, 1, 7, 0, 3, 6, 6, 6, 6, 6, 6, 3, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 4, 4, 4, 4, 4, 2, 2, 1, 1, 1, 1, 1, 7, 1, 3, 6, 6, 6, 6, 6, 6, 3, 1, 7, 1, 3, 6, 6, 6, 6, 6, 6, 3, 0, 7, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 4, 4, 4, 4, 4, 2, 2, 1, 1, 1, 1, 1, 7, 1, 3, 6, 6, 6, 6, 6, 6, 3, 1, 7, 1, 3, 6, 6, 6, 6, 6, 6, 3, 1, 7, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 4, 4, 4, 4, 4, 2, 2, 1, 1, 1, 1, 1, 7, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 7, 1, 3, 3, 3, 3, 6, 3, 3, 3, 1, 7, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 4, 4, 4, 4, 4, 2, 2, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 1, 1, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1,
    1, 1, 1, 1, 1, 1, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 3, 1, 1,
    1, 1, 1, 1, 1, 1, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 3, 1, 1,
    1, 1, 1, 1, 1, 1, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 3, 1, 1,
    1, 1, 1, 1, 1, 1, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 3, 1, 1,
    1, 1, 1, 1, 1, 1, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 3, 1, 1,
    1, 1, 1, 1, 1, 1, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 3, 1, 1,
    1, 1, 1, 1, 1, 1, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 3, 1, 1,
    1, 1, 1, 1, 1, 1, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 3, 1, 1,
    1, 1, 1, 1, 1, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 3, 1, 1,
    1, 1, 1, 1, 1, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 8, 6, 6, 6, 6, 6, 6, 6, 6, 3, 1, 1,
    1, 1, 1, 1, 1, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 3, 1, 1,
    1, 1, 1, 1, 1, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 3, 1, 1,
    1, 1, 1, 1, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 3, 1, 1,
    1, 1, 1, 1, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 3, 1, 1,
    1, 1, 1, 1, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 3, 1, 1,
    1, 1, 1, 1, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 3, 1, 1,
    1, 1, 1, 1, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 3, 1, 1,
    1, 1, 1, 1, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 3, 1, 1,
    1, 1, 1, 1, 1, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 3, 1, 1,
    1, 1, 1, 1, 1, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1,
    1, 1, 1, 1, 1, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
];
var gameLocation = gameMap0;


//images
var characterImg = new Image();
var tileImage = new Image();
characterImg.src = 'images/characterImages/characterFront.png';


var currentSecond = 0, frameCount = 0, framesLastSecond = 0, lastFrameTime = 0;
var attackDisplayText = "";


var keysDown = {
    37: false,
    38: false,
    39: false,
    40: false
};


var player = new Character();
var floorTypes = {
    solid: 0,
    path: 1,
    water: 2,
    ground: 3,
    changeMap: 4
};


var tileTypes = {
    3: {color: "#685b48", floor:floorTypes.solid, image:""},
    1: {color: "#4f944d", floor:floorTypes.ground, image:"", speed:150},
    2: {color: "#dab275", floor:floorTypes.ground, image:"", speed:150},
    0: {color: "#286625", floor:floorTypes.solid, image:""},
    4: {color: "#5e95d9", floor:floorTypes.water, image:""},
    5: {color: "#4a1a08", floor:floorTypes.path, image:"", speed:100},
    6: {color: "#c1c1c1", floor:floorTypes.path, image:"", speed:100},
    7: {color: "#656777", floor:floorTypes.path, image:"", speed:100},
    8: {color: "#ff002b", floor:floorTypes.path, image:"", speed:100},
    9: {color: "#0018ff", floor:floorTypes.path, image:"", speed:100},
    10: {color: "#1fff00", floor:floorTypes.path, image:"", speed:100},
    11: {color: "#feff00", floor:floorTypes.path, image:"", speed:100},
    12: {color: "#ff7200", floor:floorTypes.path, image:"", speed:100},
    13: {color: "#000000", floor:floorTypes.path, image:"", speed:100},
    14: {color: "#7300db", floor:floorTypes.path, image:"", speed:100},
    15: {color: "#ffffff", floor:floorTypes.path, image:"", speed:100}
};

var viewport = {
    screen : [0, 0],
    startTile : [0,0],
    endTile : [0,0],
    offset : [0,0],
    update : function(px, py) {
        this.offset[0] = Math.floor((this.screen[0]/2) - px);
        this.offset[1] = Math.floor((this.screen[1]/2) - py);

        var tile = [
            Math.floor(px/tileW),
            Math.floor(py/tileH)
    ];

    this.startTile[0] = tile[0] - 1 - Math.ceil((this.screen[0]/2) / tileW);
    this.startTile[1] = tile[1] - 1 - Math.ceil((this.screen[1]/2) / tileH);

    if (this.startTile[0] < 0) {this.startTile[0] = 0;}
    if (this.startTile[1] < 0) {this.startTile[1] = 0;}

    this.endTile[0] = tile[0] + 1 + Math.ceil((this.screen[0]/2) / tileW);
    this.endTile[1] = tile[1] + 1 + Math.ceil((this.screen[1]/2) / tileH);

    if (this.endTile[0] >= mapW) {this.endTile[0] = mapW - 1;}
    if (this.endTile[1] >= mapH) {this.endTile[1] = mapH - 1;}
    }
};


var directionalSprites = {
    front:"images/characterImages/characterFront.png",
    side:"images/characterImages/characterSide.png",
    back:"images/characterImages/characterBack.png"
};


function Character()
{
    this.tileFrom = [1, 1];
    this.tileTo = [1, 1];
    this.timeMoved = 0;
    this.dimensions = [30, 30];
    this.position = [45, 45];
    this.delayMove = 100;
}


Character.prototype.placeAt = function(x, y)
{
    this.tileFrom = [x, y];
    this.tileTo = [x, y];
    this.position = [((tileW*x) + ((tileW-this.dimensions[0])/2)), ((tileH*y) + ((tileH - this.dimensions[1])/2))];
};


Character.prototype.processMovement = function(t)
{
    if(this.tileFrom[0]===this.tileTo[0] && this.tileFrom[1]===this.tileTo[1])
    {
        return false;
    }
    if((t-this.timeMoved)>=this.delayMove)
    {
        this.placeAt(this.tileTo[0], this.tileTo[1]);
    }
    else
    {
        this.position[0] = (this.tileFrom[0] * tileW) + ((tileW-this.dimensions[0])/2);
        this.position[1] = (this.tileFrom[1] * tileH) + ((tileH-this.dimensions[1])/2);
        if(this.tileTo[0] !== this.tileFrom[0])
        {
            var diff = (tileW / this.delayMove) * (t-this.timeMoved);
            this.position[0]+= (this.tileTo[0]<this.tileFrom[0] ? 0 - diff : diff);
        }
        if(this.tileTo[1] !== this.tileFrom[1])
        {
            var diff = (tileH / this.delayMove) * (t-this.timeMoved);
            this.position[1]+= (this.tileTo[1]<this.tileFrom[1] ? 0 - diff : diff);
        }
        this.position[0] = Math.round(this.position[0]);
        this.position[1] = Math.round(this.position[1]);

    }

    return true;
};

Character.prototype.canMoveTo = function(x, y) {
    if (x<0 || x>=mapW || y<0 || y>=mapH) {return false;}
    if ((tileTypes[gameLocation[toIndex(x, y)]].floor!== floorTypes.path)&&(tileTypes[gameLocation[toIndex(x, y)]].floor!== floorTypes.ground)) {return false;}
    this.delayMove = tileTypes[gameLocation[toIndex(x, y)]].speed;
    return true;
};


Character.prototype.canMoveUp = function() {return this.canMoveTo(this.tileFrom[0], this.tileFrom[1]-1)};
Character.prototype.canMoveDown = function() {return this.canMoveTo(this.tileFrom[0], this.tileFrom[1]+1)};
Character.prototype.canMoveLeft = function() {return this.canMoveTo(this.tileFrom[0]-1, this.tileFrom[1])};
Character.prototype.canMoveRight = function() {return this.canMoveTo(this.tileFrom[0]+1, this.tileFrom[1])};


Character.prototype.moveLeft = function(t) {this.tileTo[0]-=1; this.timeMoved = t; characterImg.src=directionalSprites.side};
Character.prototype.moveRight = function(t) {this.tileTo[0]+=1; this.timeMoved = t; characterImg.src=directionalSprites.side};
Character.prototype.moveUp = function(t) {this.tileTo[1]-=1; this.timeMoved = t; characterImg.src=directionalSprites.back};
Character.prototype.moveDown = function(t) {this.tileTo[1]+=1; this.timeMoved = t; characterImg.src=directionalSprites.front};

function toIndex(x, y)
{
    return((y * mapW) + x);
}


window.onload = function()
{
    ctx = document.getElementById('game').getContext('2d');
    requestAnimationFrame(drawGame);
    ctx.font = "bold 10pt sans-serif";
    window.addEventListener("keydown", function(e) {
        if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = true; }
    });
    window.addEventListener("keyup", function(e) {
        if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = false; }
    });

    viewport.screen = [
        document.getElementById('game').width,
        document.getElementById('game').height
    ]
};


function drawGame()
{
    if (ctx === null) {return 0;}

    var currentFrameTime = Date.now();
    var timeElapsed = currentFrameTime - lastFrameTime;

    var sec = Math.floor(Date.now()/1000);
    if (sec !== currentSecond)
    {
        currentSecond = sec;
        framesLastSecond = frameCount;
        frameCount = 1;
    }
    else {frameCount++}

    if(!player.processMovement(currentFrameTime))
    {
        if(keysDown[38] && player.canMoveUp()) {player.moveUp(currentFrameTime);}
        else if(keysDown[40] && player.canMoveDown()) {player.moveDown(currentFrameTime);}
        else if(keysDown[37] && player.canMoveLeft()) {player.moveLeft(currentFrameTime);}
        else if(keysDown[39] && player.canMoveRight()) {player.moveRight(currentFrameTime);}

    }

    viewport.update(
        player.position[0] + (player.dimensions[0]/2),
        player.position[1] + (player.dimensions[1]/2)
    );

    ctx.fillStyle = "#000000";

    ctx.fillRect(0,0, viewport.screen[0], viewport.screen[1]);

    for (var y = viewport.startTile[1]; y<=viewport.endTile[1]; y++)
    {
        for (var x = viewport.startTile[0]; x<=viewport.endTile[0]; x++)
        {
            if (tileTypes[gameLocation[toIndex(x, y)]].image==="") {
                ctx.fillStyle = tileTypes[gameLocation[toIndex(x, y)]].color;
                ctx.fillRect(viewport.offset[0] + x*tileW, viewport.offset[1] + y*tileH, tileW, tileH);
            }
            else {
                tileImage.src = tileTypes[gameLocation[toIndex(x, y)]].image;
                ctx.drawImage(tileImage, viewport.offset[0] + x*tileW, viewport.offset[1] + y*tileH, tileW, tileH);
            }
        }
    }

    ctx.drawImage(characterImg, viewport.offset[0] + player.position[0], viewport.offset[1] + player.position[1], player.dimensions[0], player.dimensions[1]);

    ctx.fillStyle = "#ff0000";
    ctx.fillText("FPS: " + framesLastSecond, 10, 20);

    lastFrameTime = currentFrameTime;
    requestAnimationFrame(drawGame);
}

