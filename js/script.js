$(document).ready(function(){
	"use strict";
	$(".icon").on("click",function(){
		$("nav ul").toggleClass("mostrar");
	});
});


$(document).ready(function(){
	"use strict";
	$(".menu2").on("click", function(){
		$(".segundo").toggleClass("ver-2");
	});
});


$(document).ready(function(){
	"use strict";
	$(".menu3").on("click", function(){
		$(".tercero").toggleClass("ver-3");
	});
});
