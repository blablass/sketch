function preload(){
    classifier = ml5.imageClassifier("DoddleNet")

    
}
function setup(){
    canvas = createCanvas(280,280)
    canvas.center()
    background("brown")
    canvas.mouseReleased(classifyCanvas)
    synth = window.speechSynthesis
}
function clearsketch(){
    background("brown")
        
}
function draw(){
    strokeWeight(10)
    stroke("white")
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY)
    }
}
function classifyCanvas(){
    classifier.classify(canvas,gotresult)
}
function gotresult(error,results){
    if(error){
        console.log(error)
    }else{
        console.log(results)
        document.getElementById("label").innerHTML = "label:" + results[0].label
        document.getElementById("confidence").innerHTML = "confidence:" + Math.floor(results[0].confidence*100)+ "%"
        utter = new SpeechSynthesisUtterance(results[0].label)
        synth.speak(utter)
        
    }
}
