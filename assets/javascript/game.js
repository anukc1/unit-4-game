//Global Variables
var scoreCounter = 0;
var randomNumbersHolder = [];
var targetNumber = 29;
var wins = 0;
var loss = 0;
$("#score").text(scoreCounter);
$("#akasmat").text(targetNumber);

//Create 4 random numbers and push them into empty array
for (var i = 0; i < 4; i++) {
    var number = Math.floor(Math.random() * 9) + 1;
    console.log(number)
    randomNumbersHolder.push(number)
}

// var images = [
// 'assets/images/CptAmerica.png', 
// 'assets/images/CptAmerica.png', 
// 'assets/images/CptAmerica.png', 
// 'assets/images/CptAmerica.png',
// ]

//Asign those 4 random numbers to each images
for (var j = 0; j < randomNumbersHolder.length; j++) {
    // var img = $('<img>');
    // img.attr('src', images[j]);
    // img.attr('data-value', randomNumbersHolder[j]);
    // img.addClass('images fixed-w')
    // $('#try').append(img)
    $("#btn1").attr("data-value", randomNumbersHolder[0]);
    $("#btn2").attr("data-value", randomNumbersHolder[1]);
    $("#btn3").attr("data-value", randomNumbersHolder[2]);
    $("#btn4").attr("data-value", randomNumbersHolder[3]);
}



var scoreMe = function () 
{
    var value = $(this).attr('data-value');
    scoreCounter += Number(value);
    $("#score").text(scoreCounter);
    if (scoreCounter === targetNumber) {
        wins++;
        scoreCounter = 0;
        randomNumbersHolder = [];
        targetNumber = Math.floor(Math.random() * 120) + 1;
        $("#jeet").text(wins);
        $("#akasmat").text(targetNumber);
        $("#score").text(scoreCounter);
    }
    if (scoreCounter > targetNumber) {
        loss++;
        $("#haar").text(loss);
        scoreCounter = 0;
        randomNumbersHolder = [];
        targetNumber = Math.floor(Math.random() * 120) + 1;
        $("#jeet").text(wins);
        $("#akasmat").text(targetNumber);
        $("#score").text(scoreCounter);
    }

}
$("#btn1").on("click", scoreMe);

$("#btn2").on("click", scoreMe);

$("#btn3").on("click", scoreMe);

$("#btn4").on("click", scoreMe);
    















//each image have a value math operation


//random target number


//conditionals if the sum of clicking your images === target number
//wins++
//reset values

//if the sum of clicking each image is above the target number 
//losses ++
//reset the values




//  var herosPower = Math.floor(Math.random()*12)+1;

//  var superHeroes = $("<img>");

//  var heroArray = $.makeArray(superHeroes);


// for (i=0; i< heroArray.length; i++) {
//     herosPower = heroArray;

//     console.log(herosPower);
// }









//  superHeroes.attr("herosPower",)