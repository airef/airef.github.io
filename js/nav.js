var navContent = "";
navContent += '<div class="header">';
	navContent += '<a href=" ' + urlPrefix + '/index.html"><img class="logo" src="' + urlPrefix + '/images/logo-trans-sm.png" /></a>';
	navContent += '<h1>AI Scripting Encyclopedia</h1></div>';
	
	navContent += '<div class="nav">';
		navContent += '<ul class="navbar">';
			navContent += '<li><a id="index-link" href="' + urlPrefix + '/index.html">Home</a></li>';
			navContent += '<li><a id="commands-link" href="' + urlPrefix + '/commands/commands-index.html">Commands</a></li>';
			navContent += '<li><a id="param-link" href="' + urlPrefix + '/parameters/parameters-index.html">Parameters</a></li>';
			navContent += '<li><a id="sn-link" href="' + urlPrefix + '/strategic-numbers/sn-index.html">Strategic Numbers</a></li>';
			navContent += '<li><a id="resources-link" href="' + urlPrefix + '/resources/res-index.html">Resources</a></li></ul><hr></div>';
document.getElementById("nav-placeholder").innerHTML = navContent;
switch (currPage) {
	case "home":
		document.getElementById("index-link").setAttribute("id", "active");
		break;
	case "commands":
		document.getElementById("commands-link").setAttribute("id", "active");
		break;
	case "parameters":
		document.getElementById("param-link").setAttribute("id", "active");
		break;
	case "sn":
		document.getElementById("sn-link").setAttribute("id", "active");
		break;
	case "resources":
		document.getElementById("resources-link").setAttribute("id", "active");
		break;
}