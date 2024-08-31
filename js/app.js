function addHome() {
    let s = parseInt(localStorage.getItem("score_home")) || 0;
    s += 1;
    localStorage.setItem("score_home", s);
    document.querySelector("#score_home").innerText = s;
}

function removeHome() {
    let s = parseInt(localStorage.getItem("score_home")) || 0;
    if (s > 0) {
        s -= 1;
    }
    localStorage.setItem("score_home", s);
    document.querySelector("#score_home").innerText = s;
}

function resetHome() {
    localStorage.setItem("score_home", 0);
    document.querySelector("#score_home").innerText = 0;
}

function addVisitors() {
    let s = parseInt(localStorage.getItem("score_visitors")) || 0;
    s += 1;
    localStorage.setItem("score_visitors", s);
    document.querySelector("#score_visitors").innerText = s;
}

function removeVisitors() {
    let s = parseInt(localStorage.getItem("score_visitors")) || 0;
    if (s > 0) {
        s -= 1;
    }
    localStorage.setItem("score_visitors", s);
    document.querySelector("#score_visitors").innerText = s;
}

function resetVisitors() {
    localStorage.setItem("score_visitors", 0);
    document.querySelector("#score_visitors").innerText = 0;
}

function addOut() {
    let o = parseInt(localStorage.getItem("outs")) || 0;
    if (o < 2) {
        o += 1;
    }
    localStorage.setItem("outs", o);
    document.querySelector("#outs").innerText = o;
}

function removeOut() {
    let o = parseInt(localStorage.getItem("outs")) || 0;
    if (o > 0) {
        o -= 1;
    }
    localStorage.setItem("outs", o);
    document.querySelector("#outs").innerText = o;
}

function resetOuts() {
    localStorage.setItem("outs", 0);
    document.querySelector("#outs").innerText = 0;
}

function addInning() {
    let i = parseInt(localStorage.getItem("inning")) || 0;
    i += 1;
    localStorage.setItem("inning", i);
    document.querySelector("#inning").innerText = i;
}

function removeInning() {
    let i = parseInt(localStorage.getItem("inning")) || 0;
    if (i > 0) {
        i -= 1;
    }
    localStorage.setItem("inning", i);
    document.querySelector("#inning").innerText = i;
}

function resetInning() {
    localStorage.setItem("inning", 1);
    document.querySelector("#inning").innerText = 1;
}

function setTop() {
    localStorage.setItem("topbottom", '▲');
    document.querySelector("#topbottom").innerText = 'TOP';
}

function setBottom() {
    localStorage.setItem("topbottom", '▼');
    document.querySelector("#topbottom").innerText = 'BOTTOM';
}

function setTopBottom() {
    if (localStorage.getItem("topbottom") === '▼') {
        setTop();
    }
    else {
        setBottom();
    }
}

function reset() {
    resetHome();
    resetOuts();
    resetVisitors();
    resetInning();
    setTop();
}

function changeTeamPhoto() {
    let img = document.querySelector("#team").value;
    localStorage.setItem("team", img);
    document.querySelector("#team").value = "";
}

function changeLeague() {
    let l = document.querySelector("#league").value;
    localStorage.setItem("league", l);
    document.querySelector("#league").value = "";
}

function init() {
    document.querySelector("#score_visitors").innerText = localStorage.getItem("score_visitors");
    document.querySelector("#score_home").innerText = localStorage.getItem("score_home");
    document.querySelector("#outs").innerText = localStorage.getItem("outs");
    document.querySelector("#inning").innerText = localStorage.getItem("inning");
    document.querySelector("#topbottom").innerText = localStorage.getItem("topbottom");
}