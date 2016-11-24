// function i2c(i){
// 	var output = i * 0.39;
// 		return output;
// }

// var i = 8;
// console.log(i);


// var godini = 38;

// if(godini <36){
// 	console.log('Mlad/a si');
// } else {
// 	console.log('Star/a si');
// }



// OPERATORI ZA SPOREDBA
// < - pomal od 
// > - pogolemo od
// <= - pomalo ili ednakvo 
// >= - pogolemo ili ednakvo 
// == - ednakvo 
// != - razlichno (neednakvo) 
// === - apsolutno ednakvo
// !== - apsolutno neednakvo
// ! - negacija 


//OPERATORI ZA GRUPIRANJE
// && - i
// || - ili 
// () - zagradi za grupiranje
// ! - ja menuva vrednosta


// var a = 3;
// var b = 27;

// if(a > 4 && b < 50){
// 	console.log('VISTINA')
// } else {
// 	console.log('NEVISTINA!')
// } 



// i
// true && true = true
// true && false = false
// false && true = false
// false && false = false

// ili
// true || true = true
// true || false = true
// false || true = true
// false || false = false

// a = 5;
// b = 10;
// var c = 15;
// var d = 25;

// if(a < 10 && (b > 14 || c > 100) || !(d == 20)){
// 	console.log('vistina');
// } else {
// 	console.log('nevistina');
// }

// var e = 7;

// if(e <= 5){
// 	console.log('mal broj');

// } else if(e > 5 && e <= 10){
// 	console.log('sreden broj');

// } else {
// 	console.log('golem broj');
// }


// var ovoshje = 'Cresha';
// var dolzina_ovoshje = ovoshje.length;
// console.log(dolzina_ovoshje);

// function ubavoOvoshje(o){
	// var br = o.length;

	// if(br % 2 ==0){
	// 	return true;
	// } else {
	// 	return false;
	// }

	// return br % 2 == 0 ? true : false;

	// return br % 2 == 0;

// 	return o.length % 2 == 0;

// }


// var u = ubavoOvoshje('portokal');


// if(u){
// 	console.log('ovoshjeto e ubavo');
// } else {
// 	console.log('Ovoshjeto ne e ubavo');
// }





// function matematika(znak , a ,b){
// 	if(znak == '+'){
// 		return (a + b);
// 	} else if( znak == '/'){
// 		return (a / b);
// 	} else if (znak == '-'){
// 		return (a-b);
// 	} else if (znak == '*'){
// 		return (a * b);
// 	}


// }

// var s = matematika('+', 2, 4);
// console.log(s);//6

// var d = matematika('/', 6, 3);
// console.log(d);//2

// var o = matematika('-', 6, 3);
// console.log(o);//3

// var m = matematika('*', 6,3);
// console.log(m);//18




// var grad = 'Skopjea';

// switch(grad){
// 	case'Vels':
// 		console.log('Zdravo Veleshani!');
// 	break;
	
// 	case 'Skopje':
// 		console.log('Zdravo Skopjanischa!');
// 	break;
		
// 	case 'Ohrid':
// 		console.log('Zdravo Klimevci!');
// 	break;


// 	default:
// 		console.log('Zdravo nepoznat choveku!');
// 	break;				
// }



// function matematika(znak, a, b){
// 	switch(znak){
// 		case '+':
// 			return(a + b);
// 		break;

// 		case '/':
// 			return(a / b);
// 		break;
		
// 		case '-':
// 			return(a - b);
// 		break;
		
// 		case '*':
// 			return(a * b);
// 		break;			
// 	}   

// }


// var s = matematika('+', 2, 4);
// console.log(s);//6

// var d = matematika('/', 6, 3);
// console.log(d);//2

// var o = matematika('-', 6, 3);
// console.log(o);//3

// var m = matematika('*', 6,3);
// console.log(m);//18




//kolku cigari na den 15, kutija - 90 ,('Dacia');

//Ako prekineme da pushime za kolku vreme/godini ke kupime 
// Dacia - 11.000
// Skoda - 14.000
// Vw - 20.000
// Audi - 30.000
// BMW - 50.000