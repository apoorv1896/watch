const boxa = document.getElementById("boxa");
const boxb = document.getElementById("boxb");
const boxc =  document.getElementById("boxc");
const boxd=  document.getElementById("boxd");




function updateClock(){
    let hr =  new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    var amp = "Am";


if(hr > 12){
    hr = hr - 12;
    amp = "PM";
}

hr = hr < 10 ? "0" + hr : hr ;
min = min < 10 ? "0" + min : min ;
sec = sec < 10 ? "0"+sec : sec;

boxa.innerText = hr;
boxb.innerText = min ;
boxc.innerText = sec;
boxd.innerText= amp;

setTimeout(()=>{
    updateClock();
},1000);

}

updateClock();