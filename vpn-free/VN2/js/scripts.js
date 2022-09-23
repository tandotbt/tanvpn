/*!
* Start Bootstrap - Shop Homepage v5.0.4 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function makeTimer() {

			var endTime = new Date("February 04, 2022 00:00:00 UTC+7");			
			var endTime = (Date.parse(endTime)) / 1000;

			var now = new Date();
			var now = (Date.parse(now) / 1000);

			var timeLeft = endTime - now;

			var dayst = Math.floor(timeLeft / 86400);  
			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }
			if (days < "4"){ changeColor();}
				function changeColor() {
			    var elem = document.getElementById('days');
 			   elem.style.color = "#db4844";
			}

			$("#dayst").html(dayst + "<span>Days</span>");  
			$("#days").html(days + "<span>Days</span>");
			$("#hours").html(hours + "<span>Hours</span>");
			$("#minutes").html(minutes + "<span>Minutes</span>");
			$("#seconds").html(seconds + "<span>Seconds</span>");		

	}

	setInterval(function() { makeTimer(); }, 1000);
function copyToClipboard() {
    const str = 'https://tanvpn.tk/subscription/VietNam2-to-et-tet.txt';
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

