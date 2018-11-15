var stewie = document.getElementById("stewie");
var peter = document.getElementById("peter");
var louis = document.getElementById("louis");
var brian = document.getElementById("brian");
var meg = document.getElementById("meg");
var chris = document.getElementById("chris");
var posStewieX = 0;
var posStewieY = 0;

var posBrianY = 0;

var posChrisY = 0;
var posChrisX = 0;

var poslouisX = 0;
var poslouisY = 0;

var posPeterX = 0;
var posPeterY = 0;

var id = setInterval(() => {
    posStewieX++;
    stewie.style.left = posStewieX + "vw";
    posBrianY++;
    brian.style.top = posBrianY + "vh";
    posChrisY++;
    posChrisX++;
    chris.style.top = posChrisY + "vh";
    chris.style.left = posChrisX + "vw";
    poslouisX++;
    poslouisY++;
    louis.setAttribute(
        "style",
        "width: 400px; left: poslouisX +'vw'; top: poslouisY + 'vh'"
    );

    posPeterX++;
    posPeterY++;
    peter.setAttribute(
        "style",
        "left: `${poslouisX} +`vw`; top: poslouisY + 'vh'"
    );
}, 100);
