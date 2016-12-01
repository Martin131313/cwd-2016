function cigari(br, cena, avtomobil){
	switch(avtomobil){
		case 'dacia':
			return (11000 * 61.5) / (br * 365 / 19 * cena);
		break;
		case 'skoda':
			return (14000 * 61.5) / (br * 365 / 19 * cena);
		break;
		case'vw':
			return (20000 * 61.5) / (br * 365 / 19 * cena);
		break;
		case 'audi':
			return (30000 * 61.5) / (br * 365 / 19 * cena);
		break;
		case 'bmw':
			return (50000 * 61.5) / (br * 365 / 19 * cena);
		break;				
	}
}



var broj_na_cigari = 19;
var kutija_cena = 63;


console.log('dacia' + cigari(broj_na_cigari ,kutija_cena ,'dacia'));
console.log('skoda' + cigari(broj_na_cigari, kutija_cena ,'skoda'));
console.log('vw' + cigari(broj_na_cigari, kutija_cena ,'vw'));
console.log('audi' + cigari(broj_na_cigari, kutija_cena ,'audi'));
console.log('bmw' + cigari(broj_na_cigari, kutija_cena ,'bmw'));