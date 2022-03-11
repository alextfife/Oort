
document.addEventListener("offline", function(){ alert("You are offline. Leaving this page without being connected by WiFi or cellular data will lose this data until you reconnect.") }, false);

var d = new Date();
var day = d.getDate();
var month = d.getMonth();
var year = d.getFullYear();
var realMonth = month + 1;


function loadDate() {
document.getElementById("day").innerHTML = day;
document.getElementById("year").innerHTML = year;

if (realMonth == 1) {
document.getElementById("month").innerHTML= "January ";
}
if (realMonth == 2) {
document.getElementById("month").innerHTML= "February ";
}
if (realMonth == 3) {
document.getElementById("month").innerHTML= "March ";
}
if (realMonth == 4) {
document.getElementById("month").innerHTML= "April ";
}
if (realMonth == 5) {
document.getElementById("month").innerHTML= "May ";
}
if (realMonth == 6) {
document.getElementById("month").innerHTML= "June ";
}
if (realMonth == 7) {
document.getElementById("month").innerHTML= "July ";
}
if (realMonth == 8) {
document.getElementById("month").innerHTML= "August ";
}
if (realMonth == 9) {
document.getElementById("month").innerHTML= "Semptember ";
}
if (realMonth == 10) {
document.getElementById("month").innerHTML= "October ";
}
if (realMonth == 11) {
document.getElementById("month").innerHTML= "November ";
}
if (realMonth == 12) {
document.getElementById("month").innerHTML= "December ";
}
}


// Mobile Safari in standalone mode
if(("standalone" in window.navigator) && window.navigator.standalone){
 
	// If you want to prevent remote links in standalone web apps opening Mobile Safari, change 'remotes' to true
	var noddy, remotes = false;
	
	document.addEventListener('click', function(event) {
		
		noddy = event.target;
		
		// Bubble up until we hit link or top HTML element. Warning: BODY element is not compulsory so better to stop on HTML
		while(noddy.nodeName !== "A" && noddy.nodeName !== "HTML") {
	        noddy = noddy.parentNode;
	    }
		
		if('href' in noddy && noddy.href.indexOf('http') !== -1 && (noddy.href.indexOf(document.location.host) !== -1 || remotes))
		{
			event.preventDefault();
			document.location.href = noddy.href;
		}
	
	},false);
}



 
var PANEL_SPEED = 650,
   PANEL_EASING = 'cubic-bezier(0.23,1,0.32,1)'
 
$('#panel_to_slide_out').animate({ 
  translateX: '-50%', opacity: 1 }, PANEL_SPEED, PANEL_EASING)
$('#panel_to_slide_in').animate({ 
  translateX: '0%', opacity: 1 }, PANEL_SPEED, PANEL_EASING)


$(window).on('online', online)
$(window).on('offline', offline)
