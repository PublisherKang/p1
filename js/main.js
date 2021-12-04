$(document).ready(function(){
    // pc 메뉴 이동
    var nav = $(".gnb ul li");
    var cont = $("#container > section");

    var sub_nav = $(".gnb_mobile ul li")

    nav.click(function(c){
        c.preventDefault();
        var target = $(this);
        var index = target.index();
        //alert(index);

        var section = cont.eq(index);
        var offset = section.offset().top - 65;
        
        $("html, body").stop().animate({ scrollTop: offset },500);
        
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
    });

    sub_nav.click(function(c){
        c.preventDefault();
        var target = $(this);
        var index = target.index();
        //alert(index);

        var section = cont.eq(index);
        var offset = section.offset().top - 65;
        
        $("html, body").stop().animate({ scrollTop: offset },500);
        
        $("#mobile_sideMenu").css("display", "none");
    });



    $(".mobi_button").click(function(){
        $("#mobile_sideMenu").css("display", "block");
        $(".gnb_mobile").css({
            'transform': 'translateX(0)',
        })
    })

    $(".closeBtn").click(function(){
        $("#mobile_sideMenu").css("display", "none");
    })




    // mint wait
    $("#mintIn").click(function(e){
        e.preventDefault()
        $("#wait_pop").show();
    })

    $("#wait_pop").click(function(){
        $(this).hide();
    })

    



})