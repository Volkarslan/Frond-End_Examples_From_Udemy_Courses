// $("li").click(function(){
// 	console.log($(this).css("color"))
// 	if ($(this).css("color") === "rgb(128, 128, 128)"){
// 		$(this).css("text-decoration", "none");
// 		$(this).css("color", "black");
// 	}else{
// 		$(this).css("text-decoration", "line-through");
// 		$(this).css("color", "gray");
// 	}
// });
$("ul").on("click","li", function(){
	$(this).toggleClass("completed");
});
$("ul").on("click","span",function(event){
	$(this).parent().addClass("completed");
	event.stopPropagation();
	$(this).parent() .fadeOut("slow",function(){
		$(this).remove();
		});
});
$("input[name='newTask'").keypress(function(){
	if(event.which === 13) {
		var newToDoTask = $(this).val();
		$(this).val("");  
		$("ul").append('<li><span><i class="fas fa-trash-alt"></i></span> '+newToDoTask+"</li>"); 
		}
});
$("button").on("click",function(){
	$("input[name='newTask'").fadeToggle();
});