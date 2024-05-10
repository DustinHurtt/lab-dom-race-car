class Player {
  constructor(gameScreen, left, top, width, height, imgSrc) {
    this.gameScreen = gameScreen;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.directionX = 0;
    this.directionY = 0;
    this.element = document.createElement("img");
    this.element.src = imgSrc;
    this.element.style.position = "absolute";
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;

    this.gameScreen.appendChild(this.element);
  }

  move() {
    if (
      this.left > 0 + this.width &&
      this.left < this.gameScreen.width - this.width
    ) {
      this.left = this.directionX;
      this.updatePosition();
    }

    if (this.top < this.gameScreen.height && this.top > 0)
      this.top = this.directionY;
    this.updatePosition();
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  didCollide(obstacle){
    if( 
        
    ){
        return true
    } else {
        return false
    }
  }
}
