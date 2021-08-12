// 滑動到最上方的效果---------------
$(window).scroll(function(){
  if($(window).scrollTop()<=0)
  {$(".nav").addClass("top");
   // $(".ch").addClass("topcolor");
   // $(".en").addClass("topcolor");
   $(".explore").addClass("top");
  }
  else
  {$(".nav").removeClass("top");
  // $(".ch").removeClass("topcolor");
  // $(".en").removeClass("topcolor");
  $(".explore").removeClass("top");
  }
  
});

// 滑鼠移動效果----------------------
$(window).mousemove(function(evt){
  
  var pagex = evt.pageX;
  var pagey = evt.pageY;
  
  //1.三角形移動
  $(".tri").css("transform","translateX("+pagex/20+"px) translateY(-98%)");
  
  
  var y= pagey-$("#first").offset().top;
  var x= pagex-$("#first").offset().left;
 //x,y純計算＃section_about距離左邊以及上面的距離
  
   //2.滑鼠移動
  $("#cross").css("left",x+"px");
  $("#cross").css("top",y+"px");
  
  //限定滑鼠只在#first出現
  if(y<70||y>$("#first").outerHeight()){
    $("#cross").hide();
  }else{
     $("#cross").show();
  }
  
  //3.線的移動
 $(".curveline1").css("transform","translateX("+y/-20+"px)"); $(".curveline2").css("transform","translateX("+y/-25+"px)"); $(".curveline3").css("transform","translateX("+y/-25+"px)");
// $(".namelogo").css("transform","translateX("+y/-25 - 100+"px)translateY("+x/-25+"px)");
$(".namelogo").css("transform","translateX(-100px)translateY("+x/-25+"px)");

});

  //4.名字的移動


// 開頭動畫設定（先把body隱藏,再讓動畫隱藏）

setTimeout(hidePage, 500);
  function hidePage() {
      $('.page').hide();
  }

setTimeout(hideAnimation, 4000);
    function hideAnimation() {
      $('.showArea').animate({'opacity': '0'},1000);
      $('.showArea').animate({'margin-top': '-200%'},1300);
      $('.page').show();
    }

//設定漢堡選單按鈕-------------------

var click=0;
function menuToggle(){
  if(click%2!=0){
    $(".b1").animate({"margin-left": "80px"},400);
    $(".b2").animate({"margin-left": "80px"},600);
    $(".b3").animate({"margin-left": "80px"},800);
    $(".bigmenuli").animate({"opacity":"1"},800);
    $(".line").addClass("lineclick");
  }else{
    $(".b1").animate({"margin-left": "0px"},400);
    $(".b2").animate({"margin-left": "0px"},600);
    $(".b3").animate({"margin-left": "0px"},800);
    $(".bigmenuli").animate({"opacity": "0"},800);
    $(".line").removeClass("lineclick");

  }
};

$("#menubtn").click(function() {
  $("#bigmenu").fadeToggle(800);
    click+=1;
      menuToggle();
});   

$('.b1,.b2,.b3').click(function() {
  $('#bigmenu').fadeOut(800);
    click+=1;
      menuToggle();
});   

//設定點擊menu的滑動效果

var targetArray = ['#resume', '#works', '#footer'];
$('#b1,#b2,#b3').click(function() {
 var btnName = $(this).attr('id').charAt(1) - 1;
  $('body,html').animate({
    scrollTop: $(targetArray[btnName]).offset().top,
       },800);
 });

var s = skrollr.init();

