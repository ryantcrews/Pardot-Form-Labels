//Pardot Form: Get rid of labels

<script type="text/javacript">

var labels = document.querySelectorAll("label");
var i = labels.length;
while (i--) {
	var label = labels.item(i);
	var text = label.textContent;
	label.parentNode.classList.contains("required") && (text += "");
	label.nextElementSibling.setAttribute("placeholder", text);
}
</script>
