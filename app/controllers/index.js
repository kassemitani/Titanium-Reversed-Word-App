function doClick(e) {
	alert($.label.text);
}

function submitTapped(e) {
	var reversedWord =  $.txtWord.value.split("").reverse().join("");
	$.lblResult.text = reversedWord;
}

function copyTapped(e) {

	Ti.UI.Clipboard.setText($.lblResult.text);
}

$.index.open();
