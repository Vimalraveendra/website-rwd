


const inputEl = document.querySelector('.form-control')
const dropDownEl = document.querySelector('.card')
const ulList = document.querySelector('.list')
const lettersList = document.querySelector('.letters')
const patientList = document.querySelector('.patient-list')
const patientContainerEl = document.querySelector('.card-container')

  const usersData=[
    {
      "id":10001,
      "name":"Abraham"
    },{
      "id":10002,
      "name":"Adam"
    },{
      "id":10003,
      "name":"Antony"
    },
    {
      "id":10004,
      "name":"Bobby"
    },
    {
      "id":10005,
      "name":"Boss"
    },
    {
      "id":10006,
      "name":"Bencher"
    },
    {
      "id":10007,
      "name":"Christopher"
    },
    {
      "id":10008,
      "name":"Calvin"
    },
    {
      "id":10009,
      "name":"Christy"
    },
    {
      "id":10010,
      "name":"Don"
    },
    {
      "id":10011,
      "name":"Danny"
    },
    {
      "id":10012,
      "name":"Denver"
    },
    {
      "id":10013,
      "name":"Eagle"
    },
    {
      "id":10014,
      "name":"Entity"
    },
    {
      "id":10015,
      "name":"Elgar"
    },
    {
      "id":10016,
      "name":"Fedric"
    },
    {
      "id":10017,
      "name":"Fernandes"
    },
    {
      "id":10018, 
      "name":"Felix"
    }
  
  
  ]

  function  filterPatientsList(e){
    // clearing the parentList container before adding
    patientList.innerHTML="";
    let text =e.target.textContent;
    usersData.forEach(user=>{
      if(user.name.charAt(0).toLowerCase()===text.toLowerCase()){
      addPatients(user)
      }
    })
  }

  function addLetters(letter){
    const lettersLi = document.createElement('li')
    const letterText = document.createTextNode(letter)
    lettersLi.appendChild(letterText)
    lettersLi.addEventListener('click',filterPatientsList)
    lettersLi.addEventListener('mouseleave',renderPatients)
    lettersList.appendChild(lettersLi )
    // userLi.innerHTML=` 
    //  ${user.name}
    // `
    // ulList.appendChild(userLi)
  }


  function renderLetters(){
      // clearing the lettersList container before adding
  lettersList.innerHTML="";
 let letters =usersData.map(user=>{  
    return user.name.charAt(0)
    
  })
  // removing the duplicate values
 letters =[...new Set(letters)]
  letters.forEach(letter=>addLetters(letter))
 
  }

  renderLetters();


  function addCard(user){
    const cardLi=document.createElement('div')
    cardLi.classList.add('patient-card');
    cardLi.innerHTML=`
    <h3>${user.name}</h3>
      <p>${user.id}</p>
    `
    patientContainerEl.appendChild(cardLi)
  }

  function renderCard(e){
        //  clearing the  patient container before adding
    patientContainerEl.innerHTML="";
    let text = e.target.textContent;
    usersData.forEach(user=>{
      if(user.name.toLowerCase()===text.toLowerCase()){
       addCard(user)
      }
    })
    
  }


function addPatients(user){
  const patientLi = document.createElement('li')
  const patientText = document.createTextNode(user.name)
  patientLi.addEventListener('click',renderCard)
  patientLi.appendChild(patientText)
  patientList.appendChild(patientLi )
  // userLi.innerHTML=`
  //  ${user.name}
  // `
  // ulList.appendChild(userLi)

}


 function renderPatients(){
 // clearing the parentList container before adding
patientList.innerHTML="";
usersData.forEach(user=>{
  addPatients(user)
})

  }

renderPatients();


// rendering dropDown users list based on the letter
function renderDropDown(e){
   e.preventDefault();

   //checking the input value is greater than zero
 if(inputEl.value.length>0){
  
   const users =renderUsers() 
 //checking the filter usersList length greater than zero
   if(users.length>0){
   dropDownEl.style.display="block"
  // dropDownEl.classList.toggle('done')
   }else{
    dropDownEl.style.display="none  "
   }
   // if there is no input value display none
  }else{
    dropDownEl.style.display="none  "
   }
}




function renderUsers(){

  let users=[]
  // clearing the ulList container before adding
  ulList.innerHTML="";
    usersData.forEach(user=>{
     if(user.name.toLowerCase().includes(inputEl.value.toLowerCase())){
     addUsers(user)
      users.push(user)
     }
   })
   return users
}

function addUsers(user){

  const userLi = document.createElement('li')
  const userText = document.createTextNode(user.name)
  userLi.appendChild(userText)
  ulList.appendChild(userLi )
  // userLi.innerHTML=`
  //  ${user.name}
  // `
  // ulList.appendChild(userLi)
     
     
}





inputEl.addEventListener('input',renderDropDown)