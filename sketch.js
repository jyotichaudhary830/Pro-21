var surface1, surface2, surface3, surface4, surface5, surface6, surface7;
var box;
var edges;
var music;

function preload() {
    music = loadSound("music.mp3");
}

function setup(){
    //create the canvas
    canvas = createCanvas(1025,650);

    //create edgeSprite
     edges = createEdgeSprites();

    //create 7 surfaces
    surface1 = createSprite(50,640,150,50);
    surface1.shapeColor = "blue";

    surface2 = createSprite(200,640,150,50);
    surface2.shapeColor = "red";

    surface3 = createSprite(350,640,150,50);
    surface3.shapeColor = "yellow";

    surface4 = createSprite(500,640,150,50);
    surface4.shapeColor = "green";

    surface5 = createSprite(650,640,150,50);
    surface5.shapeColor = "magenta";

    surface6 = createSprite(800,640,150,50);
    surface6.shapeColor = "purple";

    surface7 = createSprite(950,640,150,50);
    surface7.shapeColor = "orange";

    //create box sprite and give velocity
    box = createSprite(500,325,20,20);
    box.shapeColor = "white";

     //velocity of the box
     box.velocityX = 8;
     box.velocityY = 8;
    
}

function draw() {
    background(rgb(169,169,169));

    //add condition to check if box touching surface and make it box
    if(box.isTouching(surface1)) {
        box.bounceOff(surface1);
        box.shapeColor = "blue";
    }

    if(box.isTouching(surface2)) {
        box.bounceOff(surface2);
        box.shapeColor = "red";
    }

    if(box.isTouching(surface3)) {
        box.bounceOff(surface3);
        box.shapeColor = "yellow";
    }

    if(box.isTouching(surface4)) {
        box.bounceOff(surface4); 
        box.shapeColor = "green";
    }

    if(box.isTouching(surface5)) {
        box.bounceOff(surface5);
        box.shapeColor = "magenta";
    }

    if(box.isTouching(surface6)) {
        box.bounceOff(surface6);
        box.shapeColor = "purple";
        box.addSound;
    }

    if(box.isTouching(surface7)) {
        box.bounceOff(surface7);
        box.shapeColor = "orange";
    }
    
    box.bounceOff(edges);

    drawSprites();
}
