'use strict'

let div;
let canvas;
let deltaX = 0;
let deltaY = 0;
let left = 5;
//let div1_left = 0;
//let dist = 0;
let curleft = 0;

let createElements = function() {
	canvas = document.createElement("div");
	div = document.createElement("div");
	if(div && canvas) {
		canvas.classList.add("canvas");
		canvas.setAttribute("id", "canvas")
		document.getElementsByClassName("cont")[0].appendChild(canvas);
		div.classList.add("rect");
		div.setAttribute("id", "carret");
		canvas.appendChild(div);
	}
}

window.onkeydown = function move_left(){
	let x=canvas.offsetLeft;
	let y=div.offsetLeft;
	console.log(x);
	console.log(y);
	if(event.keyCode==37){
		if (y>x)
			div.style.left = y - left + 'px';
		else 
			div.style.left = x + 'px';
	}
	else 
		if(event.keyCode==39){
			if (y+div.offsetWidth<x+canvas.offsetWidth){	
				div.style.left = y + div.offsetWidth + left + 'px';
			}
			else 
				div.style.left = x + canvas.offsetWidth + 'px';
		}
};
/*
window.onmousemove = function () {
	if (event.clientX >= canvas.getBoundingClientRect().left && event.clientX <= canvas.getBoundingClientRect().right-(carret.getBoundingClientRect().right - carret.getBoundingClientRect().left)) {
		div.style.left =  event.clientX + 'vh';
	}
	curleft = div.getBoundingClientRect().left;
	left = 0;
}
*/
document.addEventListener("DOMContentLoaded", createElements);
