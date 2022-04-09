// Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        // add object to existing scene
        scene.add.existing(this);
        this.isFiring - false; //track rocket's firing status
        this.moveSpeed = 2;    // pixels per frame
    }

    update() {
        // left/right movement
    }
}