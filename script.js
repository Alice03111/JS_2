var inputData = document.querySelector("input[type = 'text']");
var ulSpisok = document.querySelector("ul");
var ps = document.getElementsByTagName("p");
var saveBtn = document.getElementById("save");
var clearBtn = document.getElementById("clear");
var NameAuthor = document.getElementById("myName");
var section = document.querySelector('section');
let blockRemove = document.getElementsByClassName('blockRemove');
let spanDate = document.querySelectorAll('spanDate');
let get = document.getElementById("window");
var  modal = document.getElementById('modal');
var btn = document.getElementById('info');
var close = document.getElementsByClassName("close")[0];

btn.onclick = function (){
    modal.style.display = "block";
}

close.onclick = function(){
    modal.style.display = "none";
}

window.onclick = function (event){
    if(event.target == modal){
        this.modal.style.display = "none";
    }
}


let x = new Date();
let date = x.getDate();
let month = x.getMonth() + 1;
if (month <= 10) {
    month = '0' + month;
}
let year = x.getFullYear();
let dateTasks = date + "-" + month + "-" + year;


function deleteTodo() {
    for (let div of blockRemove) {
        div.addEventListener('click', function () {
            div.parentElement.remove();
            event.stopPropagation();
        })
    }
}


function strikeTodo() {
    for (let p of ps) {
        p.addEventListener('click', function () {
            p.style.textDecoration = 'line-through';
            p.style.color = "black";
        })
        
    }
}


function loadTodo() {
    if (localStorage.getItem('todoList')) {
        ulSpisok.innerHTML = localStorage.getItem('todoList');
    }

    deleteTodo();
    strikeTodo();
}

inputData.addEventListener('keypress', function (keyPressed) {
    if (keyPressed.which === 13) { 
        var liNew = document.createElement("li");
        
        var spanNew = document.createElement("span");
        spanNew.className = "spanDate";

        var svgNew = document.createElement("span");
        svgNew.className = "blockRemove";
      
        
        var pNew = document.createElement("p");
        

        var newTodo = this.value;
        this.value = "";

        if (newTodo === '') {
            this.value = "";
        } else {
            ulSpisok.appendChild(liNew).append(pNew, spanNew, svgNew);
            pNew.append(newTodo); 
            spanNew.append(dateTasks);
            deleteTodo();
            strikeTodo();
        }
    }
})


saveBtn.addEventListener("click", function () {
    localStorage.setItem('todoList', ulSpisok.innerHTML);
})

clearBtn.addEventListener('click', function () {
    ulSpisok.innerHTML = "";
    localStorage.setItem('todoList', ulSpisok.innerHTML);
})

NameAuthor.onclick = function(){
    openWindow()
};

function openWindow(){
    if(get.style.display == "none"){
        get.style.display = "flex";
    }
    else{
        get.style.display = "none";
    }
}
function clouseWindow(){
    get.style.display = "none";
}


deleteTodo();

loadTodo();

strikeTodo();