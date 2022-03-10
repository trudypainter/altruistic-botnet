// Animated Sprite
// https://youtu.be/3noMeuufLZY

class Sprite {
  constructor(animation, x, y, speed, name, recentSite, totalSites) {
    this.x = x;
    this.y = y;
    this.animation = animation;
    this.w = this.animation[0].width;
    this.len = this.animation.length;
    this.speed = speed;
    this.index = 0;

    this.name = name;
    this.recentSite = recentSite;
    this.totalSites = totalSites;

    this.height = 140;
  }

  show() {
    let index = floor(this.index) % this.len;
    image(this.animation[index], this.x, this.y);
    text(this.name, this.x, this.y);

    text(`Recent site: ${this.recentSite}`, this.x, this.y + this.height);
    text(
      `Total sites Visited: ${this.totalSites}`,
      this.x,
      this.y + 15 + this.height
    );
  }

  animate() {
    this.index += this.speed;
    this.x += this.speed * 15;

    if (this.x > width) {
      this.x = -this.w;
    }
  }
}
