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