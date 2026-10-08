import $ from 'jquery';
$(function() {

  $('#botao').on('click', function() {
    $('#texto').text('O jQuery moderno com Vite está funcionando perfeitamente!');
    $('#texto').css('color', 'green');
  })
})