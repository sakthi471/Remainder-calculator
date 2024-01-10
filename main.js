

 const inputEl=document.querySelector("#input");
 const btn=document.querySelector("#btn");
 const output=document.querySelector("#output")
 const qu=document.querySelector("#qu")


 console.log(inputEl.value);

   inputEl.focus();

  const handleinput=()=>{
   const inputValue=inputEl.value;
   
   if(inputEl){
       const arr=inputValue.split("%")
       const res=  parseInt(arr[0]) % parseInt(arr[1])
        output.innerText=res;
        const  quotient=parseInt(arr[0]) / parseInt(arr[1])

        qu.innerText=Math.floor(quotient);

   }
  }

 btn.addEventListener('click',  (e)=>{
    
    handleinput() 
   
 })
 
 inputEl.addEventListener("keypress", (e)=> {
   if (e.key === "Enter") {
     e.preventDefault();
    handleinput()
   }
 });


