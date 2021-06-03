


const inputEl = document.querySelector('.form-control')
const dropDownEl = document.querySelector('.card')
const ulList = document.querySelector('.list')
const lettersList = document.querySelector('.letters')

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
    }
  
  
  ]

  function addLetters(letter){
    console.log("hello  ")
    console.log('user',letter)
    const lettersLi = document.createElement('li')
    const letterText = document.createTextNode(letter)
    lettersLi.appendChild(letterText)
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
 console.log("letters",letters)
  letters.forEach(letter=>addLetters(letter))
 
  }

  renderLetters()


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