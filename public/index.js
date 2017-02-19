$(document).ready(function() {
	var ethnicityArray = ["White", "Black", "Hispanic"]
	var genderArray = ["Male", "Female", "Trans Male", "Trans Female", "Nonbinary"]
	var economicArray = ["Poverty Line", "Working Class", "Middle Class", "Wealthy"]

	var playerEthnicity = ethnicityArray[Math.floor(Math.random() * ethnicityArray.length)];
	var playerGender = genderArray[Math.floor(Math.random() * genderArray.length)];

	var ethEconRoll = Math.floor(Math.random() * 100) + 1

	getWhiteEcon = function(x) {
		if(x<=19) {
			return "Poverty Line"
		} else if (x>19 && x<=40) {
			return "Working Class"
		} else if (x>40 && x<=92) {
			return "Middle Class"
		}else {
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

	var playerEcon = myEcon(playerEthnicity);
	var educationIntent = null;
	var localeIntent = null;
	var industryIntent = null;
	/*
	console.log(playerEthnicity)
	console.log(playerGender)
	console.log(ethEconRoll)
	console.log(playerEcon)
	*/

  $('html').css({
   	'background-color' : 'rgba(113, 66, 20, 1)',
   });
	$('.content').html("Let's talk for a moment.<br>The world is a big, complicated, and scary place...<br>But it's not all bad!<br>After all, you're here. You're a hard worker. You can do this.<br>I believe in you.<br>So much that I'm going to help you.<br>We're going to go through life together.<br>So let's do it. Let's go!<br>");

	$('html').on('click', logoScreen)

	var logotext = '<img src="logo.png" class="logo" />'

	var decision1text = 'You can\'t get anywhere in life without a good education.<br>At least, that\'s what people say.<br>Let\'s take their word for it, just this once.<br>It\'s pretty tough to get into school these days.<br>But I think you\'ve got what it takes.<br>So what kind of education are you looking for?<br><span>Select One</span><br>'+
		'<div data-education="High School" class="optionitem decision2">High School</div><div data-education="Associates" class="optionitem decision2">Associates</div><div data-education="Bachelors" class="optionitem decision2">Bachelors</div>';

	var decision2text = 'Not only is getting into school tough, but so is getting an education.<br>But you know what, life isn\'t just about studying.<br>It\'s also about, well, living!<br>So where would you want to live?<br><span>Select One</span><br>'+
		'<div data-locale="City" class="optionitem decision3">City</div><div data-locale="Suburban" class="optionitem decision3">Suburban</div><div data-locale="Rural" class="optionitem decision3">Rural</div>';

	var decision3text = 'The scariest thing about living in a new place is worrying about money.<br>So it\'s important to use that education to get a job.<br>Most people spend a whole lot of time at work. Maybe even half their lives...<br>That gave me the chills.<br>But they say that, if you love what you do, you\'ll never work a day of your life!<br>So what would you love to do?<br><span>Select One</span><br>'+
		'<div data-industry="Medicine" class="optionitem finale">Medicine</div><div data-industry="Technology" class="optionitem finale">Technology</div><div data-industry="Business" class="optionitem finale">Business</div><div data-industry="Creative" class="optionitem finale">Creative</div>';

	var fadeDuration = 1200;

	function logoScreen() {
		var bindd1 = function () {
			$('html').on('click', decision1)
		}
		$('html').off('click');
		$('.content').fadeOut(fadeDuration, function() {
			$('.content').css({
				'background':'none',
				'text-align':'center'
			});
		 	$(this).html(logotext).fadeIn(fadeDuration, bindd1);
		});
	}

	function decision1() {
		console.log($(this))
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
		console.log(educationIntent)
		$('.content').fadeOut(fadeDuration, function() {
		  $('html').css({
			   'background-image' : 'url(decision2.jpg)',
			   'background-size' : 'cover'
			});
		  $(this).html(decision2text).fadeIn(fadeDuration, bindd3);
		});
	}

	function decision3() {
		console.log($(this))
		localeIntent = $(this).data('locale');
		console.log(localeIntent)
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
		console.log(industryIntent)
		$('.content').html("Your Ethnicity is: "+playerEthnicity+"<br>")
		$('.content').append("Your Gender is: "+playerGender+"<br>")
		$('.content').append("ethEconRoll: "+ethEconRoll+"<br>")
		$('.content').append("playerEcon: "+playerEcon+"<br>")
		$('.content').append("educationIntent: "+educationIntent+"<br>")
		$('.content').append("localeIntent: "+localeIntent+"<br>")
		$('.content').append("industryIntent: "+industryIntent+"<br>")
	}
});