const tiles = [];

const grid = [];

const DIM = 2;

const BLANK = 0;
const UP = 1;
const RIGHT = 2;
const DOWN = 3;
const LEFT = 4;

function preload() {
    tiles[0] = loadImage("tiles/blank.png");
    tiles[1] = loadImage("tiles/up.png");
    tiles[2] = loadImage("tiles/right.png");
    tiles[3] = loadImage("tiles/down.png");
    tiles[4] = loadImage("tiles/left.png");
}

function setup() {
    createCanvas(400, 400);

    for(let i = 0; i < DIM * DIM; i++) {
        grid[i] = {
            collapsed: false,
            options: [BLANK, UP, RIGHT, DOWN, LEFT]
        };
    }

    grid[0].collapsed = true;
    grid[0].options = UP;
}

function draw() {
    background(0);

    const w = width / DIM;
    const h = height / DIM;
    for(let j = 0; j < DIM; j++) {
        for(let i = 0; i < DIM; i++) {
            let cell = grid[i + j * DIM];
            if (cell.collapsed) {
                let index = cell.options[0];
                image(tiles[index], i * w, j * h);
            } else {
                fill(0);
                stroke(255);
                rect(i * w, j * h, w, h)
            }
        }
    }
}







    image(tiles[0], 0, 0);
    image(tiles[1], 50, 0);
    image(tiles[2], 100,0);
    image(tiles[3], 150, 0);
    image(tiles[4], 200, 0);


