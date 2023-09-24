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
