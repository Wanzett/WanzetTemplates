$(function() {
    
        var header = $("#header");
        var introHeight = $("#intro").innerHeight();
        var offset = $(window).scrollTop();
    var navMobile = $("#nav-toggle");
    var navBarMobile = $("#nav");
    
    $(window).on("scroll", function() {
        ScrollUpdate(offset);
        
        offset = $(this).scrollTop();    
        
        ScrollUpdate(offset);
    });
    
    function ScrollUpdate(offset)
    {
            if(offset > introHeight) {
           header.addClass("fixed");
           }
        else {
            header.removeClass("fixed");
        }
    }
    
    navMobile.on("click", function() {
        if(navMobile.hasClass("active"))
            {
                navMobile.removeClass("active");
                navBarMobile.css({display: "none"})
            }
        else
        {
            navMobile.addClass("active");
            navBarMobile.css({display: "block"})
        }
        if(offset <= introHeight && navMobile.hasClass("active"))
            {
                header.addClass("fixed");
            }
    });
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        
        var block = $(this).data("scroll")
        var blockOffset = $(block).offset().top + 5;
        
        $("#nav a").removeClass("active");
        $(this).addClass("active");
        
        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });
    
        $("[data-collapse]").on("click", function(event) {
        event.preventDefault();
        
        let block = $(this).data("collapse");
        
        $(this).toggleClass("active");
        });
});