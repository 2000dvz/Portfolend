// JavaScript Document
$(function(){
    
    const worksSlider = $('[data-slider="slick"]');
    
    /*Filter_______________________*/
    let filter = $("[data-filter]");//сохраняем в переменную filter наши сылки 
    
        filter.on ("click", function(event){//при клике на какуйто из сылок отменяем стандартное поведение сылки
        event.preventDefault();
            
        let cat = $(this).data('filter');//и сохраняем в переменную data('filter') в которой хранится название категорий
            
            if(cat == 'all'){//сравниваем значение 'all'
                $("[data-cat]").removeClass("hide");//если надо посмотреть все работы убираем значение "hide"
            } else{
                  $("[data-cat]").each(function(){
                let workCat = $(this).data('cat');
                      
                if(workCat != cat){
                    $(this).addClass('hide');
                    } else {
                        $(this).removeClass('hide');
                }
           });
        }
    });
    
    
    /*Modal______________________________*/
    
            const modalCall = $("[data-modal]");//вызывыем модальные окна по атрибуту modalCall, "const"-если значение не меняется
            const modalClose = $("[data-close]");//вызывыем модальные окна по атрибуту modalCall, "const"-если значение не меняется

            modalCall.on("click", function(event){
            event.preventDefault();

            let $this = $(this);
            let modalId = $this.data('modal');

            $(modalId).addClass('show');
            $("body").addClass('no-scroll');

            setTimeout(function(){
            $(modalId).find(".modal__dialog").css({
                transform: "scale(1)"
             });
         }, 200);
                
                
                
                worksSlider.slick('setPosition');
     });




            modalClose.on("click", function(event){
            event.preventDefault();

            let $this = $(this);
            let modalParent = $this.parents('.modal');
          
            modalParent.find(".modal__dialog").css({
                transform: "scale(0)"
             });

            setTimeout(function(){
            modalParent.removeClass('show');
            $("body").removeClass('no-scroll');
         }, 200);
         
      });

        /*закрывание при нажатии на фон модального окна*/
            $(".modal").on("click", function(event){
           let $this = $(this);

           $(this).find(".modal__dialog").css({
            transform: "scale(0)"
        });
           
            setTimeout(function(){
            $this.removeClass('show');
            $("body").removeClass('no-scroll');
         }, 200);

      });
        /*при нажатии на само модальное окно что оно не закрывалось*/
            $(".modal__dialog").on("click", function(event){
            event.stopPropagation();
      });
    
    
    
    
     /*Slider http://kenwheeler.github.io/slick/_______________________*/
    
    
    worksSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,//стрелки убрали
        dots: true //точки добавили
    });
    
    
    $(".slickPrev").on("click", function(event){
        event.preventDefault();
        
        let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');
        
        currentSlider.slick("slickPrev");
    });
    
     $(".slickNext").on("click", function(event){
        event.preventDefault();
         
         let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');
         
         
         currentSlider.slick("slickNext");
    });
    
    
    
    
    /*Mobile nav*/
    
    const  navToggle = $("#navToggle");
    const nav = $("#nav");
    
    
    navToggle.on("click", function(event){
        event.preventDefault();
        nav.toggleClass("show");
    });
    
});