// var div1 = document.createElement('div');

// div1.innerText = 'Zdravo Svetu!';

// div1.style.color = '#ffffff';
// div1.style.backgroundColor = 'red';
// div1.style.height = '200px';

// console.log(div1);

// var body = document.querySelector('body');

// body.appendChild(div1);


// ova sum jas :D
// var body = document.querySelector('body');
// var ul1 = document.createElement('ul');

// var li1 = document.createElement('li');
// var li2 = document.createElement('li');
// var li3 = document.createElement('li');
// var li4 = document.createElement('li');
// var li5 = document.createElement('li');

// li1.innerText = 'eden';
// li2.innerText = 'dva';
// li3.innerText = 'tri';
// li4.innerText = 'myau';
// li5.innerText = 'cao';

// ul1.appendChild(li1);
// ul1.appendChild(li2);
// ul1.appendChild(li3);
// ul1.appendChild(li4);
// ul1.appendChild(li5);

// ul1.style.height = '200px';
// ul1.style.color = '#4286f4';
// ul1.style.backgroundColor = 'black';

// body.appendChild(ul1);







var body = document.querySelector('body');
var studenti = [
	{ime: 'Pero', prezime: 'Perovski', prosek: 7},
	{ime: 'Janko', prezime: 'Jankovski', prosek: 9},
	{ime: 'Stanko', prezime: 'Stankovski', prosek: 6.5},
	{ime: 'Petko', prezime: 'Petkovski', prosek: 9.5}
];

var table = document.createElement('table');
table.border = 1;

for(let i = 0; i < studenti.length; i++){
	var tr = document.createElement('tr');

	var td1 = document.createElement('td');
	td1.innerText = studenti[i].ime;
	tr.appendChild(td1);

	var td2 = document.createElement('td');
	td2.innerText = studenti[i].prezime;
	tr.appendChild(td2);

	var td3 = document.createElement('td');
	td3.innerText = studenti[i].prosek;
	tr.appendChild(td3);

	table.appendChild(tr);
}

body.appendChild(table);
table.style.backgroundColor = 'blue';
table.style.color = 'yellow';




// formular so ime, prezime, prosek, indeks , i edno kopche na kraj sto ke ni popolnuva tabela so podatoci (ime prezime prosek indeks i na kraj brishi )