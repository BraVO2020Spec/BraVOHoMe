
function ibg(){

	$.each($('.ibg'), function(index, val) {
	if($(this).find('img').length>0){
	$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
	}
	});
	}
	
	ibg();
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
$('.blok div').addClass('blok');
$(document).ready(function(){
	animateDiv();
	animateDiv1();
	animateDiv2();
	animateDiv3();
	animateDiv4();
	animateDiv5();
	animateDiv6();
	animateDiv7();
	animateDiv8();
	animateDiv9();
	animateDiv10();
	animateDiv11();
	animateDiv12();
	
});

function makeNewPosition(){
	
	// Get viewport dimensions (remove the dimension of the div)
	var h = $('.box').height() - 50;
	var w = $('.box').width() - 50;
	
	var nh = Math.floor(Math.random() * h);
	var nw = Math.floor(Math.random() * w);
	
	return [nh,nw];    
	
}

function animateDiv(){
	var newq = makeNewPosition();
	$('.a').animate({ top: newq[1], left: newq[0] },15000, function(){
	animateDiv();        
	});
	
};
function animateDiv1(){
	var newq = makeNewPosition();
	$('.b').animate({ top: newq[1], left: newq[0] },15000, function(){
	animateDiv1();        
	});
	
};
function animateDiv2(){
	var newq = makeNewPosition();
	$('.c').animate({ top: newq[0], left: newq[1] },15000, function(){
	animateDiv2();        
	});
	
};
function animateDiv3(){
	var newq = makeNewPosition();
	$('.d').animate({ top: newq[0], left: newq[1] },15000, function(){
	animateDiv3();        
	});
	
};
function animateDiv4(){
	var newq = makeNewPosition();
	$('.e').animate({ top: newq[0], left: newq[1] },15000, function(){
	animateDiv4();        
	});
	
};
function animateDiv5(){
	var newq = makeNewPosition();
	$('.f').animate({ top: newq[0], left: newq[1] },15000, function(){
	animateDiv5();        
	});
	
};
function animateDiv6(){
	var newq = makeNewPosition();
	$('.g').animate({ top: newq[0], left: newq[1] },15000, function(){
	animateDiv6();        
	});
	
};
function animateDiv7(){
	var newq = makeNewPosition();
	$('.h').animate({ top: newq[0], left: newq[1] },15000, function(){
	animateDiv7();        
	});
	
};
function animateDiv8(){
	var newq = makeNewPosition();
	$('.i').animate({ top: newq[0], left: newq[1] },15000, function(){
	animateDiv8();        
	});
	
};
function animateDiv9(){
	var newq = makeNewPosition();
	$('.j').animate({ top: newq[0], left: newq[1] },15000, function(){
	animateDiv9();        
	});
	
};
function animateDiv10(){
	var newq = makeNewPosition();
	$('.k').animate({ top: newq[0], left: newq[1] },15000, function(){
	animateDiv10();        
	});
	
};
function animateDiv11(){
	var newq = makeNewPosition();
	$('.l').animate({ top: newq[0], left: newq[1] },15000, function(){
	animateDiv11();        
	});
	
};
function animateDiv12(){
	var newq = makeNewPosition();
	$('.m').animate({ top: newq[0], left: newq[1] },15000, function(){
	animateDiv12();        
	});
	
};