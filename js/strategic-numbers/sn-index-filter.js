function snFilter() {
    // Declare variables
    var input, category, effective, network, defined, active, version, filter, table, tr, tdName, tdId, tdCategory, tdEffective, tdNetwork, tdDefined, tdActive, tdVersion, i, num, aoe1, aok, up, de;
    input = document.getElementById("snInput");
    category = document.getElementById("sn-category");
    category = category.value;
    effective = document.getElementById("sn-effective");
    effective = effective.value;
    network = document.getElementById("sn-network");
    if (network.value == "Network") {
        network = 1;
    }
    else if (network.value == "Standard") {
        network = 0;
    }
    else {
        network = -1;
    }
    defined = document.getElementById("sn-defined");
    if (defined.value == "Undefined") {
        defined = 0;
    }
    else if (defined.value == "Defined") {
        defined = 1;
    }
    else {
        defined = -1;
    }
    active = document.getElementById("sn-active");
    if (active.value == "Obsolete") {
        active = 1;
    }
    else if (active.value == "Active") {
        active = 0;
    }
    else if (active.value == "Conditional") {
        active = 2;
    }
    else {
        active = -1;
    }
    version = document.getElementById("sn-version").value;
    /*if (version.value == "All") {
        version = "All";
    }
    else if (version.value == "AoE1") {
        version = "AoE1";
    }
    else if (version.value == "UP") {
        version = "UP";
    }
    else if (version.value == "1.1 Only") {
        version = "1.1";
    }
    else if (version.value == "1.5 Only") {
        version = "1.5";
    }
    else if (version.value == "HD") {
        version = "HD";
    }
    else if (version.value == "DE") {
        version = "DE";
    }*/
    filter = input.value.toUpperCase();
    table = document.getElementById("index-table");
    tr = table.getElementsByTagName("tr");
    num = 0;

    //Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length - 1; i++) {
    //for (i = 0; i < 1; i++) {
        tdId = snArray[i].id;
        tdName = snArray[i].snName;
        tdCategory = snArray[i].category;
        tdEffective = snArray[i].effective;
        tdNetwork = snArray[i].network;
        tdDefined = snArray[i].defined;
        tdActive = snArray[i].available;
        if(typeof snArray[i].available === "string") {
            tdActive = 2;
        }

        if (tdName != "" && tdId.toString().length > 0) {
            if (tdId.toString().toUpperCase().indexOf(filter) > -1 || tdName.toUpperCase().indexOf(filter) > -1) {
                if(category == "All" || tdCategory == category) {
                    if(effective == "All" || tdEffective == effective) {
                        if(network == -1 || tdNetwork == network) {
                            if(defined == -1 || tdDefined == defined) {
                                if(active == -1 || tdActive == active) {
                                    if(version == "All" || (version == "AoE1" && snArray[i].aoe == 1) || (version == "AoK" && snArray[i].aok == 1) || (version == "UP" && snArray[i].up == 1) || (version == "DE" && snArray[i].de == 1)) {
                                        tr[i + 1].style.display = "";
                                        num = num + 1;
                                    }
                                    else {
                                        tr[i + 1].style.display = "none";
                                    }
                                }
                                else {
                                    tr[i + 1].style.display = "none";
                                }
                            }
                            else {
                                tr[i + 1].style.display = "none";
                            }
                        }
                        else {
                            tr[i + 1].style.display = "none";
                        }
                    }
                    else {
                        tr[i + 1].style.display = "none";
                    }
                }
                else {
                    tr[i + 1].style.display = "none";
                }
            }
            else {
                tr[i + 1].style.display = "none";
            }
        }
    }
    document.getElementById("num-results").innerHTML = "Num Results: " + num;
}