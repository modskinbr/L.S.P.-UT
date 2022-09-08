/*!
* Start Bootstrap - Modern Business v5.0.6 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

window.addEventListener('load', function() {
	var vs = "7.0.0";
	var dat1 = "2022-09-08T20:00:00-03:00";
	var dat2 = "2022-09-08T16:30:00-03:00";
	var versionid = document.getElementById("version");
	var complet = document.getElementById("d1"); 
	var fast = document.getElementById("d2");
	
	versionid.innerHTML = vs;
	fast.title = dat2;
	complet.title = dat1;
    console.log( vs + versionid )
})
