$(document).ready(function(){
  var randomNum;
  var guess;
  var guessCount = 0;
  var hasWon;
  var userInput = $('number-input');
  
  
//picks a random number between 1-100
 getRandomNumber();
  
  
  //Accept input from submit button or enter key if guess is valid
  $('form').submit(function(e){ 
    e.preventDefault();
    guess = $('#number-input').val();
    console.log(guess);
    

    
   //determine if guess is valid
     if (guess >= 1 && guess <= 100) {
       console.log('true');
           guessCount++;
    adjustGuessCount();
             //Add number to guess list
        $("#guess-list li").css('display', 'inline');
      appendGuess();
       checkDifference();
       
       endGame();
    }
      else {
      $('#feedback').text('Please enter a number between 1 and 100.');
      }
       

    //clear guess from text field
    document.getElementById('number-input').value='';   
  });
  
  //starts new game
  $("#new-game").click(function(event){      
    event.preventDefault();
    newGame();
    });
  
  //get hint
  $("#hint").click(function(event){      
    event.preventDefault();
    
    if(guessCount === 0) {
      $('#feedback').text("You must enter a guess first.")
    }
    getAnswer();
    });
  
  
  //creates a new game
  function newGame() {
    getRandomNumber();
    clearGuessCount();
    $('#feedback').css('display', 'none');
     $("#guess-list li").remove();
     $('#num-guesses').text("5 of 5");
     $('.color').css('color','green');
    document.getElementById('number-input').disabled = false;
    document.getElementById('submit-button').disabled = false;
  }
  
  
  
  //picks a random number between 1-100
  function getRandomNumber() {
     randomNum = Math.floor((Math.random() * 100) + 1);
  console.log(randomNum);
//    return randomNum;
  }
  

  //decrement guesses remaining
 function adjustGuessCount () {
    
      switch(guessCount){
           
      case 1:
          $('#num-guesses').text("4 of 5");
      break;
      case 2:
          $('#num-guesses').text("3 of 5");
          $('.color').css('color','yellow');
      break;
      case 3:
          $('#num-guesses').text("2 of 5");
      break;
      case 4:
          $('#num-guesses').text("1 of 5");
          $('.color').css('color','red');
      break;
     case 5:
          $('#num-guesses').text("0 of 5");
      break;
      }
  }
  

  //compares numbers, informs if user is hot or cold   
 function checkDifference() {
   var difference = Math.abs(guess - randomNum);
   $('#feedback').css('display','block');
   hasWon = false;
   
    if (difference>60)  
      var feedbackText = "You are ice cold. ";
    else if (difference>25) 
       feedbackText = "You are cold. ";
    else if (difference>10) 
      feedbackText = "You are warm. ";
    else if (difference>5)         
      feedbackText = "You are hot. ";
    else if (difference>0) 
      feedbackText = "You are burning up. ";
    else {
         feedbackText = "Congratulations! You Got It! "; 
        hasWon = true;
    }
        $('#feedback').text(feedbackText + higherOrLower());
  }

  //instructs user to guess higher or lower
  function higherOrLower() {    
    if (guess < randomNum) {
      return "Guess higher";
    }  
    else if (guess > randomNum){
      return "Guess lower";
    }      
    return "";  
  }
  
  //clears the guess count
  function clearGuessCount() {
    guessCount = 0;
  }
  
  //ends game after 5 guesses or a win
  function endGame(){    
    if( hasWon === true || guessCount === 5) {
            document.getElementById('number-input').disabled = true;
        document.getElementById('submit-button').disabled = true;
    };    
    if(guessCount === 5 && hasWon === false) {
      $('#feedback').text("Out of guesses. Play again.");
    }
  }
  
  //reveals answer
  function getAnswer() {
     $('#feedback').text(randomNum);
  }
  
 //append guess 
  
  function appendGuess() {
    if (guess < 10)        
        guess = "0" + guess; 
    
  
  $("#guess-list").append('<li>' + guess+ '</li>');
  }
  
  
//  function pad(num, size) {
//    var s = num+"";
//    while (s.length < size) s = "0" + s;
//    return s;
//}
  
  
  
  
  
  
  
  
//  $('#new-item').on('keypress', function(event) {
//		if (event.which===13) {
//			event.preventDefault();
//			addItem();
//		}
//	});
});
  
                  
                  
             