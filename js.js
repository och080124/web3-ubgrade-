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
function nightDayHandler(self){
var target = document.querySelector('body');
if(self.value === 'night'){
  Body.setBackgroundColor ('black');
  Body.setColor ('white');
  self.value = 'day';
  Links.setColor('lightyellow');
} else {
  Body.setBackgroundColor ('white');
  Body.setColor ('black');
  Links.setColor ('black');
  self.value = 'night';
}
}
