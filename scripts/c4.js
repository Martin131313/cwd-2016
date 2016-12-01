

// var parni_broevi = [2, 4, 6, 8, 10];
// console.log(parni_broevi);

// console.log(parni_broevi[4]);


// var iminja = ['Bojan', 'Janko', 'Petko', 'Stanko'];
// console.log(iminja);
// console.log(iminja[3]);
// console.log(iminja.length);

// var nizi = [
// 	['Peto', 'Janko', 'Stanko'],
// 	[123, 543, 563],
// 	[true, false, true],
// 	[1.85, 2.32, 1.11]
// ];

// console.log(nizi);
// console.log(nizi[0][2]);
// console.log(nizi.length);


// var n = [];
// n[10] = 'Skopje';
// n[20] = 'Veles';
// n[22] = 'Ohrid';

// console.log(n);
// console.log(n.length);

// var student = [];
// student['ime'] = 'Pero';
// student['prezime'] = 'Perovski';

// console.log(student);
// console.log(student.length);

// console.log(student['ime']);
// console.log(student.ime);



// var profesor = {
// 	ime: 'Janko',
// 	prezime: 'Jankovski',
// 	predmet: 'Astro Fizika'
// };

// console.log(profesor);
// console.log(profesor.ime);
// console.log(profesor['ime']);



// var test = [
// 	{ime: 'Pero Perovski', ocena: 5},
// 	{ime: 'Janko Jankovski', ocena: 4},
// 	{ime: 'Stanko Stankovski', ocena: 2},
// 	{ime: 'Goran Goranovski', ocena: 5},
// 	{ime: 'Ivan Ivanovski', ocena: 1},
// ];

// console.log(test);
// console.log(test[2] .ime);
// console.log(test[1] .ocena);
// console.log(test[4] .ime);
// console.log(test[4] .ocena);
// console.log(test[0]);




// var pozdrav = function(){
// 	console.log('Zdravo Svetu!');
// }

// pozdrav();


// var pozdravIme = function(ime){
// 	console.log('Zdravo' + ime);
// }

// pozdravIme('Pero');

// function pozdravIme(ime){
// 	console.log('Zdravo' + ime);
// }

// pozdravIme('Pero');



// var funkcii = {
// 	eden: function(){
// 		console.log('Funkcija br 1');
// 	},
// 	dva: function(){
// 		console.log('Funkcija br 2');
// 	},
// 	tri: function(){
// 		console.log('Funkcija br 3');
// 	}
// };


// funkcii.dva();
// funkcii['dva']();


// var broj = 'tri';
// funkcii[broj]();
//funkcii['tri']();


 

//function A(i){
	// console.log(i);
// }

// var D = 'fasfasf';
// var E = 'saddas';
// var F = 'sadasd';


// A(D, E, F)





var avtomobil = {
	
		dacia: function (c){
			return (11000 * 61.5) / c;
		},
		
		skoda: function (c){
			return (14000 * 61.5) / c;
		},
		
		vw: function (c){
			return (20000 * 61.5) / c;
		},
		
		audi: function (c){
			return (30000 * 61.5) / c;
		},
		
		bmw: function (c){
			return (50000 * 61.5) / c;
		}
	};

function presmetka(br, cena, avt){
	var p = br * 365 / 19 * cena; // kolku pari godishno se davaat za cigari
	return avtomobil[avt](p);
}

console.log(presmetka(16, 90, 'dacia'));
console.log(presmetka(16, 90, 'bmw'));















