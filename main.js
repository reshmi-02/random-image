var image=document.getElementById("image");
console.log(image);
var but=document.getElementById("but");
console.log(but);
var con=document.getElementById("container");
console.log(con);


but.addEventListener("click",generate);

function generate(){
	var picture=["images/burj.jpg","images/corin.jpg","images/delhi.jfif","images/kerala.jpg","images/ooty.jpg","images/taj.jpg","images/tamilnadu.jpg","images/korea.jfif","images/dubai.webp"];
	picture.forEach(function(){
		var b=Math.floor(Math.random()*(picture.length));
		image.src=picture[b];
		
	})
}