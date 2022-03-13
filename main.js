var song= ""
var leftWristX= ""
var leftWristY= ""
var rightWristX= ""
var rightWristY= ""
function preload(){
    song= loadSound("music.mp3")
}
function setup(){
    canvas= createCanvas(700, 700)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    posenet= ml5.poseNet(video, modelLoaded)
    posenet.on("pose", gotPoses)
}
function gotPoses(result){
    if(result.length>0){
        console.log(result)
        leftWristX= result[0].pose.leftWrist.x
        console.log(leftWristX)
        leftWristY= result[0].pose.leftWrist.y
        console.log(leftWristY)
        rightWristX= result[0].pose.rightWrist.x
        console.log(rightWristX)
        rightWristY= result[0].pose.rightWrist.y
        console.log(rightWristY)
    }
}
function modelLoaded(){
    console.log('Model Loaded Successfuly!')
}
function draw(){
    image(video, 0, 0, 700, 700)
}
function PLAY(){
    song.setVolume(1)
    song.rate(5)
    song.play()
}
function STOP(){
    song.pause()
}