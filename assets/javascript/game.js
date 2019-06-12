/*
1. Generate a random number between 1-12.
2. Link it to #akasmat.

3. set Wins and Loss at 0.

4. Generate a random numbers between 19 and 120 
5.Assign it to the images. 


6. Set user's number at 0.


7. create an array for heroes.
8. If user clicks one of the hero array, assign the random number to user's number.
9. and add to it after that until the user score is  
either equal to ( add win, restart game) or greater than user number ( add loss, restart game)

*/




//

 var anyNumber = Math.floor(Math.random()*120)+19;

 $("#akasmat").text(anyNumber);


 var herosPower = Math.floor(Math.random()*12+1);
  
 var superHeroes = $("<img>");

 var heroArray = $.makeArray(superHeroes);

 
for (i=0; i< heroArray.length; i++) {
    superHeroes = heroArray;
}
 
var targetNumber = anyNumber;



//  superHeroes.attr("herosPower",)