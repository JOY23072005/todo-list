const input=document.getElementById("input-box");
const btn=document.getElementById("submit");
const output=document.getElementById("todo-items");
function fun1(event){
    event.preventDefault();
    if(input.value!=""){
    output.innerHTML+=`<div class="todo-box" ><span class="check"></span><p class="todos">${input.value}</p><button class="del">Delete</button></div>`
    input.value="";
    
}
    else{
        alert("Write something first!")
    }
}
document.getElementById("todo-items").addEventListener('click',function fun2(e){
    // console.log(e.target.tagName)
    if(e.target.tagName=="BUTTON"){
        e.target.parentElement.remove();
    }
    else if(e.target.tagName=="SPAN"){
        if(e.target.classList.toggle("checked")){
            e.target.nextSibling.style.textDecoration="line-through";}
        else{
            e.target.nextSibling.style.textDecoration="none";
        }
    }
},false)
btn.addEventListener('click',fun1,false);
input.addEventListener('Enter',fun1,false);