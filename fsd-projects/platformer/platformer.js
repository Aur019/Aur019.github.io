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

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "hsl(205, 94%, 44%)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid



    // TODO 2 - Create Platforms
    createPlatform(130, 690, 270, 15, "Black");
    createPlatform(350, 600, 270, 15, "black");
    createPlatform(640, 478, 130, 130, "#E5CE39");
    createPlatform(790, 600, 270, 15, "black");
    createPlatform(1060, 690, 270, 15, "black");
    createPlatform(350, 400, 200, 30, "black");
    createPlatform(850, 400, 150, 30, "#E5CE39", 850, 850, 0, 290, 430,2);  
    createPlatform(130, 290, 150, 25, "black");
    createPlatform(130, 210, 30, 10, "#E5CE39" );
    createPlatform(295, 100, 330, 25, "black");
    createPlatform(1100, 320, 15, 15, "black");
    createPlatform(1350, 320, 15, 15, "#E5CE39");
    createPlatform(130, 150, 15, 150, "black");
    createBadPlatform(1100, 335, 265, 18, "#B90000");

    // TODO 3 - Create Collectables

    createCollectable("diamond", 1280, 610, .3, 1.2);
    createCollectable("steve", 1210, 190);
    createCollectable("max", 590, 40);


    // TODO 4 - Create Cannons

    createCannon("left", 20, 890);
    createCannon("bottom", 740, 1500);
    createCannon("bottom", 560, 1500);
    createCannon("top", 1290, 1500);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
