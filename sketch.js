// Animated Sprite
// https://youtu.be/3noMeuufLZY

let spritesheet;
let spritedata;

let animation = [];

let bots = [];

function preload() {
  spritedata = loadJSON("sprite.json");

  spritesheet1 = loadImage("sprites/1.jpeg");
  spritesheet2 = loadImage("sprites/2.jpeg");
  spritesheet3 = loadImage("sprites/3.jpeg");
  spritesheet4 = loadImage("sprites/4.jpeg");
  spritesheet5 = loadImage("sprites/5.jpeg");
  spritesheet6 = loadImage("sprites/6.jpeg");
  spritesheet7 = loadImage("sprites/7.jpeg");

  jsonData = loadJSON("./data.json");
}

function setup() {
  createCanvas(windowWidth, 1400);
  let frames = spritedata.frames;

  let animation1 = [];
  let animation2 = [];
  let animation3 = [];
  let animation4 = [];
  let animation5 = [];
  let animation6 = [];
  let animation7 = [];

  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].position;

    let img1 = spritesheet1.get(pos.x, pos.y, pos.w, pos.h);
    animation1.push(img1);
    let img2 = spritesheet2.get(pos.x, pos.y, pos.w, pos.h);
    animation2.push(img2);
    let img3 = spritesheet3.get(pos.x, pos.y, pos.w, pos.h);
    animation3.push(img3);
    let img4 = spritesheet4.get(pos.x, pos.y, pos.w, pos.h);
    animation4.push(img4);
    let img5 = spritesheet5.get(pos.x, pos.y, pos.w, pos.h);
    animation5.push(img5);
    let img6 = spritesheet6.get(pos.x, pos.y, pos.w, pos.h);
    animation6.push(img6);
    let img7 = spritesheet7.get(pos.x, pos.y, pos.w, pos.h);
    animation7.push(img7);
  }

  let height = 180;
  let offset = 100;
  bots.push(
    new Sprite(
      animation1,
      0,
      offset + height * 0,
      random(0.05, 0.2),
      "Pointy",
      jsonData["Pointy"]["recent_site"],
      jsonData["Pointy"]["total_sites"]
    )
  );
  bots.push(
    new Sprite(
      animation2,
      0,
      offset + height * 1,
      random(0.05, 0.2),
      "Spikey",
      jsonData["Spikey"]["recent_site"],
      jsonData["Spikey"]["total_sites"]
    )
  );
  bots.push(
    new Sprite(
      animation3,
      0,
      offset + height * 2,
      random(0.05, 0.2),
      "Cloudy",
      jsonData["Cloudy"]["recent_site"],
      jsonData["Cloudy"]["total_sites"]
    )
  );
  bots.push(
    new Sprite(
      animation4,
      0,
      offset + height * 3,
      random(0.05, 0.2),
      "Stumpy",
      jsonData["Stumpy"]["recent_site"],
      jsonData["Stumpy"]["total_sites"]
    )
  );
  bots.push(
    new Sprite(
      animation5,
      0,
      offset + height * 4,
      random(0.05, 0.2),
      "Bulby",
      jsonData["Bulby"]["recent_site"],
      jsonData["Bulby"]["total_sites"]
    )
  );
  bots.push(
    new Sprite(
      animation6,
      0,
      offset + height * 5,
      random(0.05, 0.2),
      "Swirly",
      jsonData["Swirly"]["recent_site"],
      jsonData["Swirly"]["total_sites"]
    )
  );
  bots.push(
    new Sprite(
      animation7,
      0,
      offset + height * 6,
      random(0.05, 0.2),
      "Boxy",
      jsonData["Boxy"]["recent_site"],
      jsonData["Boxy"]["total_sites"]
    )
  );
}

function draw() {
  background(255);

  for (let bot of bots) {
    bot.show();
    bot.animate();
  }
}
