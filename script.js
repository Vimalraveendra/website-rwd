


const inputEl = document.querySelector('.form-control')


function renderDropDown(e){
   e.preventDefault();

 const dropDownEl = document.querySelector('.card')
 dropDownEl.classList.toggle('done')
}


inputEl.addEventListener('input',renderDropDown)