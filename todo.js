let inputs=document.getElementById("inp");
let text=document.querySelector(".text");

function Add(){
    if(inputs.value==""){
        alert("Pleas enter a task")
    }
    else{
        let newele=document.createElement("ul");
        newele.innerHTML = `<span>${inputs.value}</span><i class="fas fa-trash"></i>`;
        document.querySelector('.text').appendChild(newele);
        inputs.value="";
        newele.querySelector("i").addEventListener("click", remove);
        function remove(){
            newele.remove();
        }
    }
}