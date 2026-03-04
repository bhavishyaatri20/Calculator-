let screen = document.getElementById("screen");

let number= document.querySelectorAll(".num");

number.forEach((num) => {
    num.addEventListener("click", () => {
        screen.innerText += num.id;
    });
});

let del=document.getElementById("delete")
del.addEventListener("click", ()=>{
    screen.innerText=screen.innerText.slice(0, -1);
})

let sumbtn= document.getElementById("add")
sumbtn.addEventListener("click", ()=>{
   screen.innerText+="+";
})

let result= document.getElementById("result")
result.addEventListener("click",()=>{
    screen.innerText=eval(screen.innerText)
})

let minusbtn= document.getElementById("minus")
minusbtn.addEventListener("click", ()=>{
   screen.innerText+="-";
})

let mulbtn= document.getElementById("multiply")
mulbtn.addEventListener("click", ()=>{
   screen.innerText+="*";
})

let dividebtn= document.getElementById("divide")
dividebtn.addEventListener("click", ()=>{
   screen.innerText+="/";
})

let empty=document.getElementById("empty");
empty.addEventListener("click",()=>{
    screen.innerText="";
})