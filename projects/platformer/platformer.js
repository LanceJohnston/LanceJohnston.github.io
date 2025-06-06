$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, canvas.height, -1, -canvas.height);
    // }
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(canvas.width, i, -canvas.width, -1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
    //Starting Platform
    createPlatform(55, 300, 20, 20);
    createPlatform(40, 300, 20, 20);
    //Steps
    createPlatform(350, 550, 102, 20);
    createPlatform(120, 610, 102, 20);
    //T Platform
    createPlatform(620, 500, 200, 20);
    createPlatform(700, 500, 40, 330);
    //Thin Platform
    createPlatform(850, 450, 200, 1)
    //Other
    createPlatform(1000, 150, 1000, 20);
    createPlatform(670, 140, 90, 20)
    createPlatform(840, 140, 90, 20)
    createPlatform(500, 240, 90, 20)
    createPlatform(670, 340, 90, 20)
    //Border
    createPlatform(0, -10, 900000, 20)
    createPlatform(-30, 0, 40, 30000);
    createPlatform(1385, 30, 40, 30000000);
    

    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    createCollectable("database", 390, 100, 20, 0.5);
    createCollectable("database", 720, 400, 20, 0.5);
    createCollectable("database", 1300, 100, 20, 0.5);
    createCollectable("database", 695, 100, 20, 0.5);
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
    createCannon("left", 600, 1000);
    createCannon("bottom", 600, 1000);
    createCannon("bottom", 800, 1000);
    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
