var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
var Textbox=document.getElementById("textbox")

function start(){
    recognition.start();
    Textbox.innerHTML="";

}
recognition.onresult=function(event){
    console.log(event);
    var Content=event.results[0][0].transcript;
    if(Content=="Tire Minha Selfie"){
console.log("tirando sua selfie em.....");
speak();

    }
}
function speak(){
    var synth = window.speechSynthesis;

    speakData ="Tirando sua foto bem linda em 5 segundos";

    var utterThis = new SpeechSynthesisUtterance(speakData)
synth.speak(utterThis)

Webcam.attach(camera);

setTimeout(function(){
    takeSelfie()
    save();
},5000)
camera = documet.getElementById("camera");
Webcam.set({
    width: 360,
    height:250,
    image_format: 'jpeg',
    jpeg_quality:90

})
}


