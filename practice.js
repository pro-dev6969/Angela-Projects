$("h1").css("color","blue");

$("input").keypress(function(event){
    var e = event.key;
    $("h1").text(e);
});

// to show which button got clicked

for(var i=0 ; i<5 ; i++){
    document.querySelectorAll(".btn")[i].addEventListener("click",function f(){
        console.log($(this).attr("id"));
    })
}