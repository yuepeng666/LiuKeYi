// 构建函数moveElement用来移动元素
function moveElement(elementID,final_x,final_y,interval){
	if  (!document.getElementById) return false;
	if	(!document.getElementById(elementID)) return false;
		var elem = document.getElementById(elementID);
		if (elem.movement) {        // 清楚setTimeout未完成的事件
			clearTimeout(elem.movement);
		}
		var xpos = parseInt(elem.style.left);// 通过parseInt获得left的数值（整数），parseFloat可获得浮点数
		var ypos = parseInt(elem.style.right);
		if (xpos == final_x&&ypos == final_y){
			return false;
		}
		if (xpos < final_x){
			xpos = xpos+20;
		}
		if (xpos > final_x){
			xpos = xpos-20;
		}
		if (ypos < final_y){
			ypos = ypos+20;
		}
		if (ypos > final_y){
			ypos = ypos-20;
		}
		elem.style.left = xpos + "px";
		elem.style.right = ypos + "px";
		var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
		elem.movement = setTimeout(repeat,interval);
}

function prepareSlideshow(){
	if (!document.getElementsByTagName) return false;
	var preview = document.getElementById("preview");
	preview.style.position = "absolute";
	preview.style.left = "0px";
	preview.style.top = "0px";
	var list = document.getElementById("linklist");
	var links = list.getElementsByTagName("a");
	links[0].onmouseover = function(){  //鼠标覆盖时执行
		moveElement("preview",-0,0,.5);
	}
	links[1].onmouseover = function(){
		moveElement("preview",-600,0,10);
	}
	links[2].onmouseover = function(){
		moveElement("preview",-1200,0,10);
	}
    links[3].onmouseover = function(){
		moveElement("preview",-1800,0,10);
	}	
	links[4].onmouseover = function(){
		moveElement("preview",-2400,0,10);
	}
	links[5].onmouseover = function(){
		moveElement("preview",-3000,0,10);
	}
	links[6].onmouseover = function(){
		moveElement("preview",-3600,0,10);
	}
	links[7].onmouseover = function(){
		moveElement("preview",-4200,10);
	}	
}
addLoadEvent(prepareSlideshow);