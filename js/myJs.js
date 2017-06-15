$(document).ready(function() {
    $(".fancybox").fancybox();
    $(".slider").not('.slick-initialized').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    //---------back-to-top-----//
    var pos = $('#header').find('.header-title').offset().top;
    $(window).scroll(function(){
        if ($(window).scrollTop() >= pos){
            $('#back-to-top').addClass('show');
        } else {
            $('#back-to-top').removeClass('show');
        }
    });
    //----------Плавный переход по ссылкам------------//
    $('#back-to-top').click(function(){
        $('html, body').animate({scrollTop: 0},500);
    });
    $('#menu').find('.navbar-nav a').click(function(e){
        e.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    //-----------header-strip-----------//
    setTimeout("$('.header-title').find('h1').addClass('strip-faid-in')", 2000);
    //--------------animate stock!!!!!!!!!!!!!!!!!!!!-----//
    var pos = $('.stock-animation').offset().top-$(window).height();
    $(window).scroll(function(){
        if ($(window).scrollTop() >= pos){
            var index = 1;
            setInterval(function () {
                if (index<=5){
                    $('#stock-img'+index).addClass('stock-show');
                    index++;
                } else {
                    index == 1;
                }
            }, 500);
        }
    });
    //------------product-foto hover----------//
    $('.product-item').hover(function(){
        $('img',this).toggleClass('img-scale');
    });
    //----------map active-----------//
    $('#our-contact').find('.map-not-active').click(function(){
        $(this).addClass('map-active');
    });
    //----------menu------------//
    $('#gamburger').click(function(){
        var $this = $(this);
        $this.parents('nav').toggleClass('nav-open');
        $this.children().toggleClass('icon-bar-close');
    });
    //----------валидация------------//
    var modalRemove = function(){
        var $this = $(this);
        $this.css('display','none');
        $this.after('<div class="text-center submit-info"> <p>Ваша заявка отправлена</p> <p>Спасибо за заказ</p> <button type="button" class="close btn" data-dismiss="modal" aria-hidden="true">Закрыть</button> </div>');
    }
    var myValidate=function(){

        $('.form-group',this).each(function(){
            var $this = $(this);
            if($('.valid-item',this).val() == ''){
                $this.addClass('has-error has-feedback');
                $this.find('.valid-item').after('<span class="fa-icon fa-exclamation form-control-feedback"></span>');
            } else {
                $this.removeClass('has-error');
                $this.find('span').remove('.form-control-feedback');
            }
        });
    };
    $('form').submit(function(){
        myValidate.call(this);
        if ( $('.form-group',this).hasClass('has-error') ){
            return false;
        } else {
            if ($(this).parent().hasClass('modal-body')){
                modalRemove.call(this);
            } else {
                $('#sendModal').modal('show');
            }

        }
    });
});
