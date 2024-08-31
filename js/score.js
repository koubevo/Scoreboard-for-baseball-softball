function show() {
    document.querySelector("#score_visitors").innerText = localStorage.getItem("score_visitors") || 0;
    document.querySelector("#score_home").innerText = localStorage.getItem("score_home") || 0;
    let inn = localStorage.getItem("inning");
    if (inn == 1) {
        inn = "1st";
    }
    else if (inn == 2) {
        inn = "2nd";
    }
    else {
        inn = inn + "th";
    }
    document.querySelector("#inning").innerText = inn || 0;
    document.querySelector("#outs").innerText = localStorage.getItem("outs") || 0;
    document.querySelector("#topbottom").innerText = localStorage.getItem("topbottom") || '▲';
}

function editLeague() {
    document.querySelector("#league").innerText = localStorage.getItem("league");
}

function editTeam() {
    document.querySelector("#visitors").src = "imgs/" + localStorage.getItem("team") + ".png";
}

window.addEventListener("storage", function (event) {
    if (event.key === "inning" || event.key === "score_home" || event.key === "score_visitors" || event.key === "topbottom" || event.key === "outs") {
        show();
    }
});

window.addEventListener("storage", function (event) {
    if (event.key === "league") {
        editLeague();
    }
});

window.addEventListener("storage", function (event) {
    if (event.key === "team") {
        editTeam();
    }
});

window.onload = show();