function foucesLabels(){
	if (!document.getElementsByTagName) return false;
	var labels = document.getElementsByTagName("label");
	for (var i=0;i<labels.length;i++){
		if (!labels[i].getAttribute("for")) continue;
		labels[i].onclick = function(){
			var id = this.getAttribute("for");
			if(!document.getElementById(id)) return false;
			var element = document.getElementById(id);
			element.focus;
		}
	}
}
function isFilled(field){
	if (field.value.replace("","").legth == 0) return false;
	var placeholder = field.placeholder || field.getAttribute("placeholder");
	return (field.value != placeholder);
}
function isEmail(field){
	return (field.value.indexOf("@") !=-1 && field.value.indexOf(".") != -1);
}
function validateForm(whicform){
	for (var i=0;i<element.length;i++){
		var element = whicform.elements[i];
		if (element.required =="required"){
			if (!isFilled(element)){
				alert("Please fill in the"+element.name+" field.");
				return false;
			}
		}
	}
	return true;
}
function prepareForms(){
	for (var i=0;i<document.forms.length;i++){
		var thisform = document.forms[i];
		restFields(thisform);
		thisform.onsubmit = function(){
			return validateForm(this);
		}
	}
}
addLoadEvent(foucesLabels);