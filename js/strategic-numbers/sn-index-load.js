var text = "<table id=\"index-table\">";
var effective = true;
text += "<tr><th>ID</th><th>Strategic Number</th>";
text += "<th>Min</th><th>Max</th><th>Req. Min</th><th>Req. Max</th><th>Default</th><th>Flags</th><th>Versions<br>(AoE1,AoC,<br>UP, DE)</th></tr>";
for(var i = 0; i < snArray.length; i++) {
    text += "<tr>";
    text += "<td>" + snArray[i].id + "</td>";
    text += "<td class=\"sn-name\" title=\"" + snArray[i].shortDescription;
    if (snArray[i].effective == 0) {
        effective = false;
        text += "\">" + snArray[i].getLink(effective);
    }
    else {
        text += "\">" + snArray[i].getLink();
    }
    // if (snArray[i].aoe == 1 && snArray[i].aoc == 0 && snArray[i].up == 0 && snArray[i].de == 0) {
    // 	text += "<span class=\"sn-aoe1\"> (AoE1 only)</span>";
    // }
    // else if (snArray[i].aoe == 0 && snArray[i].aoc == 0 && snArray[i].up == 0 && snArray[i].de == 0) {
    // 	text += "<span class=\"sn-aoe1\"> (doesn't work)</span>";
    // }
    text += "</td>";
    // text += "<td>" + snArray[i].category + "</td>";
    text += "<td>" + snArray[i].min + "</td>";
    text += "<td>" + snArray[i].max + "</td>";
    text += "<td>" + snArray[i].rmin + "</td>";
    text += "<td>" + snArray[i].rmax + "</td>";
    text += "<td>" + snArray[i].default + "</td><td>";
    if(snArray[i].effective == 0) {
        text += "<span class=\"sn-x-flag\" title=\"Doesn't Work\">&#10007&nbsp;</span>";
    }
    else if(snArray[i].effective == 1) {
        text += "<span class=\"sn-check-flag\" title=\"Works\">&#10003&nbsp;</span>";
    }
    if(snArray[i].network == 0) {
        text += "<span class=\"sn-x-flag\" title=\"Standard\">&#10007&nbsp;</span>";
    }
    else if(snArray[i].network == 1) {
        text += "<span class=\"sn-check-flag\" title=\"Network Sync\">&#10003&nbsp;</span>";
    }
    if(snArray[i].defined == 0) {
        text += "<span class=\"sn-x-flag\" title=\"Undefined\"> &#10007&nbsp;</span>";
    }
    else if(snArray[i].defined == 1) {
        text += "<span class=\"sn-check-flag\" title=\"Defined\"> &#10003&nbsp;</span>";
    }
    if(snArray[i].available == 0) {
        text += "<span class=\"sn-check-flag\" title=\"Active\"> &#10003</span></td>";
    }
    else if(snArray[i].available == 1) {
        text += "<span class=\"sn-x-flag\" title=\"Obsolete\"> &#10007</span></td>";
    }
    else {
        text += "<span class=\"sn-question-flag\" title=\"" + snArray[i].available;
        text += "\"> ?</td>";
    }
    text += "<td>";
    if(snArray[i].aoe == 0) {
        text += "<span class=\"sn-x-flag\" title=\"Not in AoE1\">&#10007&nbsp;</span>";
    }
    else if(snArray[i].aoe == 1) {
        text += "<span class=\"sn-check-flag\" title=\"In AoE1\">&#10003&nbsp;</span>";
    }
    if(snArray[i].aoc == 0) {
        text += "<span class=\"sn-x-flag\" title=\"Not in AoC\">&#10007&nbsp;</span>";
    }
    else if(snArray[i].aoc == 1) {
        text += "<span class=\"sn-check-flag\" title=\"In AoC\">&#10003&nbsp;</span>";
    }
    if(snArray[i].up == 0) {
        text += "<span class=\"sn-x-flag\" title=\"Not in UP\"> &#10007&nbsp;</span>";
    }
    else if(snArray[i].up == 1) {
        text += "<span class=\"sn-check-flag\" title=\"In UP\"> &#10003&nbsp;</span>";
    }
    if(snArray[i].de == 0) {
        text += "<span class=\"sn-x-flag\" title=\"Not in DE\"> &#10007</span></td>";
    }
    else if(snArray[i].de == 1) {
        text += "<span class=\"sn-check-flag\" title=\"In DE\"> &#10003</span></td>";
    }
    /*text += "<td>" + snArray[i].version + "</td>";*/
    text += "</tr>";
}
text += "</table>"
document.getElementById("snTable").innerHTML = text;

var num = 300;
document.getElementById("num-results").innerHTML = "Num Results: " + snArray.length;