
$("ul").on( "click", "li", function () {
   $(this).toggleClass("completed");
   // $(this).css(liStyle);
   //Alternative way
   // $(this).css({
   //    "color": "gray",
   //    "text-decoration": "line-through" 
   // });
});
// var liStyle = {
//    "color": "gray",
//    "text-decoration": "line-through"
// } Define a Object and then pass it
//Click on X to delete To-DO
// on() is for the benefit of li that may not be in page when it load
$("ul").on( "click", "span", function (event) {
      $(this).parent().fadeOut(500, function() {
         $(this).remove();
      })
      event.stopPropagation();
});

$("input[type=text]").keypress( function (event) {
   if (event.which === 13){
      // New toto 
      var newTodo = $(this).val();
      $(this).val(""); // will clear up the input 
      //Create new li and add to ul
      $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + newTodo + "</li>");
   }
}); 

$(".fa-plus").click(function(){
   $("input[type=text]").fadeToggle();
});