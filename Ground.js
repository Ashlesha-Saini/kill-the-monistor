class Ground {
    construction(x,y,width,height){
        var option={
            isStatic:true

        }
        this.body=Bodies.retangle(x,y,width,height,option);
        this.width=width;
        this.height=height;
        World.add(world,this.body)

    }
    display(){
        fill("Brown");
    rectMode(CENTER);
rect(this.body.position.x,this.position.y,this.width,this.height);

    }
}