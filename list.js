const btn = document.querySelector(".add");
const info = document.querySelector(".info");
const ul  = document.querySelector(".items");
const form = document.querySelector('.form');




btn.addEventListener("click",(e) =>{

    e.preventDefault()

    const li = document.createElement('li');
    const btnRem = document.createElement('button');

    btnRem.textContent = "X";
    li.appendChild(document.createTextNode(`${info.value}`));//add text in a list tag
    
    li.appendChild(btnRem)//add the button to the list
    ul.appendChild(li)//add the list in the ul

    li.classList.add('list')//add class to html tag
    btnRem.classList.add('delbtn')

    btnRem.addEventListener("click",() => {
        li.remove()})

    info.value = "";

})

