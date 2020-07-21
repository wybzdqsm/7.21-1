function drag(obj){
  this. obj=document.querySelector(obj);
  this.x=true;
  this.y=true;
  this.side={
      x1:"",x2:"",y1:"",y2:""
  }
 
}


drag.prototype={
    move(callback){
        var that=this;
      this.obj.onmousedown=function(ev){
      
          var cx=ev.clientX
          var x=that.obj.offsetLeft;
          var cy=ev.clientY
          var y=that.obj.offsetTop;
              var dx=cx-x;
              var dy=cy-y;

        document.onmousemove=function(ev){
             var movex=ev.clientX;
              var  movey=ev.clientY;
              vx=movex-dx
              vy=movey-dy

              if(that.side.x1!==""){
                if(vx<that.side.x1){
                    vx=that.side.x1
                }
            }
            if(that.side.x2!==""){
              if(vx>that.side.x2){
                  vx=that.side.x2
              }
          }
          if(that.side.y1!==""){
              if(vy<that.side.y1){
                  vy=that.side.y1
              }
          }
          if(that.side.y2!==""){
              if(vy>that.side.y2){
                  vy=that.side.y2
              }
          }
            
              if(that.x==true){
              that.obj.style.left=vx+"px";
            }
             if(that.y==true){
              that.obj.style.top=vy+"px"
          }
        }
          document.onmouseup=function(ev){
                document.onmousemove=null;
                document.onmouseup=null;
                if(callback){
                    callback.call(that.obj);
                }

          }
      }
    }
}
