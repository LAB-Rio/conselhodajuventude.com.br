console.log('lab.RIO');

$('#vejamais').find('li:gt(5)').addClass('toggletr').hide()
.end().append(
  $('<li class="show_more_btn Aligner"><a class="button">veja mais</a></li>').click(function(){
      $(this).siblings('.toggletr').toggle(333);
      if ($(this).hasClass('expanded')){
          $(this).html('<li class="show_more_btn Aligner"><a class="button">Veja mais</a></li>');
          $(this).removeClass('expanded');
      } else{
          $(this).html('<li class="show_more_btn Aligner"><a class="button">Veja menos</a></li>');
          $(this).addClass('expanded');
      }
 })
);

$('.fevereiro').click(function(){
  $('.middle-fevereiro').slideToggle('slow', function() {
    // Animation complete.
  });
  $('.reply').toggle();
});

$('.marco').click(function(){
  $('.middle-marco').slideToggle('slow', function() {
    // Animation complete.
  });
});

$('.abril').click(function(){
  $('.middle-abril').slideToggle('slow', function() {
    // Animation complete.
  });
});


$('.maio').click(function(){
  $('.middle-maio').slideToggle('slow', function() {
    // Animation complete.
  });
});

$('.junho').click(function(){
  $('.middle-junho').slideToggle('slow', function() {
    // Animation complete.
  });
});

$('.julho').click(function(){
  $('.middle-julho').slideToggle('slow', function() {
    // Animation complete.
  });
});

$('.agosto').click(function(){
  $('.middle-agosto').slideToggle('slow', function() {
    // Animation complete.
  });
});


$('.setembro').click(function(){
  $('.middle-setembro').slideToggle('slow', function() {
    // Animation complete.
  });
});

$('.outubro').click(function(){
  $('.middle-outubro').slideToggle('slow', function() {
    // Animation complete.
  });
});

$(".toggle-mnu").click(function() {
  $(this).toggleClass("on");
  $(".main-mnu").slideToggle();
  return false;
});





$(document).ready(function(){
	
	// Set menu overlay height
	var showHeightForMe = $( window ).height();		
	$('.menu_nav_overlay').css('height', showHeightForMe);	

	$('#menu_overlay').css('display','none');

});

	  function callMenu() {
		$("body").toggleClass('');
		$("body").css('overflow-y', 'scroll');
		$("body").css('position', 'fixed');
		$(".zopim").css('opacity', '0');
		$("#menu_overlay").animate({'right' : '0%'}, "easeOutElastic");		
		$('#menu_overlay').css('display','block');
	  };
	  
	  function closeMenu() {
		$("body").toggleClass('changeMe');
		$("body").css('overflow-y', 'visible');
		$("body").css('position', 'initial');
		$(".zopim").css('opacity', '1');
		$("#menu_overlay").animate({'right' : '100%'}, "easeOutElastic");	
		$('#menu_overlay').css('display','none');
	  };  
  
	function randomImg2() {
		var Show = 4, // Number of logos to show
		rnd, value, i;
			myImages1 = new Array ();
			  myImages1[0] = "collabco";
			  myImages1[1] = "lsp";
			  myImages1[2] = "avant"; 
			  myImages1[3] = "agx"; 
			  myImages1[4] = "betslipp"; 
			  myImages1[5] = "rjh"; 
			  myImages1[6] = "doha";
			  myImages1[7] = "myb";
			
			  
			
		
		for (i = 0; i < Show; i++) { // pick numbers
		  rnd = Math.floor(Math.random() * myImages1.length); 
		  value = myImages1.splice(rnd,1)[0]; // remove the selected number from the array and get it in another variable
		
		
		  $("#client_box_" + i).removeClass();	
		  $("#client_box_" + i).addClass(value);
		}    
	};