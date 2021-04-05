class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 0
        }
       
        this.pointB = pointB
        this.constraint = Constraint.create(options);
        World.add(world, this.constraint);
    }

    fly(){
        this.constraint.bodyA = null;
    }
 attach(body){
     this.constraint.bodyA=body;
 }
        display(){
      if(this.constraint.bodyA!==NULL){
          var PointA=this.constraint.bodyA.position;
          strokeWeight(3);
          line(this.pointB.x,this.pointB.y,PointA.x,PointA.y)
      }
        }
}