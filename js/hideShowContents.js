function hideShowContents() {
	var orderedList = document.getElementsByClassName("orderedList");
	var showButton = document.getElementsByClassName("showButton");

	for (i = 0; i < orderedList.length; i++) {
		if (orderedList[i].style.display === "none") {
			orderedList[i].style.display = "block";
			showButton[i].innerHTML = "dölj";
		} else {
			orderedList[i].style.display = "none";
			showButton[i].innerHTML = "visa";
		}
	}
}
