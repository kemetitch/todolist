let input=document.querySelector(".add-task input"),

    plus=document.querySelector(".add-task .plus"),

    taskcontainer=document.querySelector(".tasks-content"),

    taskcount=document.querySelector(".tasks-count span"),
    
    taskcomplete=document.querySelector(".tasks-complete span");

    window.onload=function(){
        input.focus();
    }


plus.onclick=function(){
if(input.value==""){
    Swal.fire("No Value ");
}
else{

let notask=document.querySelector(".no-tasks-message");

if(document.body.contains(document.querySelector(".no-tasks-message")))
{
    
    notask.remove();

}
let mainspan=document.createElement("span"),

maindelete=document.createElement("span"),

text=document.createTextNode(input.value),

deletetext=document.createTextNode("delete");

mainspan.appendChild(text);

mainspan.className="task-box"

maindelete.appendChild(deletetext);

maindelete.className="delete"

mainspan.appendChild(maindelete);

taskcontainer.appendChild(mainspan);

input.value="";


    }
}
document.addEventListener("click",function(e){
    if(e.target.className=="delete")
    {

        e.target.parentNode.remove();
        if(taskcontainer.childElementCount==0){
            create();
        }

    }
  
  if(e.target.classList.contains("task-box"))
  {
      
      e.target.classList.toggle("finish")

  }
  calculate();
}

)
function create(){
    let msgspan=document.createElement("span"),
    msgtext=document.createTextNode("no tasks to show");
    msgspan.appendChild(msgtext);
    msgspan.className="no-tasks-message";
    taskcontainer.appendChild(msgspan);
}
function calculate(){
    taskcount.innerHTML=document.querySelectorAll(".tasks-content .task-box").length;
    taskcomplete.innerHTML=document.querySelectorAll(".tasks-content .finish").length;
}