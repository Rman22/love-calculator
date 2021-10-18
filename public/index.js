

const api_url = "https://love-calculator.p.rapidapi.com/"
let fName = document.getElementById("fName")
let sName = document.getElementById("sName")
const CalculateBtn = document.getElementById("btn")
const displayResult = document.getElementById("displayResult")
const results = document.getElementById("result")
const closeBtn = document.getElementById("close")
const load = document.getElementById("loading")
closeBtn.addEventListener("click", () => {
    displayResult.style.display="none"
})
// 
CalculateBtn.addEventListener("click", () =>{
    fetch(`${api_url}/getPercentage?sname=${fName.value}&fname=${sName.value}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "love-calculator.p.rapidapi.com",
            "x-rapidapi-key": "c88a12631fmsh6e443886244c8bep18fae9jsn2dfd66d6cc67"
        }
    })
    .then(res => res.json())
    .then(response)
    .catch(err => console.warn(err.message))
    
    console.log("clicked")
    setTimeout(function(){
        displayResult.style.display="flex"
        load.style.display="flex"
    },2000)

    results.innerHTML =""
    fName.innerHTML =""
    sName.innerHTML =""


   
})
function response(data){
   
    results.innerHTML = 
    `
    <p class="uppercase" >${data.fname}</p>
    <p>+</p>
    <p class="uppercase" >${data.sname}</p>
    <div class="text-base text-red-700 mt-5 ">
        <p>Percentage: ${data.percentage}%</p>
        
    </div>
    <div class="flex text-red-700 justify-center gap-2 flex-wrap text-base px-2 py-5   ">
        <div>
            <p>Outcome: ${data.result}</p>
            <p class="border-t-2 border-red-400">PERO! Magbuwag ra japun mo.</p>
        </div>
        
    </div>
    

    `
    load.style.display="none"
}