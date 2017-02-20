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
	    'logo-bg.jpg',
	    'clearcredits.png',
	    'people.png'
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
	var genderArray = ["Man", "Woman", "Trans Man", "Trans Woman", "Nonbinary Person"]
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

	var logotext = '<img src="logo.png" class="logo" />';

	var decision1text = 'You can\'t get anywhere in life <strong>without a good education.</strong><br> At least, that\'s what people say. Let\'s take their word for it, just this once.<br> It\'s pretty tough to get into school these days. But I think <strong>you\'ve got what it takes</strong>.<br><br>So what kind of <strong>education</strong> are you looking for?<br>'+
		'<div class="optionitem">Get your <span data-education="High School" class="hightext decision2">high school diploma</span>.</div><div class="optionitem">Acquire your <span data-education="Associates" class="hightext decision2">Associates degree.</span></div><div class="optionitem">Go for your <span data-education="Bachelor\'s" class="hightext decision2">Bachelor\'s</span> at a university.</div>';

	var decision2text = 'Not only is getting into school tough, but so is getting an education.<br>But you know what, <strong>life isn\'t just about studying.</strong><br>It\'s also about, well, living!<br><br>So where would you want to <strong>live?</strong><br>'+
		'<div class="optionitem">In the middle of a bustling <span data-locale="City" class="hightext decision3">city.</span></div><div class="optionitem">In a <span data-locale="Suburban" class="hightext decision3">quiet neighborhood.</span></div><div class="optionitem">Out in the <span data-locale="Rural" class="hightext decision3">country</span>, close to nature.</div>';

	var decision3text = 'The <strong>scariest</strong> thing about living in a new place is worrying about money.<br>So <strong>it\'s important to use that education</strong> to get a job.<br>Most people spend a whole lot of time at work. Maybe even half their lives...<br>But they say that, if you love what you do, you\'ll <strong>never work a day in your life!</strong><br><br>So what would you <strong>love</strong> to do?<br>'+
		'<div class="optionitem">Help others in the <span data-industry="Medicine" class="hightext finale">medical</span> profession.</div><div class="optionitem">Solve the world\'s problems as an <span data-industry="Engineering and Technology" class="hightext finale">engineer or developer.</span></div><div class="optionitem">Connect with others as a <span data-industry="Business" class="hightext finale">businessperson.</span></div><div class="optionitem">Make people think in a <span data-industry="Creative" class="hightext finale">creative</span> profession.</div>';

	var sourcestext = '<strong>Sources and Data: </strong><br>'+
		'<a href="http://bit.ly/XUzUSi">Wage Gap Data</a><br>'+
		'<a href="http://bit.ly/2a0PpiN">Poverty Rates by Race</a><br>'+
		'<a href="http://bit.ly/1U7v78r">Education Statistics for Black Women</a><br>'+
		'<a href="http://kaiserf.am/2j79CuD">Population Distribution By Gender</a><br>'+
		'<a href="http://bit.ly/2kNtI9I">Native American Demographic Information</a><br>'+
		'<a href="http://bit.ly/2kWP9q5">Population Distribution By Race</a><br>'+
		'<a href="http://bit.ly/2laePSg">Income Distribution By Race (Table A-1)</a><br>'+
		'<a href="http://bit.ly/1mwDCeT">LGBT Population Demographics</a>';

	/*
	var creditstext = '<span class="statictext">Masha</span>: Audio, Production/Team Management, Research, Powerpoint dev, & Design<br><span class="statictext">Sara</span>: Narrative Design, UI Design, & Motivational Consulting<br><span class="statictext">Lauren</span>: Research, Data Modeling, & Design<br><span class="statictext">Gloriane</span>: Concept & Background Art<br><span class="statictext">Silvia</span>: Additional Art<br><span class="statictext">Vivian</span>: Code Monkey<br><br>Play Again?'
	*/

	var creditstext = '<img src="clearcredits.png" height="60%" class="logo" />'

	var toughtext = 'Moving forward can be tough, especially when the odds are stacked against you.<br>';

	var goalstext = '';
	if (educationIntent == playerEduc) {
		goalstext = 'Hard work, circumstance, and luck helped keep you on track.<br>';
	} else {
		'Maybe sometimes those odds are stacked too high.<br>';
	}

	var ethClasstext = 'You were born <span class="statictext">'+playerEthnicity+'</span> into a <span class="statictext">'+ playerEcon +'</span> home.<br>';

	var wealthtext = '';
	if (playerEcon == "Wealthy") {
		wealthtext = 'There were a lot of opportunities for you to try new things and explore, and there was lots of room for error.<br>';
	} else {
		wealthtext = 'Your family often had to make sacrifices, some of which kept you from taking advantage of opportunities that might have helped you grow.<br>';
	}

	var didbesttext = '<br>Even though school could be challenging, you did your best. In the end, that\'s all anyone can do. ';

	var eductext = ''
	if (playerEduc == "Dropout") {
		eductext = 'Life got in the way before you could finish high school. Your family went through severe financial setbacks, and you made sacrifices to help out.<br>';
	} else {
		eductext = 'You graduated high school and achieved <span class="statictext">'+playerEduc+'</span> degree.<br>';
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
		var locationtext = 'You found a home in a <span class="statictext">'+localeIntent+'</span> area.<br>';
		var jobtext = 'You managed to get a job in <span class="statictext">'+industryIntent+'</span> as <span class="statictext">'+playerJobName+'.</span><br>';
		var salarytext = 'Your estimated earnings are <span class="statictext">'+playerSalary+'</span> per year.<br>';

		if (playerEthnicity != "White" || playerGender != "Man") {
			compskewtext = 'Your salary may have been skewed due to your demographic. As a <span class="statictext">'+playerEthnicity+'</span> <span class="statictext">'+playerGender+'</span>, the starting salary you are offered is often lower and negotiating compensation can be difficult.';
		} else {
			compskewtext = '';
		}

		var peopletext = '<br><img src="people.png" height="35%"" text-align="center" class="logo" />'

		finaletext = toughtext+goalstext+ethClasstext+wealthtext+didbesttext+eductext+locationtext+jobtext+salarytext+compskewtext+peopletext;

		var bindsources = function () {
			$('html').on('click', sources)
			if (test == "true") {
				$('.content').append("<br><br>Your Ethnicity is: "+playerEthnicity+"<br>"+
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
			$('.content').css({
				'margin-top': '2%'
			});
			$('.content').html(
				finaletext
			).fadeIn(fadeDuration, bindsources)
		});
	}

	function sources() {
		$('html').off('click')
		var bindcredits = function () {
			$('html').on('click', credits)
		}
		$('.content').fadeOut(fadeDuration, function() {
			$('.content').css({
				'margin-top': '20%'
			});
			$('.content').html(
				sourcestext
			).fadeIn(fadeDuration, bindcredits)
		});
	}

	function credits() {
		$('html').off('click')
		$('.content').fadeOut(fadeDuration, function() {
			$('.content').css({
				'background' : 'none',
			});
		  $(this).html(creditstext).fadeIn(fadeDuration);
		  $('html').on('click', function () {window.location.reload()});
		});
	}
});