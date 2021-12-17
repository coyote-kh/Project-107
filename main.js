function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/-V0K_wPir/model.json', modelReady)
}

function modelReady(){
    classifier.classify(gotResults);
} 