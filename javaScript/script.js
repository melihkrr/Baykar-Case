 
 //Comment section js
 $(document).ready(function () {
        $("#comment-carousel").owlCarousel({
            items: 3,
            loop: true,
            margin: 20,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1, 
                    nav: false,
                },
                768: {
                    items: 2,
                    nav: false,
                },
                1024: {
                    items: 3, 
                    nav: false,
                }
            }
        });

        $("#prev-btn").click(function () {
            $("#comment-carousel").trigger('prev.owl.carousel');
        });

        $("#next-btn").click(function () {
            $("#comment-carousel").trigger('next.owl.carousel');
        });
    });

// Grow section js
    $(document).ready(function () {
   
      $("#main-section-carousel").owlCarousel({
          items: 1, 
          loop: false, 
          margin: 20,
          autoplay: false,
          nav: false,
          dots: false,
          responsive: {
              768: {
                  items: 3, 
                  loop: true,
              },
          },
      });
    
   
      $(".main-section-btn").click(function () {
   
          $(".main-section-btn").removeClass("main-section-btn-active");
          $(this).addClass("main-section-btn-active");
    
       
          var index = $(this).index();
          $("#main-section-carousel").trigger('to.owl.carousel', [index, 300]);
      });
    });
    