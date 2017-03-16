function clock(){
	var currentTime = new Date(); 
	var currentHours = currentTime.getHours()
	var currentMinutes = currentTime.getMinutes()
	var currentSeconds = currentTime.getSeconds()
	
	var amPM = ""
	
	if(currentHours < 12){
		amPM = "A.M."
	}else{
		amPM = "P.M."
	}

	//sets time to 12 hour
	if (currentHours > 12){
		currentHours = currentHours - 12
	}

	//sets time to 12 if time is 0
	if (currentHours === 0){
		currentHours = 12
	}

	//adds 0 to minutes
	if (currentMinutes < 10){
		currentMinutes = '0' + currentMinutes
	}
	
	//adds 0 to seconds
	if (currentSeconds < 10){
		currentSeconds = '0' + currentSeconds
	}

	var hours = currentHours + ":"
	var min = currentMinutes + ":"
	var sec = currentSeconds 
	amPM = amPM 

	//changes seconds color
	if(sec % 2 === 1){
		$('.sec').css('color', '#b5c5e0') 
	}else{
		$('.sec').css('color', 'white') 
	}

	//changes minute color
	if(sec % 2 === 1){
		$('.min').css('color', '#7f8182') 
	}else{
		$('.min').css('color', '#92b1e8') 
	}

	//changes hours color 
	if(sec % 2 === 1){
		$('.hours').css('color', '#92b1e8') 
	}else{
		$('.hours').css('color', '#b5c5e0') 
	}

	if(amPM === "A.M."){
		$('.ampm').css('color', '#f9f7ae') 
	}else{
		$('.ampm').css('color', '#bab9b2') 
	}


	$(".hours").html(hours)
	$(".min").html(min)
	$(".sec").html(sec)
	$(".ampm").html(amPM)
	 
}
	clock()
	$(document).ready(function(){
		setInterval('clock()', 100)
	})
