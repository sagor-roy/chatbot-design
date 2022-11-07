// JavaScript Document

var $ = jQuery.noConflict();

// sticky header
$(window).scroll(function(){
    var sticky = $('.head-bttm'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) sticky.addClass('isStuck');
    else sticky.removeClass('isStuck');
  }); 

/*---------------------------------------------------
    Language and Currency Dropdowns
----------------------------------------------------- */	

	
$('#currency, #language, #sort').hover(function() {
    $(this).find('ul').stop(true, true).slideDown('fast');
  },function() {
    $(this).find('ul').stop(true, true).css('display', 'none');
  }); 
  

  $(document).ready(function() {

    // Vertical Megamenu
    
   $('#btn-click').on("click", function() {
      $('#cat').slideToggle();
    });	

    // Hambergar Megamenu
 	
   $('#sticky-btn').on("click", function() {
      $('#sticky-cat').toggle();
    });	 
    
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if (height <= 0) {
            $('#sticky-cat').hide();            
            $('#mask2').removeClass("masker");
        }
      });

    $(".sub-menu a").click(function(){
        $(this).siblings(".sub-sub-menu").removeClass("d-none");
        $(this).closest(".sub-menu").siblings("li").addClass("d-none");
        $(this).closest("ul").siblings("ul").addClass("d-none");
        $(this).closest(".sub-menu").siblings("h4").addClass("d-none");
        $(this).addClass("d-none");
    });
    $(".navBack").click(function(){
        $(this).closest(".sub-sub-menu").addClass("d-none");
        $(this).closest(".sub-sub-menu").siblings("a").removeClass("d-none");
        $(this).closest(".sub-menu").siblings("li").removeClass("d-none");
        $(this).closest("ul").siblings("ul").removeClass("d-none");
        $(this).closest(".sub-menu").siblings("h4").removeClass("d-none");
    });
    			            
 });

 $(document).mouseup(function(e){
    var container = $("#sticky-cat");

    // If the target of the click isn't the container
    if(!container.is(e.target) && container.has(e.target).length === 0){
        container.hide();
    }
});


/********* Owl Carousel *********/
 			
$(document).ready(function() {
		  
	$('#ban-carousel').owlCarousel({
		items:1,
		loop:true,
		dots: true, 
		navText: false,  
        autoplay:true,    
		nav: false,
		margin: 0,
		responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
	});

    $("#deal-carousel").owlCarousel({
        autoplay: false,
        items : 1, 
		navText: ["PREVIOUS","NEXT"],
		dots: false,       
		nav: true,
		mouseDrag:true,
		lazyLoad : false,
		responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
      });	

    $("#cate-carousel").owlCarousel({
        autoplay: false,
        items: 6, 
		navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
		dots: false,       
		nav: true,
		mouseDrag:true,
		lazyLoad : false,
		responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        800:{
            items:4
        },
        1000:{
            items:6
        }
    }
      });

    $("#pro-carousel2, #pro-carousel11, #pro-carousel12").owlCarousel({
        autoplay: false,
        items: 4, 
		navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
		dots: false,       
		nav: true,
		mouseDrag:true,
		lazyLoad : false,
		responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        800:{
            items:3
        },
        1000:{
            items:4
        }
    }
      });

    $("#pro-carousel5").owlCarousel({
        autoplay: false,
        items: 1, 
		navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
		dots: false,       
		nav: true,
		mouseDrag:true,
		lazyLoad : false,
		responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
      });	

    $("#pro-carousel6").owlCarousel({
        autoplay: false,
        items: 3, 
		navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
		dots: false,       
		nav: true,
		mouseDrag:true,
		lazyLoad : false,
		responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
      });

	$('#pro-carousel').owlCarousel({
		items: 4,
		loop:true,
		dots: true, 
		navText: false,      
		nav: false,
		margin: 0,
		responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        800:{
            items:3
        },
        1000:{
            items:4
        }
    }
	});
		
	$('#pro-carousel3, #pro-carousel4, #pro-carousel7, #pro-carousel8, #pro-carousel9, #pro-carousel10').owlCarousel({
		items: 5,
		loop:true,
		dots: true, 
		navText: false,      
		nav: false,
		margin: 0,
		responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        800:{
            items:3
        },
        1000:{
            items:5
        }
    }
	});	     

    $("#blog-carousel").owlCarousel({
        autoplay: false,
        items: 3, 
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		dots: false,       
		nav: true,
		mouseDrag:true,
		lazyLoad : false,
		responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
      });

}); 

/* ############ countdown js ########## */

$(document).ready(function() {
		  
	$('.cd100').countdown100({
        endtimeYear: 0,
        endtimeMonth: 0,
        endtimeDate: 10,
        endtimeHours: 12,
        endtimeMinutes: 0,
        endtimeSeconds: 0,
        timeZone: "" 
      });
			            
});

/* ############ Swiper slider ########## */

$(document).ready(function() {
		  
	var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
			            
});


 /*##################### Horizental accordion tab ############################*/

 $(document).ready(function () {
    $('#horizontalTab, #horizontalTab2, #horizontalTab3').easyResponsiveTabs({
      type: 'default', //Types: default, vertical, accordion           
      width: 'auto', //auto or any width like 600px
      fit: true,   // 100% fit in a container
      closed: 'accordion', // Start closed if in accordion view
      activate: function(event) { // Callback function if tab is switched
      var $tab = $(this);
      var $info = $('#tabInfo');
      var $name = $('span', $info);
      $name.text($tab.text());
      $info.show();
      }
    });

    $('#verticalTab').easyResponsiveTabs({
      type: 'vertical',
      width: 'auto',
      fit: true
    });
  
  });
 
 /* ############ scroll top arrow js ########## */ 
 
  $(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 500) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
  });

  $(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 });
        return false;
    });
  
  }); 

// ######## onclick search and highlight #########

$("#search .form-control").on('click', function( e ){
    e.stopPropagation();
    $("#search").addClass("is-active");
});
$(document).on('click', function( e ){
    if(e.target.className!="#search .form-control")
    $("#search").removeClass("is-active");
});

$("#search .form-control").on('click', function( e ){
    e.stopPropagation();
    $("#mask").addClass("masker");
});
$(document).on('click', function( e ){
    if(e.target.className!="#search .form-control")
    $("#mask").removeClass("masker");
});

// ########

$("#sticky-btn").on('click', function( e ){
    $(".popup-menu-bx").addClass("is-active");
    $("#mask2").addClass("masker");
});

$("#mask2").on('click', function( e ){
    $(".popup-menu-bx").removeClass("is-active");
    $(this).removeClass("masker");
});

// ######## End onclick search and highlight #########
  
// ######## Auto Width Select Option #########

$(document).ready(function() {
    $('#resizing_select').change(function(){
      $("#width_tmp_option").html($('#resizing_select option:selected').text()); 
      $(this).width($("#width_tmp_select").width());  
    });
    $('#resizing_select2').change(function(){
      $("#width_tmp_option2").html($('#resizing_select2 option:selected').text()); 
      $(this).width($("#width_tmp_select2").width());  
    });
  });

//accordion

jQuery(function() {
    $(".expand").on( "click", function() {
      $(this).next().slideToggle(200);
      $expand = $(this).find(">:first-child");
      
      if($expand.text() == "+") {
        $expand.text("-");
      } else {
        $expand.text("+");
      }
    });
  });

// ion-range-slider
$(document).ready(function () {
    $("#range_01").ionRangeSlider({
        type: "double",
        grid: true,
        min: 0,
        max: 2500,
        from: 100,
        to: 1600,
        prefix: "Rs"
    });
});
  
 // Dark-Light Mode js
 
jQuery(function ($) {
	"use strict";
    // toogle color mode
    $('#switch-mode').on('click', function() {
        $('body').toggleClass('dark-mode');
        if ($('body').hasClass('dark-mode')) {
          $(this).find('.dark-mode').addClass('d-none');
          $(this).find('.light-mode').removeClass('d-none');
        } else {
          $(this).find('.dark-mode').removeClass('d-none');
          $(this).find('.light-mode').addClass('d-none');
        }
      });
	
});

 // Newstikker js

 $(document).ready(function() {
    $('.my-news-ticker').AcmeTicker({
        type:'marquee',
        direction: 'left',
        speed: 0.05
    });
}) 

 // Top newstticker off-on function

$(document).ready(function() {

$('.cross-btn').on("click", function() {
    $(this).siblings(".slide-txt").slideToggle();
    $(this).addClass("d-none");
    $(this).siblings(".open-btn").removeClass("d-none");
    });
    
$('.open-btn').on("click", function() {
    $(this).siblings(".slide-txt").slideToggle();
    $(this).addClass("d-none");
    $(this).siblings(".cross-btn").removeClass("d-none");
    });

}); 

// Star Rating Active jquery

$('.stars span a').on("click", function() {
    $(this).addClass("active");
    $(this).siblings("a").removeClass("active");
    });

// Select Color Active jquery

$('.entry').on("click", function() {
    $(this).addClass("active");
    $(this).siblings(".entry").removeClass("active");
});

$('.pay-lst li').on("click", function() {
  $(this).addClass("selected");
  $(this).siblings(".pay-lst li").removeClass("selected");
});


 // Drag and cross option

 $(document).ready(function () {
    $(".update-bx").on("click", function () {
      $(this).children(".close-btn").removeClass("d-none");
    });
  
    $(".close-btn").on("click", function () {
      $(this).parent(".update-bx").addClass("d-none");
    });
  
    $(function () {
  
      $(".sortable").sortable({
        connectWith: ".sortable",
        scroll: false,
        cursor: "move",
        start: function (e, ui) {
          ui.placeholder.height(ui.item.height());
        },
      });
    });
  });

// Product Slider

$(document).ready( function () {
  $('#glasscase').glassCase({ 
       'thumbsPosition': 'bottom', 
      'widthDisplayPerc' : 100,
      isDownloadEnabled: false,
  });
});

// Modal slick slider open jquery

// $('#quickview').on('shown.bs.modal', function (e) {
//     $('#glasscase').glassCase('setPosition');
//     alert('hii');
//     $('.align-center').addClass('open');
//   })


// $('body').on('click', '.btn-quick', function() {
//   alert('hii');
//   $('#quickview').on('shown.bs.modal', function (e) {
//     $('#glasscase').glassCase('setPosition');
//     alert('hii');
//     $('.align-center').addClass('open');
//   })
// });



// Tooltip

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

 /*----- cart-plus-minus-button -----*/	
 
 $(document).ready(function() {
 
    $(".cart-plus-minus").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
     $(".qtybutton").on("click", function() {
       var $button = $(this);
       var oldValue = $button.parent().find("input").val();
       if ($button.text() == "+") {
         var newVal = parseFloat(oldValue) + 1;
       } else {
          // Don't allow decrementing below zero
         if (oldValue > 0) {
           var newVal = parseFloat(oldValue) - 1;
           } else {
           newVal = 0;
         }
         }
       $button.parent().find("input").val(newVal);
     }); 
    
});

  
function HandleBrowseClick()
{
    var fileinput = document.getElementById("browse");
    fileinput.click();
    var textinput = document.getElementById("filename");
    textinput.value = fileinput.value;
}


function readURL(input) {
    if (input.files && input.files[0]) {
  
      var reader = new FileReader();
  
      reader.onload = function(e) {
        $('.image-upload-wrap').hide();
  
        $('.file-upload-image').attr('src', e.target.result);
        $('.file-upload-content').show();
  
        $('.image-title').html(input.files[0].name);
      };
  
      reader.readAsDataURL(input.files[0]);
  
    } else {
      removeUpload();
    }
  }
  
  function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.image-upload-wrap').show();
  }
  $('.image-upload-wrap').bind('dragover', function () {
      $('.image-upload-wrap').addClass('image-dropping');
    });

/*----- cart-plus-minus-button (checkout-page) -----*/	   
    
$(document).ready(function() {   
  $('.add').click(function () {
      if ($(this).prev().val() < 10) {
      $(this).prev().val(+$(this).prev().val() + 1);
      }
  });
  $('.sub').click(function () {
      if ($(this).next().val() > 1) {
      if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
      }
  });	
  
});   

$(function() {
  $(".new-address").on("click",function() {
    $(".new-address-bx").slideToggle(this.checked);
  });
  
  $(".added-address").on("click",function() {
    $(".address-bx").slideToggle(this.checked);
  });
  
  $(".btn-add").on("click",function() {
    $(".shipping-form-bx").slideToggle(this.checked);
  });
});

  
/*----- custom switch with content jquery -----*/	   
    
$(document).ready(function() {   
  
  $(".off").click(function(){
    $(this).closest(".radio").addClass("off");
  })
  $(".on").click(function(){
    $(this).closest(".radio").removeClass("off");
  })
  
});  

/*--- emojies show on text area ---*/

jQuery(document).ready(function($) {

	$('.add-smiles > span').on("click", function() {
    $(this).parent().siblings(".smiles-bunch").toggleClass("active");
  });

});

/*--- Live Chat js ---*/

$(function() {
  var INDEX = 0;  
   
  $("#chat-circle").click(function() {    
    $("#chat-circle").toggle('scale');
    $(".chat-box").toggle('scale');
  })
  
  $(".chat-box-toggle").click(function() {
    $("#chat-circle").toggle('scale');
    $(".chat-box").toggle('scale');
  })
  
})













