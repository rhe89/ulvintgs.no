function fix(){
	var iframe = document.getElementById("test");
	var businessDownl = document.createElement('iframe');
	businessDownl.src = "http://www.vg.no";
	document.body.appendChild(businessDownl);
}