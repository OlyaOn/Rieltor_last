$(document).ready(function(){
    
    //modal

     $('[data-modal=consultation]').on ('click', function(){
      $('.overlay, #consultation').fadeIn('slow');

  });
  $('.modal_close').on('click', function(){
    $('.overlay, #consultation, #thanks').fadeOut('slow');
  });
  

  //валидация 2
//чтобы не писать несколько раз один и тот же код - валидация форм
 function valideForms(form){
    $(form).validate({
      rules:{
        name: "required",
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: "Пожалуйста, введите своё имя",
        phone: "Пожалуйста, введите свой номер телефона",
        email: {
          required: "Пожалуйста, введите свою почту",
          email: "Неправильно введен адрес почты"
        }
      }

    });

  };
  valideForms('#consultation-form');
  valideForms('#consultation form');
  valideForms('#order form');

  $('input[name=phone]').mask("+7(999) 999-99-99");

  //берем все формы//е щтменить стандарное поведение формы
  $('form').submit(function(e){
    e.preventDefault();
      let $form = $(this);
      if(! $form.valid()) return false;
    $.ajax({
      type: "POST",
      url: "mail.php",
                //данные которые хочу отправить

      data: $(this).serialize()
    }).done (function(){
      $(this).find("input").val("");//очистим все инпуты
      $('#consultation').fadeOut();
      $('#thanks, .overlay').fadeIn('slow');
     $('form').trigger('reset'); 
    });
    return false;
  });
    

          //Smooth scroll and pageup

          $(window).scroll(function(){
            if($(this).scrollTop() > 1600) {
              $('.pageup').fadeIn();
            } else{
              $('.pageup').fadeOut();
            }
          });
          /* "a[href*=#]:not([href=#])" */
          $("a[href=#up]").click(function(){
                  const _href = $(this).attr("href");
                  $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                  return false;
          });
    
          new WOW().init();
          
        
        });
        


        window.addEventListener('DOMContentLoaded', () => {
          const menu = document.querySelector('.menu'),
          hamburgerName = document.querySelector('.hamburger_name'),
          menuItem = document.querySelectorAll('.menu_item'),
          hamburger = document.querySelector('.hamburger');
        
          hamburger.addEventListener('click', () => {
              hamburger.classList.toggle('hamburger_active');
              menu.classList.toggle('menu_active');
              hamburgerName.classList.toggle('hamburger_name_active');
          });
        
          menuItem.forEach(item => {
              item.addEventListener('click', () => {
                  hamburger.classList.toggle('hamburger_active');
                  menu.classList.toggle('menu_active');
                  hamburgerName.classList.toggle('hamburger_name_active');
              })
          })

         
        });

          (function($) {
            $.fn.animated = function(inEffect) {
              $(this).each(function() {
                var ths = $(this);
                ths.css("opacity", "0").addClass("animated").waypoint(function(dir) {
                  if (dir === "down") {
                    ths.addClass(inEffect).css("opacity", "1");
                  };
                }, {
                  offset: "90%"
                });
          
              });
            };
          })(jQuery);

          var $ScalebleBg = $(".scaleble-bg"),
    wh = $(window).height(),
    i = 50,
    lastScroll = 0;

$ScalebleBg.css('background-size','100%');

$(document).scroll(function() {
    
    if( $(document).scrollTop() > ($ScalebleBg.offset().top - wh) ) {
    
        var CurentScroll = $(this).scrollTop();
        
        if (CurentScroll > lastScroll) {
            i++;
        } else {
            i--;
        }
        
        lastScroll = CurentScroll;
        
        $ScalebleBg.css('background-size', i + '%');
      
    };
    
});



  

        
          