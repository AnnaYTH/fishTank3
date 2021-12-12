function MovingObject(options) {
    this.pos = options.pos; 
    this.vel = options.vel; 
    this.game = options.game; 
    this.size = options.size;
    this.sizeLevel = options.sizeLevel; 
    this.typeId = options.typeId; 
}

module.exports = MovingObject;
