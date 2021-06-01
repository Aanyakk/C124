function preload()
{

}

function setup()
{
canvas = createCanvas(500,420);
canvas.position(550,150);
video=createCapture(VIDEO);
video.size(480,490);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}

function draw()
{
background("#FF8787")
}

function modelLoaded()
{
    console.log("poseNet is initialized!");
}

function gotPoses(results)
{
    if(results.length>0){
        console.log(results);
    }
}