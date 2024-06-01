const endDate = "2 June 2024 11:00 PM"
document.getElementById("end-date").innerText = endDate;
const inputs=document.querySelectorAll("input")

function clock(){
    const end = new Date(endDate)
    const now = new Date()
    const diff =(end-now)/1000;
    // console.log(end);
    // console.log(now);
    // console.log(diff);
    if(diff<0) return;
    inputs[0].value = Math.floor(diff/3600/24);  //convert into days
    inputs[1].value = Math.floor((diff/3600)%24);   //convert into hrs
    inputs[2].value = Math.floor((diff/60)%60); 
    inputs[3].value = Math.floor(diff%60); 
   

}
//initial call
clock()

/**
 * 1 day = 24 hrs
 * 1 hr = 60 mins
 * 60 min = 3600 sec
 */

setInterval(
    ()=>{
        clock()
    },
    1000
)