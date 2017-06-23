//question and answer variables
var questionAnswerBank;
var arrWrongAnswers;
var arrRandomizedChoices;

var correctCount;
var incorrectCount;
var outOfTimeCount;

var possibleChoices;

var choice2;
var choice3;
var choice4;
var i = 0;

//var falseIndex = Math.floor(Math.random() * 3); //change 3 if arrWrongAnswers length changes

//var buttonDiv = '<div class="btn-group" role="group" aria-label="..."></div>'


//function declarations
function startUp() {
	//list of questions;
	questionAnswerBank = {
		'Which of the following is an alien race bent on enslaving humankind?' : 
			['Hollows', 'Goa\'uld', 'Death Eaters', 'Androids'],
		'What is the name of the shield used to block the Stargate?' : 
			['Iris', 'Anubis', 'Osiris', 'Block'],
		'How many members are typically in a recon team to other worlds?' : 
			['3', '4', '5', '6'],
		'What state is the Stargate located in?' : 
			['California', 'New Mexico', 'Colorado', 'Arizona'],
		'Who is the doctor on the team?' : 
			['Dr. Carter', 'Dr. Osbourne', 'Dr. O\'Neill', 'Dr. Jackson'],
		// 'What is 6?' : 'a6',
		// 'What is 7?' : 'a7',
		// 'What is 8?' : 'a8',
		// 'What is 9?' : 'a9',
		// 'What is 10?' : 'a10',
	}

	correctCount = 0;
	incorrectCount = 0;
	//outOfTimeCount = 0;
}

function questionGenerator() {
	
	var limit = (Object.keys(questionAnswerBank).length - 1);
	var delay = 5000;//change to allow for more time!
	var userChoice;

	function increase () {
		clearTimeout(slideShow);
		if (i<limit) {
			i++;
			slideShow();
		}
		else if (i === 5) {
			//put in the counter html
			$('row').html();
		}
	}

	var slideShow = function() {
		console.log('i - in for loop or while loop',i);
		choice2 = Object.values(questionAnswerBank)[i][1];
		choice3 = Object.values(questionAnswerBank)[i][2];
		choice4 = Object.values(questionAnswerBank)[i][3];

		possibleChoices = {
			possibility2 : '<h3>' + choice2 + '</h3>',
			possibility3 : '<h3>' + choice3 + '</h3>',
			possibility4 : '<h3>' + choice4 + '</h3>',
		}

		console.log('i - before jQuery', i);
		$('h2').html(Object.keys(questionAnswerBank)[i]);
		$('div#start').html('<h3>' + Object.values(questionAnswerBank)[i][0] + '</h3>');
		$(possibleChoices.possibility2).appendTo('div#start');
		$(possibleChoices.possibility3).appendTo('div#start');
		$(possibleChoices.possibility4).appendTo('div#start');

		if (i <= limit && i != limit) {
			setTimeout(slideShow, delay);
		}

		i++;

		$(document).on("click", '#choice-a', function() {
			userChoice = 'a';
			console.log("userChoice a", userChoice);
			console.log("i value on click", i);
			// increase();
			answerCheck();

		});

		$(document).on("click", '#choice-b', function() {
			userChoice = 'b';
			console.log("userChoice b", userChoice);
			console.log("i value on click", i);
			// increase();
			answerCheck();
		});

		$(document).on("click", '#choice-c', function() {
			userChoice = 'c';
			console.log("userChoice c", userChoice);
			console.log("i value on click", i);
			// increase();
			answerCheck();
		});

		$(document).on("click", '#choice-d', function() {
			userChoice = 'd';
			console.log("userChoice d", userChoice);
			console.log("i value on click", i);
			// increase();
			answerCheck();
		});

		console.log("counter");
		answerCheck();
	}

	slideShow();
}

function answerCheck() {
	if (i === 0 && userChoice === 'b') {
		//display correct image - applies to below also
		correctCount++;
		console.log('correctCount', correctCount);
		increase();
	}

	else if (i === 1 && userChoice === 'a') {
		correctCount++;
		console.log('correctCount', correctCount);
		increase();
	}

	else if (i === 2 && userChoice === 'b') {
		correctCount++;
		console.log('correctCount', correctCount);
		increase();
	}

	else if (i === 3 && userChoice === 'a') {
		correctCount++;
		console.log('correctCount', correctCount);
		increase();
	}

	else if (i === 4 && userChoice === 'd') {
		correctCount++;
		console.log('correctCount', correctCount);
		increase();
	}
	//add else if for time running out here; assuming I ahve time

	else {
		incorrectCount++;
		console.log('incorrectCount', incorrectCount);
		increase();
	}
}


$('#start h3').click(function() {
	questionGenerator();
});

//FUNCTION CALLS
startUp();

//console.log('keys', Object.keys(questionAnswerBank));
//console.log('key1', Object.keys(questionAnswerBank)[6]);



//MAKE BELOW OCCUR AT END OF QUESTIONS' PAGE
//$('button#start').text('<button type="button" class="btn btn-default" id="reset">RESTART</button>');
