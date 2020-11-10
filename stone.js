class stone{
    constructor(x,y){
        this.body = Bodies.circle(x,y,15,{restitution:0.2,friction:1,density:1.2});
        World.add(world,this.body);

        this.image = loadImage("sprites/stone.png");
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,50,50);
    }
}