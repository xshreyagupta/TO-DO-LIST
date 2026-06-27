const moon=document.querySelector(".fa-moon");
const body=document.querySelector("body");
let mode="light";
const add_task=document.querySelector("#add_task");
const input=document.querySelector("input");
const status=document.querySelector(".status");
const allbtn=document.querySelector("#all");
const pendingbtn=document.querySelector("#pending")
const completedbtn=document.querySelector("#completed");
const container=document.querySelector(".container");
const clearbtn=document.querySelector("#clear-button");
let listoftasks=[];
moon.addEventListener("click",()=>{
    if(mode==="light"){
        body.style.backgroundColor="#1A1625";
        mode="dark";
    }
    else{
        body.style.backgroundColor="#EADDFF";
        mode="light";
    }
});
  let height=50 ;
const taskcreated=(element)=>{
   let task=document.createElement("div");
   status.after(task);
  height=height+3;
  container.style.height=height+"vh";
   task.style.backgroundColor="#FFFFFF";
   task.style.height="2rem";
   task.style.border="1px solid lightgrey";
   task.innerHTML=`<i class="fa-regular fa-circle"> </i>${element}`;
   task.style.borderRadius="0.5rem";
   task.style.width="33.8vw";
   task.style.marginLeft="0.5rem";
   task.style.display="flex";
   task.style.justifyContent="flex-start";
   task.style.alignItems="center";
   task.style.color="#1F1F1F";
   task.style.marginTop="1rem";
   task.classList.add("pending");
   task.style.boxShadow=" 0px 4px 10px rgba(124, 103, 103, 0.3)";
   let icon=task.querySelector("i");
   let completed=false;
   icon.addEventListener("click",()=>{
    if(completed===false){
       icon.classList.remove("fa-regular", "fa-circle");
       icon.classList.add("fa-solid" ,"fa-circle-check");
       task.style.textDecoration="line-through";
       completed=true;
       task.classList.remove("pending");
       task.classList.add("completed");
    }
    else{
      icon.classList.remove("fa-solid" ,"fa-circle-check");
      icon.classList.add("fa-regular", "fa-circle");
      task.style.textDecoration="none";
      completed=false;
       task.classList.remove("completed");
      task.classList.add("pending");
 }
   })
   listoftasks.push(task); 
  

}

add_task.addEventListener("click",()=>{
    if(input.value!=""){
    taskcreated(input.value);
    }  
    input.value="";
})
pendingbtn.addEventListener("click",()=>{
    listoftasks.forEach((val)=>{
      if(val.classList.contains("completed")){
                val.style.display="none";
      }else{
        val.style.display="flex";
      }
                          
      
    })
    })
allbtn.addEventListener("click",()=>{
    listoftasks.forEach((val)=>{
        if(val.classList.contains("completed")|| val.classList.contains("pending")){
            val.style.display="flex";
        }
    })
})
completedbtn.addEventListener("click",()=>{
    listoftasks.forEach((val)=>{
        if(val.classList.contains("pending")){
            val.style.display="none";
        }
        else{
            val.style.display="flex";
        }
    })
})
clearbtn.addEventListener("click",()=>{
    listoftasks.forEach((val)=>{
        val.remove();
    
   
})
  container.style.height="50vh";
})


