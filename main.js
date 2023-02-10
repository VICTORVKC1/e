const SpeechRecognition = webkitSpeechRecognition;
const recFala = new  SpeechRecognition();
const txtFala=document.getElementById("voiceOut");
const camera=document.getElementById("camera");

Webcam.set({
width:360,
height:250,
image_format:'png',
png_quality:90
})

function startVoice() {
txtFala.innerHTML = ""; 
recFala.start();}
recFala.onresult = function(e) {
console.log(e);
  const fala = e.results[0][0].trancript 
  console.log(fala);
txtFala.value = fala;
speak();
Webcam.attach(camera); 
}

/*
function start()

{
    document.getElementById("textbox").innerHTML = ""; 
    recognition.start();
} 
recognition.onresult = function(event) {
console.log(event);
var Content = event.results[0][0].transcript;
 document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
txtFala.value=Contente;
speak();
  }*/function speak(){
   const synth = speechSyntesits;
  const dadosVoz=txtFala.value;
  const utterThis = new SpeechSynthesisUtterance(dadosVoz);
  synth.speik(utterThis);
}
 