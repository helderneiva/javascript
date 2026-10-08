import './style.css';
import $ from 'jquery';

$(function () {
  $('.container h2').on('click', function () {
    $(this).next('p').slideToggle(300);
  });
  
});