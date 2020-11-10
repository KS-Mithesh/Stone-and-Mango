class mango{
    constructor(x,y){
        this.body = Bodies.circle(x,y,20,{isStatic:true,restitution:0.1,friction:1});
        World.add(world,this.body);

        this.image = loadImage("sprites/mango.png");
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,40,50);
    }
}