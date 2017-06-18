$(document).ready(function() {
    $('.single-item').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    //----------Плавный переход по ссылкам------------//
    var menu = $('#menu'),
        gamburger = $('#gamburger');

    menu.find('a').click(function(e){
        e.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

    //-----------Фиксированный header---//
    $(window).scroll(function(){
        var header = $('#header')
        header.addClass('header-fixed');
        header.next().addClass('slider-padding-top');
    });

    //----------item-buy hover----//
    $('.item-buy').hover(function(){
        $(this).parent().find('.item-header').toggleClass('header-aqua');
    });

    //----------menu------------//
    if( $(window).width() <= '992' ){
        menu.addClass('navbar-collapse');
        gamburger.addClass('visible');
        gamburger.click(function(){
            $(this).children().toggleClass('menu-icon-close');
            if (menu.hasClass('nav-open')){
                menu.slideUp().removeClass('nav-open');
            } else {
                menu.slideDown().addClass('nav-open');
            }
        });
    }

    //----------валидация------------//
    var myValidate=function(){

        $('.form-item',this).each(function(){
            var $this = $(this);
            if($('.valid-item',this).val() == ''){
                $this.addClass('has-error');
                $this.find('.valid-item').after('<span class="form-icon error"></span>');
            } else {
                $this.removeClass('has-error');
                $this.find('span').remove('.error');
            }
        });
    };
    $('form').submit(function(e){
        myValidate.call(this);
        if ( $('.form-item',this).hasClass('has-error') ){
            return false;
        } else {
            $('.valid-item',this).val("");
            e.preventDefault();
        }
    });
});
