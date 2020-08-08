var dg1 = "#4b4e4e"
var lg3 = "#cbcdcd"
var bl3 = "#000000"
var wh4 = "#ffffff"
var gr5 = "#004d00"
var lg6 = "#e5e6e6"

document.body.style.backgroundColor = dg1;
// document.body.style.color = dg;

var i;

divs = document.getElementsByClassName("roundbox");
ps = document.getElementsByClassName("problem-statement");
tp = document.getElementsByClassName("topic");
usr = document.getElementsByClassName("lang-chooser");
menu = document.getElementsByClassName("second-level-menu");
fr = document.getElementsByClassName("friendsEnabledSwitch");
uno = document.getElementsByClassName("toggle-show-unofficial");
sta = document.getElementsByClassName("contest-status");

for (i = 0; i < sta.length; i++)
	sta[i].style.color=wh4;
for (i = 0; i < uno.length; i++)
	uno[i].style.color=wh4;
for (i = 0; i < fr.length; i++)
	fr[i].style.color=wh4;
for (i = 0; i < menu.length; i++)
	menu[i].style.backgroundColor=lg6;
for (i = 0; i < usr.length; i++)
	usr[i].style.backgroundColor=lg3;
for (i = 0; i < divs.length; i++)
	divs[i].style.backgroundColor=lg3;
for (i = 0; i < ps.length; i++)
	ps[i].style.backgroundColor=lg3;
for (i = 0; i < tp.length; i++)
	tp[i].style.backgroundColor=lg3;

tables = document.getElementsByTagName("table");
for (i = 0; i < tables.length; i++)
	tables[i].style.backgroundColor=lg3;
tables = document.getElementsByTagName("td");
for (i = 0; i < tables.length; i++)
	tables[i].style.backgroundColor=lg3;
tables = document.getElementsByTagName("tr");
for (i = 0; i < tables.length; i++)
	tables[i].style.backgroundColor=lg3;
tables = document.getElementsByTagName("th");
for (i = 0; i < tables.length; i++)
	tables[i].style.backgroundColor=lg3;

cor = document.getElementsByClassName("cell-passed-system-test");
for (i = 0; i < cor.length; i++)
	cor[i].style.color=gr5;
cor = document.getElementsByClassName("cell-time");
for (i = 0; i < cor.length; i++)
	cor[i].style.color=bl3;
cor = document.getElementsByClassName("successfulChallengeCount");
for (i = 0; i < cor.length; i++)
	cor[i].style.color=gr5;
cor = document.getElementsByClassName("verdict-accepted");
for (i = 0; i < cor.length; i++)
	cor[i].style.color=gr5;
