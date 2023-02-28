var links = new Array();
links[0] = "https://www.youtube.com/watch?v=6Cr_8tvvQ0k";
links[1] = "https://www.youtube.com/watch?v=qcFQB8XPrko";
links[2] = "https://www.youtube.com/watch?v=yrP43LB7QEQ";
links[3] = "https://www.youtube.com/watch?v=od_PmtmMDV0";
links[4] = "https://www.youtube.com/watch?v=NX3DxUaK92A";
links[5] = "https://www.youtube.com/watch?v=2MMKB6zYbrc";
links[6] = "https://www.youtube.com/watch?v=mVI-xVWZf3k";
links[7] = "https://www.youtube.com/watch?v=3X-iqFRGqbc";
links[8] = "https://www.youtube.com/watch?v=aaZaMD3Cxnw";
links[9] = "https://www.youtube.com/watch?v=VAC-5BQnuXI&list=LL&index=1123";
links[10] = "https://www.youtube.com/watch?v=Y7Ns9aoqjgE&list=LL&index=1181";
links[11] = "https://www.youtube.com/watch?v=ULpEy_KwH68&list=LL&index=1420";
links[12] = "https://www.youtube.com/watch?v=gvcSCIRDA7k&list=LL&index=1496";
links[13] = "https://www.youtube.com/watch?v=nc_H-bD2khc&list=LL&index=277";
links[14] = "https://www.youtube.com/watch?v=sDj72zqZakE";
links[15] = "https://www.youtube.com/watch?v=A2skRDH5l2Q";
links[16] = "https://www.youtube.com/watch?v=riT4nl0T8_M";
links[17] = "https://www.youtube.com/watch?v=uDrdZM1iGrc";
links[18] = "https://www.youtube.com/watch?v=mYGQimzFUsE";
links[19] = "https://www.youtube.com/watch?v=K1GhBfCG0F8";
links[20] = "https://www.youtube.com/watch?v=icLh0E-o84A";
links[21] = "https://www.youtube.com/watch?v=11xs9mFKObs";
links[22] = "https://www.youtube.com/watch?v=tOsck7jYUsE";

function openLink() {
    // Chooses a random link:
    var i = Math.floor(Math.random() * links.length);
    // Directs the browser to the chosen target:
    parent.location = links[i];
    return false;

}


function loadURL() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        document.getElementById("demo2").innerHTML =
            this.responseText;
    }
    xhttp.open("GET", "catjesus.html");
    xhttp.send();
}


src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"

$(document).ready(function () {
    $("button").click(function () {
        $("#div1").fadeToggle(3000);
    });
});
