function clock(){
	var currentTime = new Date(); 
	var currentHours = currentTime.getHours()
	var currentMinutes = currentTime.getMinutes()
	var currentSeconds = currentTime.getSeconds()

	if (currentHours > 12){

		currentHours = currentHours - 12
	}

	if (currentHours === 0){
		currentHours = 12
	}

	
	if (currentMinutes < 10){
		currentMinutes = '0' + currentMinutes
	}
	
	if (currentSeconds < 10){
		currentSeconds = '0' + currentSeconds
	}


	

	// var timeNow = currentHours + ":" + currentMinutes + ":" + currentSeconds
	var hours = currentHours + ":"
	var min = currentMinutes + ":"
	var sec = currentSeconds


	if(sec % 2 === 1){
		$('.sec').css('color', '#b5c5e0') 
	}else{
		$('.sec').css('color', 'white') 
	}

	if(sec % 2 === 1){
		$('.min').css('color', 'white') 
	}else{
		$('.min').css('color', 'white') 
	}

	if(sec % 2 === 1){
		$('.hours').css('color', 'white') 
	}else{
		$('.hours').css('color', '#b5c5e0') 
	}


	$(".hours").html(hours)
	$(".min").html(min)
	$(".sec").html(sec)
	 
	// $(".clock").html(timeNow)
}
clock()
$(document).ready(function(){
	setInterval('clock()', 100)
})
