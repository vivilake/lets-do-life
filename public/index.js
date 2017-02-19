$(document).ready(function() {
	var ethnicityArray = ["White", "Black", "Hispanic"]
	var genderArray = ["Male", "Female", "Trans Male", "Trans Female", "Nonbinary"]
	var economicArray = ["Poverty Line", "Working Class", "Middle Class", "Wealthy"]

	var playerEthnicity = ethnicityArray[Math.floor(Math.random() * ethnicityArray.length)];
	var playerGender = genderArray[Math.floor(Math.random() * genderArray.length)];

	var ethEconRoll = Math.floor(Math.random() * 100) + 1

	getWhiteEcon = function(x) {
		console.log(x)
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
		console.log(x)
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
		console.log(x)
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

	var playerEcon = myEcon(playerEthnicity)
	console.log(playerEthnicity)
	console.log(playerGender)
	console.log(ethEconRoll)
	console.log(playerEcon)

  $('html').css({
   	'background-color' : 'rgba(113, 66, 20, 1)',
   });
	$('.content').html("Let's talk for a moment.<br>The world is a big, complicated, and scary place...<br>But it's not all bad!<br>After all, you're here. You're a hard worker. You can do this.<br>I believe in you.<br>So much that I'm going to help you.<br>We're going to go through life together.<br>So let's do it. Let's go!<br>");
	$('.content').append("<span class=\"decision1\">Let's Do Life</a>")

	$('.decision1').on('click', decision1)
	
	var decision1text = "You can't get anywhere in life without a good education.<br>At least, that's what people say.<br>Let's take their word for it, just this once.<br>It's pretty tough to get into school these days.<br>But I think you've got what it takes.<br>So what kind of education are you looking for?<br><span class=\"decision2\">Select One</a>";

	var decision2text = "Not only is getting into school tough, but so is getting an education.<br>But you know what, life isn't just about studying.<br>It's also about, well, living!<br>So where would you want to live?<br><span class=\"decision3\">Select One</a>"

	var decision3text = "The scariest thing about living in a new place is worrying about money.<br>So it's important to use that education to get a job.<br>Most people spend a whole lot of time at work. Maybe even half their lives...<br>That gave me the chills.<br>But they say that, if you love what you do, you'll never work a day of your life!<br>So what would you love to do?<br><span class=\"finale\">Select One</a>"

	var fadeDuration = 1200;

	function decision1() {
		$('.content').fadeOut(fadeDuration, function() {
		  $('html').css({
			   'background-image' : 'url(decision1.jpg)',
			   'background-size' : 'cover'
			});
		  $(this).html(decision1text).fadeIn(fadeDuration, bindevent);
		});
		bindevent = function () {
			$('.decision2').on('click', decision2)
		}
	}

	function decision2() {
		$('.content').fadeOut(fadeDuration, function() {
		  $('html').css({
			   'background-image' : 'url(decision2.jpg)',
			   'background-size' : 'cover'
			});
		  $(this).html(decision2text).fadeIn(fadeDuration, bindevent);
		});
		bindevent = function () {
			$('.decision3').on('click', decision3)
		}
	}

	function decision3() {
		$('.content').fadeOut(fadeDuration, function() {
		  $('html').css({
			   'background-image' : 'url(decision3.jpg)',
			   'background-size' : 'cover'
			});
		  $(this).html(decision3text).fadeIn(fadeDuration, bindevent);
		});
		bindevent = function () {
			$('.finale').on('click', finale)
		}
	}

	function finale() {
		$('.content').html("Your Ethnicity is: "+playerEthnicity+"<br>")
		$('.content').append("Your Gender is: "+playerGender+"<br>")
		$('.content').append("ethEconRoll: "+ethEconRoll+"<br>")
		$('.content').append("playerEcon: "+playerEcon+"<br>")
	}
});