 $(document).ready(function() {
 	$('.s').prepend('<button align="center" onclick="pro();"> New Size </button>');

 });
 function pro(){
 	$('.grid').remove();
	var ans = prompt("enter the grid size");
	grid(ans);
}
function grid(ans) {
	if(ans == ""  || ans == null){
		ans = 16;
	}

$('.grid-container').remove();
$('body').append('<div align="center" class="grid-container"></div>');
for(var i =1;i<=ans;i++){
$('.grid-container').append('<tr class='+i+'></tr>');
for(var j =1;j<=ans;j++) {
$('.'+i).append('<div class="grid"></div>');
}
//j=1;
}
$(".grid").css({height:"50px" , width:"50px",border:"1px solid black",display:"inline-block"});
$('.grid-container').css({
	borer:"1px sloid black"

});

// $(".grid").hover( function (){
//
// 	$(this).css({backgroundColor: 'blue'});
// });

 $(".grid").hover( function (){
   $(this).css({backgroundColor: 'red'});
 },
 function() {
   $(this).css({backgroundColor: 'blue'});

 });



}
