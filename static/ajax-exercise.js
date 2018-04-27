"use strict";


// PART 1: SHOW A FORTUNE

function replaceFortune(results) {
	let fortune = results;
	$('#fortune-text').html(fortune);
}


function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    $.get('/fortune', replaceFortune);
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};
    $.get(url, formData, function(results){
    	let forecast = results.forecast;
    	$('#weather-info').html(forecast);
    });


    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    let url = "/order-melons.json";

    //jquery($) html(id) for values entered
    let formData = {'melon_type': $("#melon-type-field").val(), 'qty': $("#qty-field").val()};

    $.post(url, formData, function (results){
    	let code = results.code;
    	let message = results.msg;
    	let string = code + ' ' + message;
    	
    	// put message in html
    	$('#order-status').html(string);

    	// adds order-error css class if code is ERROR
    	if (code === "ERROR") {
    		$('#order-status').addClass('order-error');
    	} else {
    		$('#order-status').removeClass('order-error');
    	}
    });

    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


