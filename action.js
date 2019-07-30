
$(document).ready(function(){
    $("#p1").hover(function(){
        $(this).css("color","blue");

    })
    $("#p1").mouseleave(function(){
        $(this).css("color","lightblue")
    })

    $("#bt1").click(function(){
        //alert("aaaa");
        $("#img1").animate({
            height:'toggle'
    })
    })
    $("#bt2").dblclick(function(){
        $("#img2").slideToggle(10000);
    })
    $("#bt3").click(function(){
        $("#img2").stop();
    })
    $("#p3").mouseenter(function(){
        $("#p2").css("color","red");


    })
    $("#p3").mouseleave(function(){
        $("#p2").css("color","black");
    })
    $("#n1").keypress(function(){
        $("#n1").css("color","yellow");
    })
})



