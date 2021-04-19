var s,db,pos,bg,scale1
function preload(){
bg=loadImage("b.jpg")
h=loadImage("hab.png")
}
function setup(){
createCanvas(1000,600)
 s=createSprite(100,450,30,30)
 s.addImage(h)
 s.scale=0.35
 db=firebase.database()
 db.ref("balloon/height").on("value",readdb,showerror)
 db.ref("balloon/scale").on("value",readdb1,showerror)
}
function draw(){
background(bg)
s.setVelocity(0,0)
if(pos!=undefined){  
if(keyDown("up")){
writedb(0,-3)
if(s.scale>0.08){  
s.scale=s.scale-0.01 }
scaleval() 
}
if(keyDown("down")){
 writedb(0,3)   
 if(s.scale<0.45){  
   s.scale=s.scale+0.01}
   scaleval()  
   }
   if(keyDown("right")){
   writedb(3,0)   
   }
   if(keyDown("left")){
    writedb(-3,0)   
   }
   
}
drawSprites()
}
function readdb (data){
pos=data.val()
s.x=pos.x
s.y=pos.y


}
function readdb1 (data){
  
  scale1=data.val()
  s.scale=scale1
   
   
     
   }
function scaleval(){
   db.ref("balloon").update({
   "scale":s.scale   
   })
}
function showerror (){
console.log("fail to readdb")
}
function writedb(x,y){
db.ref("balloon/height").update({
 "x":pos.x+x,
 "y":pos.y+y,
 
 

})
}