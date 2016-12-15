// for ( let i = 100; i > 0 ; i = i - 3){
// 	if(i % 2 == 0){
// 		console.log(i);
// 	}
// }

var thumbs = document.querySelectorAll('thumb');
var modal = document.querySelector('pic.modal');

for(let i = 0; i < thumbs.lenght; i++){
	// console.log(thumbs[i]);

	thumbs[i].addEventListener('click', function(){
		// console.log(this);
		modal.querySelector('img').src = this.src;
	});
}

