function hamburger() {
	var nav = document.getElementById("navigation");
	if (nav.style.display == "block") {
		nav.style.display = "none";
	} else {
		nav.style.display = "block";		
	}
}