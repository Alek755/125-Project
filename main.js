LeftWristX = 0;
RightWristX = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(500, 380);
    video.position(400,300);

    canvas = createCanvas(500, 380);
    canvas.position(1000, 300);

    poseNet = ml5.poseNet(video, ModelLoaded);
    poseNet.on('pose', gotPoses);

}

    function ModelLoaded() {
        console.log("MODEL IS LOADED");

    }

    function gotPoses(results) {
        if(results.length > 0) {
            console.log(results);
            LeftWristX = results[0].pose.leftWrist.x;
            RightWristX = results[0].pose.rightWrist.x;
            console.log("Left Wrist X = " + LeftWristX + "Right Wrist X = " + RightWristX);
            difference = floor(LeftWristX - RightWristX);

        }

    }



function draw() {
    background("#FECD45");
    fill("#2568FB");
    stroke("#2568FB");
    text("Aleksa", 50, 200);
    textSize(difference);
}