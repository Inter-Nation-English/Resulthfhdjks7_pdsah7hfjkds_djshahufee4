const ScoreSpeaking = document.getElementById("ScoreSpeaking")
const ScoreWriting = document.getElementById("ScoreWriting")
const ScoreReading = document.getElementById("ScoreReading")
const ScoreListeting = document.getElementById("ScoreListeting")


const PhoneNumber = document.getElementById("PhoneNumber")

const OverScore = document.getElementById("OverAll")
const OverScore2 = document.getElementById("OverAll2")

const BlockPage = document.getElementById("Bloker");

ScoreSpeaking.innerHTML = "7.5"
ScoreWriting.innerHTML = "6.0"
ScoreReading.innerHTML = "7.0"
ScoreListeting.innerHTML = "8.0"

//PhoneNumber.innerHTML = prompt("Phone Number");
var Spliten = PhoneNumber.innerHTML.split('');

if (PhoneNumber.innerHTML == ""){
    PhoneNumber.innerHTML = "+99899-519-25-29"
}

var FixTheNum;
for (let i = 0; i < Spliten.length; i++) {
    if (i == 6 || i== 9 || i == 11 || i == 13 && Spliten[i] != undefined){
        FixTheNum += "-" + Spliten[i];
    }else if (Spliten[i] != undefined){
        FixTheNum += Spliten[i];
    }
    PhoneNumber.innerHTML = FixTheNum.slice(9);
}


var Result = Number(ScoreReading.innerHTML) + Number(ScoreSpeaking.innerHTML) + Number(ScoreWriting.innerHTML) + Number(ScoreListeting.innerHTML) 
var Drop = Result / 4;
Result = Drop
let array = (""+Drop).split(".").map(Number)
console.log(array);
if (array[1] >= 25){
    OverScore.innerHTML = array[0] + "." + "5"
}else if(array[1] == 5){
    OverScore.innerHTML = Math.round(Drop) + '.0';
}else if(array[1] > 75){
    OverScore.innerHTML = Math.round(Drop) + '.0';
}else if(array.length == 1){
    OverScore.innerHTML = Math.round(Drop) + '.0';
}
OverScore2.innerHTML = OverScore.innerHTML;

document.ondragstart = noselect;
document.onselectstart = noselect;
//document.oncontextmenu = noselect;
function noselect() {return false;}


function CheckingSizeOfDisplay(){
    setTimeout(function(){
        CheckingSizeOfDisplay();
        if (window.screen.width > 500){

        }
    } , 1000)
}
function ChangeOpacity(){
    BlockPage.style.opacity = "10";
}


const old1 = document.getElementById("Old1");
old1.addEventListener('click' , function(){
    if (old1.style.height == "680px"){
        old1.classList.add("toClose1");
    setTimeout(function(){
        old1.style.height = "100px"
        old1.classList.remove("toClose1")
    } , 500)
    }else{
    old1.classList.add("toOpened1");
    setTimeout(function(){
        old1.style.height = "680px"
        old1.classList.remove("toOpened1")
    } , 500)
}
});

const old2 = document.getElementById("Old2");
old2.addEventListener('click' , function(){
    if (old2.style.height == "680px"){
        old2.classList.add("toClose2");
    setTimeout(function(){
        old2.style.height = "100px"
        old2.classList.remove("toClose2")
    } , 500)
    }else{
    old2.classList.add("toOpened2");
    setTimeout(function(){
        old2.style.height = "680px"
        old2.classList.remove("toOpened2")
    } , 500)
}
});

const old3 = document.getElementById("Old3");
old3.addEventListener('click' , function(){
    if (old3.style.height == "680px"){
        old3.classList.add("toClose2");
    setTimeout(function(){
        old3.style.height = "100px"
        old3.classList.remove("toClose2")
    } , 500)
    }else{
        old3.classList.add("toOpened2");
    setTimeout(function(){
        old3.style.height = "680px"
        old3.classList.remove("toOpened2")
    } , 500)
}
});

const old4 = document.getElementById("Old4");
old4.addEventListener('click' , function(){
    if (old4.style.height == "680px"){
        old4.classList.add("toClose2");
    setTimeout(function(){
        old4.style.height = "100px"
        old4.classList.remove("toClose2")
    } , 500)
    }else{
        old4.classList.add("toOpened2");
    setTimeout(function(){
        old4.style.height = "680px"
        old4.classList.remove("toOpened2")
    } , 500)
}
});

const old5 = document.getElementById("Old5");
old5.addEventListener('click' , function(){
    if (old5.style.height == "720px"){
        old5.classList.add("toClose2");
    setTimeout(function(){
        old5.style.height = "100px"
        old5.classList.remove("toClose2")
    } , 500)
    }else{
        old5.classList.add("toOpened2");
    setTimeout(function(){
        old5.style.height = "720px"
        old5.classList.remove("toOpened2")
    } , 500)
}
});
