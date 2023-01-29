var navContent = "";
var footerContent = "";
navContent += '<div class="header">';
	navContent += '<a href=" ' + urlPrefix + '/index.html"><img class="logo" src="' + urlPrefix + '/images/logo-trans-tiny.png" /></a>';
	navContent += '<h1>AI Scripting Encyclopedia</h1></div>';
	
	navContent += '<div class="nav">';
		navContent += '<ul class="navbar">';
			navContent += '<li><a id="index-link" href="' + urlPrefix + '/index.html">Home</a></li>';
			navContent += '<li><a id="commands-link" href="' + urlPrefix + '/commands/commands-index.html">Commands</a></li>';
			navContent += '<li><a id="param-link" href="' + urlPrefix + '/parameters/parameters-index.html">Parameters</a></li>';
			navContent += '<li><a id="sn-link" href="' + urlPrefix + '/strategic-numbers/sn-index.html">Strategic Numbers</a></li>';
			navContent += '<li><a id="units-techs-link" href="' + urlPrefix + '/tables/tables-index.html">Tables</a></li>';
			navContent += '<li><a id="duc-link" href="' + urlPrefix + '/duc/duc-index.html">DUC</a></li>';
			navContent += '<li><a id="resources-link" href="' + urlPrefix + '/resources/res-index.html">Guides</a></li>';
			navContent += '<li><a id="search-link" href="' + urlPrefix + '/search/search.html">Search All</a></li>';
		navContent += '</ul></div>';
	navContent += '<div class="quick-links">';
		navContent += '<div class="quick-links-text-div"><p class="quick-links-text"><strong>Quick Links: </strong></p></div>'
		navContent += '<div class="quick-links-list-div"><ul class="quick-links-list">';
			navContent += '<li class="quick-links-list-item"><a href="' + urlPrefix + '/parameters/parameters-details.html#ClassId">Classes</a></li>';
			navContent += '<li class="quick-links-list-item"><a href="' + urlPrefix + '/parameters/parameters-details.html#compareOp">Comparison Operations</a></li>';
			navContent += '<li class="quick-links-list-item"><a href="' + urlPrefix + '/parameters/parameters-details.html#TargetAction">DUC Actions</a></li>';
			navContent += '<li class="quick-links-list-item"><a href="' + urlPrefix + '/parameters/parameters-details.html#FactId">Fact IDs</a></li>';
			navContent += '<li class="quick-links-list-item"><a href="' + urlPrefix + '/tables/load-if.html">#load-if Symbols</a></li>';
			navContent += '<li class="quick-links-list-item"><a href="' + urlPrefix + '/parameters/parameters-details.html#mathOp">Math Operations</a></li>';
			navContent += '<li class="quick-links-list-item"><a href="' + urlPrefix + '/parameters/parameters-details.html#ObjectData">Object Data</a></li>';
			navContent += '<li class="quick-links-list-item"><a href="' + urlPrefix + '/tables/objects.html">Objects Table</a></li>';
			navContent += '<li class="quick-links-list-item"><a href="' + urlPrefix + '/parameters/parameters-details.html#ResourceType">Resource Types</a></li>';
			navContent += '<li class="quick-links-list-item"><a href="' + urlPrefix + '/tables/techs.html">Techs Table</a></li>';
			navContent += '<li class="quick-links-list-item"><a href="' + urlPrefix + '/parameters/parameters-details.html#UnitId">Unit Lines</a></li>';
		navContent += '</ul></div>';
	navContent += '<hr></div>';
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
	case "units-techs":
		document.getElementById("units-techs-link").setAttribute("id", "active");
		break;
	case "duc":
		document.getElementById("duc-link").setAttribute("id", "active");
		break;
	case "resources":
		document.getElementById("resources-link").setAttribute("id", "active");
		break;
	case "search":
		document.getElementById("search-link").setAttribute("id", "active");
		break;
}
document.addEventListener("DOMContentLoaded", function(){
	var body = document.body;
	var html = document.documentElement;
	var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
	if(window.innerHeight < height) {
		footerContent += '<div class="foot">';
			footerContent += '<ul class="footer">';
				footerContent += '<li><a id="footer-index-link" href="' + urlPrefix + '/index.html">Home</a></li>';
				footerContent += '<li><a id="footer-commands-link" href="' + urlPrefix + '/commands/commands-index.html">Commands</a></li>';
				footerContent += '<li><a id="footer-param-link" href="' + urlPrefix + '/parameters/parameters-index.html">Parameters</a></li>';
				footerContent += '<li><a id="footer-sn-link" href="' + urlPrefix + '/strategic-numbers/sn-index.html">Strategic Numbers</a></li>';
				footerContent += '<li><a id="footer-units-techs-link" href="' + urlPrefix + '/tables/tables-index.html">Tables</a></li>';
				footerContent += '<li><a id="footer-duc-link" href="' + urlPrefix + '/duc/duc-index.html">DUC</a></li>';
				footerContent += '<li><a id="footer-resources-link" href="' + urlPrefix + '/resources/res-index.html">Guides</a></li>';
				footerContent += '<li><a id="footer-search-link" href="' + urlPrefix + '/search/search.html">Search</a></li></ul></div>';
		document.getElementById("footer-placeholder").innerHTML = footerContent;
		switch (currPage) {
			case "home":
				document.getElementById("footer-index-link").setAttribute("id", "active");
				break;
			case "commands":
				document.getElementById("footer-commands-link").setAttribute("id", "active");
				break;
			case "parameters":
				document.getElementById("footer-param-link").setAttribute("id", "active");
				break;
			case "sn":
				document.getElementById("footer-sn-link").setAttribute("id", "active");
				break;
			case "units-techs":
				document.getElementById("footer-units-techs-link").setAttribute("id", "active");
				break;
			case "duc":
				document.getElementById("footer-duc-link").setAttribute("id", "active");
				break;
			case "resources":
				document.getElementById("footer-resources-link").setAttribute("id", "active");
				break;
			case "search":
				document.getElementById("footer-search-link").setAttribute("id", "active");
				break;
		}
	}
} );