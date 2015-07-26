
function showImage(obj){
	alert("aaaaa");
	document.getElementById("content").style.display = "block";
	document.getElementById("img_showing").src = document.getElementById(obj.id).src;
	document.getElementById("imgContent").style.display = "block";
}