class tree{
    constructor(x,y){
        this.body = Bodies.rectangle(x-350,y+275,1250,10,{isStatic:true});
        World.add(world,this.body);

        this.image = loadImage("sprites/tree.png");
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x+350,pos.y-300,450,550);
        //rectMode(CENTER);
        //rect(pos.x,pos.y,1250,10);
    }
}