function soundClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Xs8w75kga/model.json',modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error,results) {
    if (error) {
       console.error(error);
    }
    else {
       console.log(results);
       random_r = Math.floor(Math.random() * 255) + 1;
       random_g = Math.floor(Math.random() * 255) + 1;
       random_b = Math.floor(Math.random() * 255) + 1;

       document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;

       document.getElementById("result_label").style.color = "rgb("+random_r+", "+random_g+", "+random_b+")";

       img = document.getElementById('dog.jpg');
       img1 = document.getElementById('cat.jpg');
       img2 = document.getElementById('cow.jpg');
       img3 = document.getElementById('lion.webp');

       if (results[0].label == "barking") {
           img.src = 'dog.jpg';
       }
       else if (results[0].label == "meowing") {
           img.src = 'cat.jpg';
       }
       else if (results[0].label == "mooing") {
           img.src = 'cow.jpg';
       }
       else if (results[0].label == "roaring") {
            img.src = 'lion.webp';
       }
    }
}