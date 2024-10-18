const buttons = document.querySelectorAll('button');
const inputBox = document.querySelector('#input-box')



buttons.forEach((button) => {
    button.addEventListener("click", ()=>{

        inputBox.value= button.id
        
    })
}
)