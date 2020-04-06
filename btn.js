var Links = {
  setColor:function(color){
    // var list =document.querySelectorAll('.this');
    // var i = 0;
    // while(i<list.length){
    // list[i].style.color = color;
    // i = i + 1;
    // }
    $('.this').css('color',color);
  }
}
var Body = {
setColor:function (color){
  //document.querySelector('body').style.color=color;
  $('body').css('color',color);
},
setBackgroundColor:function (color){
  //document.querySelector('body').style.backgroundColor=color;
  $('body').css('backgroundColor',color);
}
}
function wow(self){
  if(self.name === 'night'){
    $( '.btnNight' ).addClass( 'btnDay' );
    $( '.btnNight' ).removeClass( 'btnNight' );
    $(function(){
      $('.btnDay').text('day');
    });
    self.name = 'day';
    Body.setBackgroundColor ('black');
    Body.setColor ('white');
    Links.setColor('lightyellow');
  } else {
    $( '.btnDay' ).addClass( 'btnNight' );
    $( '.btnDay' ).removeClass( 'btnDay' );
    $(function(){
      $('.btnNight').text('night');
    });
    self.name = 'night';
    Body.setBackgroundColor ('white');
    Body.setColor ('black');
    Links.setColor ('black');
  }
}
