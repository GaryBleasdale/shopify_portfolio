
//navbar border-shadow on scroll

$(document).ready(function(){
  $(window).on("scroll",function(){
  var wn = $(window).scrollTop();
  if(wn > 20){
      $(".navbar").css("background","white");  
      $(".navbar").css("box-shadow","0px 5px 20px #888888");
  }
  else{
      $(".navbar").css("box-shadow","none");
      $(".navbar").css("background","rgba(0,0,0,0)");     
  }
});
});

//hamburguer menu

let mobileMenu=document.body.querySelector(".mobile-menu")
let mobileHeaderLinks=document.body.querySelector(".mobile-header-links")


mobileMenu.addEventListener('click', function(){
  if (mobileHeaderLinks.style.display==='inline'){
  mobileHeaderLinks.style.display='none'}else{
    mobileHeaderLinks.style.display='inline'
  }
})

mobileHeaderLinks.addEventListener('click', function(){
  mobileHeaderLinks.style.display='none'
})




