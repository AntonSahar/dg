let w=document.getElementById("prices").scrollWidth;
let c=document.getElementById("prices").clientWidth;
console.log(w);
console.log(c);
$("#prices").scrollLeft((w-c)/2);


function choosePrice(el,n){
	let arr=document.querySelector('.prices');
	for(var i=0; i<arr.children.length;i++){
		arr.children[i].classList.remove("choose");
	}

	el.classList.add("choose");
	let x1=document.getElementById("prices").scrollWidth;
	let x2=document.getElementById("prices").clientWidth;
	if(n==1) $("#prices").scrollLeft(0);
	else if(n==2) $("#prices").scrollLeft((x1-x2)/2);
	else if(n==3) $("#prices").scrollLeft((x1-x2)+0.5);
}