// showpic函数，改变图片
function showPic(whicpic){
	var source = whicpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src", source);
	var text = whicpic.getAttribute("title");
	var description = document.getElementById("description");
	description.firstChild.nodeValue = text;
}
// 阻止缩略图onlick事件以显示大图
function prepareLinks(){
	if (!document.getElementsByTagName ) return false;  // 如果浏览器不支持停止使用
	if (!document.getElementById) return false;
	if (!document.getElementById("placeholder")) return false;
	var links = document.getElementsByTagName("a");     // 获得所有的a连接
	for (var i = 0; i < links.length; i++){            // 遍历a
		if (links[i].getAttribute("class") == "popup"){   // 找到class属性为“popup”的a连接
			links[i].onclick = function(){
				showPic(this);
				return false;
			}
		}
	}
}
addLoadEvent(prepareLinks);


