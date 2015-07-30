function showImage(obj){
	generateImageContent();
	lightbox_mask.style.transition-property = "width";
	lightbox_mask.style.-webkit-transition-property = "width";
	ightbox_mask.style.transition-duration = ".5s";
	lightbox_mask.style.-webkit-transition-duration = ".5s";

}	

function generateImageContent(){
	var lightbox_mask = document.createElement("DIV");
	lightbox_mask.id = "lightbox_mask";
	document.body.appendChild(lightbox_mask);
	var lightbox_content = document.createElement("DIV");
	lightbox_content.id = "lightbox_content";
	lightbox_mask.appendChild(lightbox_content);
	var myimage = document.createElement("img");
	myimage.src = obj.src;
	lightbox_content.appendChild(myimage);
	return lightbox_mask;
}
