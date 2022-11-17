window.addEventListener('load', function() {
	var vs = "7.7.0";
	var estxt = "⌛";
	var notext = "🚫";
	var versionid = document.getElementById("version");
	var btntext01 = document.getElementById("btn-text01");
	var btntext02 = document.getElementById("btn-text02");
	versionid.innerHTML = vs;
	
	var AreInUpdate = false;
	var NoUnavailable = true;
	
	if ( AreInUpdate === true ) {
		btntext01.innerText = estxt;
		btntext01.classList.remove("btn-primary")
		btntext01.classList.add("btn-dark")
		btntext01.classList.add("blocked")
    }
    if ( NoUnavailable === true ) {
    	btntext02.innerText = notext;
		btntext02.classList.remove("btn-primary")
		btntext02.classList.add("btn-dark")
		btntext02.classList.add("blocked")
		}
})
