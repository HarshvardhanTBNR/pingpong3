function preload(){}

function setup(){
canvas=createCanvas(500,500);
canvas.center();
canvas.parent('canvas')
	instializeInSetup(mario);
    video=createCapture(VIDEO);
	video.size(800,300);
	video.parent('game-console');
	poseNet=ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotposes);
}

function draw(){
 game()
}

function modelLoaded(){
    console.log("Posenet initialzed!")
    }
    
    function gotposes(results){
    if(results.length>0){
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX = "+noseX+""+"noseY = "+noseY);
    }
    }