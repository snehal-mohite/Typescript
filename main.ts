import { Points } from "./point";
class Point{
    // x:number;
    // y:number;

    constructor(private x:number,private y:number){
        // this.x=x;
        // this.y=y;  After using Private prefix no need of this
    }

    draw(){
     console.log('X:'+this.x+ ',Y:'+this.y);
    }
    get X(){
        return this.x;
    }
    set X(value: number){
        if(value < 0)
           throw new Error('Value should not be less than 0')
        this.x=value
    }
}

let point = new Point(1,2);
let x=point.X//point.getX();
console.log("GetX:",x);
point.X=10//point.setX(10);
point.draw();

let point1 = new Points(1,2);
point1.draw();