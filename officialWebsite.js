$(document).ready(function(){

/*$('button').click(function(){
  $('#navigation').toggle();

});*/

 $('#menu-button, #navigation').hover(open,close);
 
 function open(){
   $('#navigation').show();
 };
 
 function close(){
  $('#navigation').hide();
 }

 
});