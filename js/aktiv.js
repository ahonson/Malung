var pathname = window.location.pathname;
var lankar = document.getElementsByClassName("link");
for (i = 0; i < lankar.length; i++) {
    if (pathname == "/") {
        lankar[0].style.backgroundColor = "#BABABA";
    }
    if (lankar[i].firstChild.href.endsWith(pathname)) {
		lankar[i].style.backgroundColor = "#BABABA";
    } else {
		lankar[i].style.backgroundColor = "#E4E4E4";
	}
}