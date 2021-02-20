class SlingShot {
   constructor(body1,point1){
    var options={
    bodyA:body1,
    pointB:point1,
    stiffness: 0.04,
    length: 10
    }
    this.pointB=point1;
    this.Sling= Constraint.create(options);
    World.add(world,this.Sling);
   } 
   display(){
    if(this.Sling.bodyA){
    var pointA = this.Sling.bodyA.position;
    var pointB = this.pointB;
    strokeWeight(2);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
   }}
 fly() {
 this.Sling.bodyA=null;   
}
}