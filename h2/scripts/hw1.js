function i2c(i){
	var output = i * 0.39;
		console.log(output);
}

function c2i(c){
	var output = c * 2.54;
		console.log(output);
}
function p2k(p){
	var output = p / 2.2;
		console.log(output);
}
function k2p(k){
	var output = k * 2.2;
		console.log(output);
}
function m2k(m){
	var output = m * 1.6;
		console.log(output);
}
function k2m(k){
	var output = k * 0.62;
		console.log(output);
}
function l2g(l){
	var output = l * 0.26;
		console.log(output);
}
function g2l(g){
	var output = g / 0.26;
		console.log(output);
}
function b2m(b){
	var output = b * 1024;
		console.log(output);
}
function m2b(m){
	var output = m / 1024;
		console.log(output);
}

i2c(1);
c2i(1);
p2k(1);
k2p(1);
m2k(1);
k2m(1);
l2g(1);
g2l(1);
b2m(1);
m2b(1);