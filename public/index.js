$(document).ready(function() {
	function preload(arrayOfImages) {
	    $(arrayOfImages).each(function(){
	        $('<img/>')[0].src = this;
	        // Alternatively you could use:
	        // (new Image()).src = this;
	    });
	}

	// Usage:

	preload([
	    'decision1.jpg',
	    'decision2.jpg',
	    'decision3.jpg',
	    'logo.png',
	    'intro-bg.jpg',
	    'logo-bg.jpg'
	]);

	function getQueryVariable(variable) {
	    var query = window.location.search.substring(1);
	    var vars = query.split('&');
	    for (var i = 0; i < vars.length; i++) {
	        var pair = vars[i].split('=');
	        if (decodeURIComponent(pair[0]) == variable) {
	            return decodeURIComponent(pair[1]);
	        }
	    }
	    console.log('Query variable %s not found', variable);
	}

	var test = getQueryVariable('test');

	var ethnicityArray = ["White", "Black", "Hispanic"]
	var genderArray = ["Male", "Female", "Trans Male", "Trans Female", "Nonbinary"]
	var economicArray = ["Poverty Line", "Working Class", "Middle Class", "Wealthy"]

	var playerEthnicity = ethnicityArray[Math.floor(Math.random() * ethnicityArray.length)];
	var playerGender = genderArray[Math.floor(Math.random() * genderArray.length)];

	var ethEconRoll = Math.floor(Math.random() * 100) + 1;
	var ethEducRoll = Math.floor(Math.random() * 100) + 1;

	getWhiteEcon = function(x) {
		if(x<=19) {
			return "Poverty Line"
		} else if (x>19 && x<=40) {
			return "Working Class"
		} else if (x>40 && x<=92) {
			return "Middle Class"
		} else {
			return "Wealthy"
		}
	};

	getHispanicEcon = function(x) {
		if(x<=27) {
			return "Poverty Line"
		} else if (x>27 && x<=55) {
			return "Working Class"
		} else if (x>55 && x<=97) {
			return "Middle Class"
		} else {
			return "Wealthy"
		}
	};

	getBlackEcon = function(x) {
		if(x<=36) {
			return "Poverty Line"
		} else if (x>36 && x<=62) {
			return "Working Class"
		} else if (x>62 && x<=98) {
			return "Middle Class"
		} else {
			return "Wealthy"
		}
	};

	myEcon = function (ethnicity) {
		var ret = ""
		switch (ethnicity) {
		  case "White":
		    ret = getWhiteEcon(ethEconRoll);
		    break;
		  case "Black":
		    ret = getBlackEcon(ethEconRoll);
		    break;
		  case "Hispanic":
		    ret = getHispanicEcon(ethEconRoll);
		    break;
		}
		return ret;
	}

	///////////////
	// EDUCATION //
	///////////////

	myEduc = function (ethnicity) {
		var ret = ""
		switch (ethnicity) {
		  case "White":
		    ret = getWhiteEduc(ethEducRoll);
		    break;
		  case "Black":
		    ret = getBlackEduc(ethEducRoll);
		    break;
		  case "Hispanic":
		    ret = getHispanicEduc(ethEducRoll);
		    break;
		}
		return ret;
	}

	getWhiteEduc = function(x) {
		if(x<=7) {
			return "Dropout"
		} else if (x>7 && x<=53) {
			return "High School"
		} else if (x>53 && x<=63) {
			return "Associates"
		} else {
			return "Bachelors"
		}
	};

	getHispanicEduc = function(x) {
		if(x<=33) {
			return "Dropout"
		} else if (x>33 && x<=77) {
			return "High School"
		} else if (x>77 && x<=84) {
			return "Associates"
		} else {
			return "Bachelors"
		}
	};

	getBlackEduc = function(x) {
		if(x<=13) {
			return "Dropout"
		} else if (x>13 && x<=68) {
			return "High School"
		} else if (x>68 && x<=78) {
			return "Associates"
		} else {
			return "Bachelors"
		}
	};

	///////////////
	/// Career ////
	///////////////

	myJob = function (industry, education) {
		var ret = ""
		switch (industry) {
		  case "Medicine":
		    ret = getMedicineJob(education);
		    break;
		  case "Business":
		    ret = getBusinessJob(education);
		    break;
		  case "Engineering and Technology":
		    ret = getTechJob(education);
		    break;
		  case "Creative":
		    ret = getCreativeJob(education);
		    break;
		}
		return ret;
	}

	getMedicineJob = function(edu) {
		var ret = ""
		switch (edu) {
		  case "Dropout":
		    ret = {'name': 'Janitor', 'salary': 23400}
		    break;
		  case "High School":
		    ret = {'name': 'Personal Care Aid', 'salary': 20100}
		    break;
		  case "Associates":
		    ret = {'name': 'Dental Hygienist', 'salary': 34900}
		    break;
		  case "Bachelors":
			ret = {'name': 'Registered Nurse', 'salary': 67490}
		}
		return ret;
	};

	getBusinessJob = function(edu) {
		var ret = ""
		switch (edu) {
		  case "Dropout":
		    ret = {'name': 'Cashier', 'salary': 19310}
		    break;
		  case "High School":
		    ret = {'name': 'Store Manager', 'salary': 54807}
		    break;
		  case "Associates":
		    ret = {'name': 'Executive Assistant', 'salary': 60989}
		    break;
		  case "Bachelors":
		  	ret = {'name': 'Management Analyst', 'salary': 72000}
		}
		return ret;
	};

	getTechJob = function(edu) {
		var ret = ""
		switch (edu) {
		  case "Dropout":
		    ret = {'name': 'Construction Worker', 'salary': 30890}
		    break;
		  case "High School":
		    ret = {'name': 'Subway Car Operator', 'salary': 60580}
		    break;
		  case "Associates":
		    ret = {'name': 'IT Support Specialist', 'salary': 45464}
		    break;
		  case "Bachelors":
		  	ret = {'name': 'Computer Programmer', 'salary': 79530}
		}
		return ret;
	};

	getCreativeJob = function(edu) {
		var ret = ""
		switch (edu) {
		  case "Dropout":
		    ret = {'name': 'Photographer', 'salary': 31710}
		    break;
		  case "High School":
		    ret = {'name': 'Film Production Assistant', 'salary': 29549}
		    break;
		  case "Associates":
		    ret = {'name': 'Fashion Designer', 'salary': 49000}
		    break;
		  case "Bachelors":
		  	ret = {'name': 'Video Game Producer', 'salary': 70485}
		}
		return ret;
	};

	var playerEcon = myEcon(playerEthnicity);
	var playerEduc = myEduc(playerEthnicity);
	var playerJobName = null;
	var playerSalary = null;
	var educationIntent = null;
	var localeIntent = null;
	var industryIntent = null;

	$('html').css({
		'background-image' : 'url(intro-bg.jpg)',
	});
	$('.content').html("<strong>Let's talk</strong> for a moment.<br>The world is a big, complicated, and <strong>scary</strong> place...<br><strong>But it's not all bad!</strong><br>After all, you're here. You're a hard worker. <strong>You can do this</strong>.<br>I <strong>believe</strong> in you.<br>So much that <strong>I'm going to help you.</strong><br>We're going to go through life <strong>together</strong>.<br>So let's do it. <strong>Let's go!</strong><br>");

	$('html').on('click', logoScreen)

	var logotext = '<img src="logo.png" class="logo" />'

	var decision1text = 'You can\'t get anywhere in life <strong>without a good education.</strong><br>At least, that\'s what people say.<br>Let\'s take their word for it, just this once.<br>It\'s pretty tough to get into school these days.<br>But I think you\'ve got what it takes.<br><br>So what kind of education are you looking for?<br><br>'+
		'<div data-education="High School" class="optionitem decision2">Get your <span class="hightext">high school diploma</span>.</div><div data-education="Associates" class="optionitem decision2">Acquire your <span class="hightext">Associates degree</span></div><div data-education="Bachelors" class="optionitem decision2">Go for your Bachelors at a <span class="hightext">university</span></div>';

	var decision2text = 'Not only is getting into school tough, but so is getting an education.<br>But you know what, <strong>life isn\'t just about studying.</strong><br>It\'s also about, well, living!<br>So where would you want to <strong>live?</strong><br><span>Select One</span><br>'+
		'<div data-locale="City" class="optionitem decision3">In the middle of a bustling <span class="hightext">city.</span></div><div data-locale="Suburban" class="optionitem decision3">In a <span class="hightext">quiet neighborhood</span></div><div data-locale="Rural" class="optionitem decision3">Out in the <span class="hightext">country</span>, close to nature.</div>';

	var decision3text = 'The <strong>scariest</strong> thing about living in a new place is worrying about money.<br>So <strong>it\'s important to use that education</strong> to get a job.<br>Most people spend a whole lot of time at work. Maybe even half their lives...<br>That gave me the chills.<br>But they say that, if you love what you do, you\'ll <strong>never work a day of your life!</strong><br>So what would you <strong>love</strong> to do?<br><span>Select One</span><br>'+
		'<div data-industry="Medicine" class="optionitem finale">Help others in the <span class="hightext">medical</span> profession.</div><div data-industry="Engineering and Technology" class="optionitem finale">Solve the world’s problems as an <span class="hightext">engineer or developer.</span></div><div data-industry="Business" class="optionitem finale">Connect with others as a <span class="hightext">businessperson.</span></div><div data-industry="Creative" class="optionitem finale">Make people think in a <span class="hightext">creative</span> profession.</div>';

	var creditstext = 'Masha: Audio, Production/Team Management, Research, Powerpoint dev, & Design<br>Sara: Narrative Design, UI Design, & Motivational Consulting<br>Lauren: Research, Data Modeling, & Design<br>Gloriane: Concept & Background Art<br>Vivian: Code Monkey<br><br>Play Again?'

	var toughtext = 'Moving forward can be tough, especially when the odds are stacked against you.<br>';

	var goalstext = '';
	if (educationIntent == playerEduc) {
		goalstext = 'Hard work, circumstance, and luck helped keep you on track.<br>';
	} else {
		'Maybe sometimes those odds are stacked too high.<br>';
	}

	var ethClasstext = 'You were born '+playerEthnicity+' into a '+ playerEcon +' home.<br>';

	var wealthtext = '';
	if (playerEcon == "Wealthy") {
		wealthtext = 'There were a lot of opportunities for you to try new things and explore, and there was lots of room for error.<br>';
	} else {
		wealthtext = 'Your family often had to make sacrifices, some of which kept you from taking advantage of opportunities that might have helped you grow.<br>';
	}

	var didbesttext = 'Even though school could be challenging, you did your best.<br>In the end, that\'s all anyone can do.<br>';

	var eductext = ''
	if (playerEduc == "Dropout") {
		eductext = 'Life got in the way before you could finish high school. Your family went through severe financial setbacks, and you made sacrifices to help out.<br>';
	} else {
		eductext = 'You graduated high school and achieved '+playerEduc+' degree.<br>';
	}

	var finaletext = null;

	var fadeDuration = 200;

	function logoScreen() {
		var bindd1 = function () {
			$('html').on('click', decision1)
		}
		$('html').off('click');
		$('html').css({
			'background-image' : 'url(logo-bg.jpg)',
		});
		$('.content').fadeOut(fadeDuration, function() {
			$('.content').css({
				'background':'none',
				'text-align':'center'
			});
		 	$(this).html(logotext).fadeIn(fadeDuration, bindd1);
		});
	}

	function decision1() {
		var bindd2 = function () {
			$('.decision2').on('click', decision2)
		}
		$('html').off('click');
		$('.content').fadeOut(fadeDuration, function() {
			$('.content').css({
				'background' : 'rgba(255,255,255,0.7)',
				'text-align':'left'
			});
			$('html').css({
			   'background-image' : 'url(decision1.jpg)',
			   'background-size' : 'cover'
			});
		 	$(this).html(decision1text).fadeIn(fadeDuration, bindd2);
		});
	}

	function decision2() {
		educationIntent = $(this).data('education');
		var bindd3 = function () {
			$('.decision3').on('click', decision3)
		}
		$('.content').fadeOut(fadeDuration, function() {
		  $('html').css({
			   'background-image' : 'url(decision2.jpg)',
			   'background-size' : 'cover'
			});
		  $(this).html(decision2text).fadeIn(fadeDuration, bindd3);
		});
	}

	function decision3() {
		localeIntent = $(this).data('locale');
		var bindfinale = function () {
			$('.finale').on('click', finale)
		}
		$('.content').fadeOut(fadeDuration, function() {
		  $('html').css({
			   'background-image' : 'url(decision3.jpg)',
			   'background-size' : 'cover'
			});
		  $(this).html(decision3text).fadeIn(fadeDuration, bindfinale);
		});
	}

	function finale() {
		industryIntent = $(this).data('industry');
		playerJobName = myJob(industryIntent, playerEduc).name;
		playerSalary = myJob(industryIntent, playerEduc).salary;
		var jobtext = 'You managed to get a job in '+industryIntent+' as '+playerJobName+'.<br>';
		var salarytext = 'Your estimated earnings are '+playerSalary+' per year.<br>';
		finaletext = toughtext+goalstext+ethClasstext+wealthtext+didbesttext+eductext+jobtext+salarytext;

		var bindcredits = function () {
			$('html').on('click', credits)
			if (test == "true") {
				$('.content').append("Your Ethnicity is: "+playerEthnicity+"<br>"+
					"Your Gender is: "+playerGender+"<br>"+
					"ethEconRoll: "+ethEconRoll+"<br>"+
					"ethEducRoll: "+ethEducRoll+"<br>"+
					"playerEcon: "+playerEcon+"<br>"+
					"playerEduc: "+playerEduc+"<br>"+
					"educationIntent: "+educationIntent+"<br>"+
					"localeIntent: "+localeIntent+"<br>"+
					"industryIntent: "+industryIntent+"<br>"+
					"playerJobName: "+playerJobName+"<br>"+
					"playerSalary: "+playerSalary+"<br>"
				)
			}
		}
		$('.content').fadeOut(fadeDuration, function() {
		  $('html').css({
			   'background-image' : 'url(intro-bg.jpg)',
			   'background-size' : 'cover'
			});
			$('.content').html(
				finaletext
			).fadeIn(fadeDuration, bindcredits)
		});
	}

	function credits() {
		$('html').off('click')
		$('.content').fadeOut(fadeDuration, function() {
		  $(this).html(creditstext).fadeIn(fadeDuration);
		  $('html').on('click', function () {window.location.reload()});
		});

	}
});