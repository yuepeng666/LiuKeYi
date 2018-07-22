function showSection(id){
	var sections = document.getElementsByTagName("section");
	for ( var i=0;i<sections.length;i++){
		if (sections[i].getAttribute("id") != id) { // id=id则隐藏
			sections[i].style.display = 'none';
		}else{
			sections[i].style.display = "block";
		}
	}
}
function prepareInternalnav(){
	var articles = document.getElementsByTagName("article");
	var navs = articles[0].getElementsByTagName("nav");
	var nav = navs[0];

	var links = nav.getElementsByTagName("a");
	for (var i=0;i<links.length;i++){
		var sectionId = links[i].getAttribute("href").split("#")[1]; //数组第一个元素索引是0，split可以把字符串分成多部分
		document.getElementById(sectionId).style.display = "none";
		links[i].destination = sectionId;
		links[i].onclick = function(){
			showSection(this.destination);
			return false;
		}
	}
}
addLoadEvent(prepareInternalnav);