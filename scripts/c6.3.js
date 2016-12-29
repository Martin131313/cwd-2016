var url = 'http://api.openweathermap.org/data/2.5/weather?q=Skopje,mk&units=metric&APPID=87df752ff544d906183cc03f17b4c9fc';

fetch(url).then(function(result){

	result.json().then(function(r){

		console.log(r);
		// console.log(r.base);
		// console.log(r.main.temp);
		// console.log(r.wind.speed);
		
		document.querySelector('#tr3 > td').innerText = r.main.temp;
		document.querySelector('#tr5 > td').innerText = r.wind.speed;
		document.querySelector('#tr4 > td').innerText = r.main.pressure;
		document.querySelector('#tr1 > td').innerText = r.name;
		document.querySelector('#tr2 img').src = 'http://openweathermap.org/img/w/' + r.weather[0].icon + '.png';
	});
});





