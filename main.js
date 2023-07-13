const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const currentYear = new Date().getFullYear();

const oppeningDayTime = new Date(`july 14 ${currentYear} 09:30:00`);

function updateCountdownTime(){  // per aggiornare il countdown
    const currentTime = new Date();
    const diff = oppeningDayTime - currentTime; // la differenza 

    console.log(diff);

    const d = Math.floor(diff / 1000 / 60 / 60 / 24); // (diff / s /m /d) otteniamo il n. tot si s /m/h/d
    const h = Math.floor(diff / 1000 / 60 / 60) % 24 ; // (tot di ore)
    const m = Math.floor(diff / 1000 / 60 ) % 60 ;     // ( tot di min)
    const s = Math.floor(diff / 1000 ) % 60 ;                 // (tot di sec)

    days.innerHTML = d ;
    hours.innerHTML = h ;
    minutes.innerHTML = m ;
    seconds.innerHTML = s ;
}

setInterval(updateCountdownTime, 1000);






















/*const startingMinutes = 10 ;   // 10 minuti
let time = startingMinutes * 60 ; // 10x60= 600s

const countdownElement = document.getElementById("countdown"); // recupero l'element dal html 

setInterval(updateCountdown, 1000);  // set interval per chiamare questa funzione ogni secondo 

function updateCountdown(){   //funzione per aggiornare il countdown
    const minutes = Math.floor(time / 60);
    let seconds = time % 60 ;

   
    countdownElement.innerHTML = `${minutes}:${seconds}`
    time--;
}*/