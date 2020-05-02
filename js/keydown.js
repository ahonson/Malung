function tangenter(e) {
	var modals = document.getElementsByClassName("modal");
	for (var i = 0; i < modals.length; i++) {
		if (modals[i].style.display == "block") {
			mapp = modals[i].id;
		}
	}
	
	if (mapp) {
		if (e.keyCode == "39") { //right
			next(mapp);
		}
		if (e.keyCode == "37") { //left
			previous(mapp);
		}

		if (e.keyCode == "27") { //Escape
			document.getElementById(mapp).style.display = "none";
		}
	}
}

document.onkeydown = tangenter;