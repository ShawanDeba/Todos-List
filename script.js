const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');


inputBox.addEventListener('keypress',function(event){
    if(event.key=="Enter")
        addTask();
})


function addTask(){
    if(inputBox.value===''){
        alert("Please Write Something!!");
    }

    else
    {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    saveData();
    inputBox.value="";
}



listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI")
        e.target.classList.toggle("checked");

    else
        e.target.parentElement.remove();

    saveData();
});


// for storing the data
function saveData(){
    localStorage.setItem("task",listContainer.innerHTML);
}


// function to show the stored data

function showTask(){
    listContainer.innerHTML = localStorage.getItem("task");
}

showTask();