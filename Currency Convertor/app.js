const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");


let from=0;
let to = 0;
let convertedPrice = 0;

 for(let select of dropdowns){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name==="from" && currCode ==="USD"){
            newOption.selected = "selected";
        }
        if(select.name==="to" && currCode ==="INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);

        

    }
    select.addEventListener("change", (evt)=>{
        updateFlag(evt.target)
    });
 }
  
 
 
 const updateFlag = (element)=>{
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
 }

btn.addEventListener("click", async(evt)=>{
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    console.log(amtVal);
    if(amtVal === "" || amtVal <1){
         amtVal = 1;
         amount.value = "1";
    }


   from = `${fromCurr.value.toLowerCase()}`;
   to  = `${toCurr.value.toLowerCase()}`;
    
  let BASE_URL1 = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`;

    let response = await fetch(BASE_URL1);
    let data = await response.json();
    let rate = data[from][to];
    let finalAmount = amtVal*rate;
    console.log(finalAmount);
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
});
