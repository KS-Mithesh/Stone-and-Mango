class boy{
    constructor(x,y){
        this.body = Bodies.rectangle(x+1000,y+1000,50,50,{isStatic:true});
        World.add(world,this.body);

        this.image = loadImage("sprites/boy.png");
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x-1000,pos.y-1000,350,400);
    }
}