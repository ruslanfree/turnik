function fun1(){
	var check;
	 check = document.getElementById('one');
	if(check.checked){
		alert('вы выбрали крюки');
	}else{
		alert('not');
	}
}
function fun2(){
	var check;
	 check = document.getElementById('two');
	if(check.checked){
		confirm('вы выбрали петли');
	}else{
		alert('not');
	}
}
function fun3(){
	var checkas;
	 checkas = document.getElementById('callMe');
	if(checkas.click){
		confirm('позвонить');
	}else{
		alert('хуйло');
	}
}
function fun6(){
	var rng = document.getElementById('r1');
	var par = document.getElementById('test');
	par.style.zoom = rng.value + "%"
}
$('.img-slider').slick({
dots:true,
speed:300,
autoplay:true,
autoplaySpeed:3000


});

