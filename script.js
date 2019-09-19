//setting starting life
var player1_life = 20;
var player2_life = 20;
$(".counterL").html(player1_life);
$(".counterP").html(player2_life);

//click events
$(".minusOneL").click(function(){life_down1()});
$(".minusFiveL").click(function(){life5_down1()});
$(".plusOneL").click(function(){life_up1()});
$(".plusFiveL").click(function(){life5_up1()});
$(".minusOneP").click(function(){life_down2()});
$(".minusFiveP").click(function(){life5_down2()});
$(".plusOneP").click(function(){life_up2()});
$(".plusFiveP").click(function(){life5_up2()});
$('#restart').click(function(){newGame()});

//starting a new game
var newGame = function(){
   player1_life = 20;
   player2_life = 20;
  
   $('#left').css('color', 'white');
   setTimeout(function(){$('#left').css('color', 'lightgray');}, 700);
   $('#right').css('color', 'white');
   setTimeout(function(){$('#right').css('color', 'lightgray');}, 700);
   $('.counterL').css('transform', 'rotate('+360+'deg)');
   $('.counterP').css('transform', 'rotate('+360+'deg)');
   setTimeout(function(){$('.counterL').html(player1_life)}, 400);
   setTimeout(function(){$('.counterP').html(player2_life)}, 400);
   setTimeout(function(){$('.counterL').css('transform', 'rotate('+ -360 + 'deg)')},500);
   setTimeout(function(){$('.counterP').css('transform', 'rotate('+ -360 + 'deg)')},500);
}

//decreasing life of player1
var life_down1 = function(){  
    player1_life -= 1;
    $(".counterL").html(player1_life);
    //alert(player1_life);
    $('.counterL').css('color', '#8A0707');
   setTimeout(function(){$('.counterL').css('color', 'lightgray');}, 700);
}

//decreasing 5 life of player1
var life5_down1 = function(){  
   player1_life -= 5;
   $(".counterL").html(player1_life);
   //alert(player1_life);
   $('.counterL').css('color', '#8A0707');
  setTimeout(function(){$('.counterL').css('color', 'lightgray');}, 700);
}

//increasing life of player1
var life_up1 = function(){
    player1_life += 1;
    $(".counterL").html(player1_life);
    //alert(player1_life);
    $('.counterL').css('color', 'lightgreen');
    setTimeout(function(){$('.counterL').css('color', 'lightgray');}, 700);
}

//increasing 5 life of player1
var life5_up1 = function(){
   player1_life += 5;
   $(".counterL").html(player1_life);
   //alert(player1_life);
   $('.counterL').css('color', 'lightgreen');
   setTimeout(function(){$('.counterL').css('color', 'lightgray');}, 700);
}

//decreasing life of player2
var life_down2 = function(){  
    player2_life -= 1;
    $(".counterP").html(player2_life);
    //alert(player1_life);
    $('.counterP').css('color', '#8A0707');
   setTimeout(function(){$('.counterP').css('color', 'lightgray');}, 700);
}

//decreasing 5 life of player2
var life5_down2 = function(){  
   player2_life -= 5;
   $(".counterP").html(player2_life);
   //alert(player1_life);
   $('.counterP').css('color', '#8A0707');
  setTimeout(function(){$('.counterP').css('color', 'lightgray');}, 700);
}

//increasing life of player1
var life_up2 = function(){
    player2_life += 1;
    $(".counterP").html(player2_life);
    //alert(player1_life);
    $('.counterP').css('color', 'lightgreen');
    setTimeout(function(){$('.counterP').css('color', 'lightgray');}, 700);
}

//increasing 5 life of player1
var life5_up2 = function(){
    player2_life += 5;
    $(".counterP").html(player2_life);
    //alert(player1_life);
    $('.counterP').css('color', 'lightgreen');
    setTimeout(function(){$('.counterP').css('color', 'lightgray');}, 700);
}



