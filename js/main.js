
//////////////////// ドロワーメニュー ////////////////////
function toggleNav() {
    let body = document.body;
    let hamburger = document.getElementById('js_hamburger');

    hamburger.addEventListener('click', function() {
        body.classList.toggle('nav_open');
    });
}
toggleNav();

//////////////////// トップフェードイン ////////////////////
$(window).load(function() {
    $("body").addClass("loaded");
	setTimeout (function(){
		$(".mv_title").addClass("loaded");
	},1400);
	setTimeout (function(){
		$(".mv_text").addClass("loaded");
	},1900);
});



//////////////////// フェードイン ////////////////////
$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200){
                $(this).addClass('scrollin');
            }
        });
    });
});



//////////////////// スムーススクロール (HTMLにidを付与) ////////////////////
$(function(){
    $('a[href^="#"]').click(function(){
      // let speed = 1000;
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? 'html' : href);
        let position = target.offset().top - 20;
        $("html, body").animate({scrollTop:position}, 700, "swing");
        return false;
    });
});