


const inputEl = document.querySelector('.form-control')
const dropDownEl = document.querySelector('.card')
const ulList = document.querySelector('.list')

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
      "name":"christopher"
    },
    {
      "id":10008,
      "name":"calvin"
    },
    {
      "id":10009,
      "name":"christy"
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



// rendering dropDown users list based on the letter
function renderDropDown(e){
   e.preventDefault();

 
 if(inputEl.value.length>0){
   renderUsers()
  // dropDownEl.classList.toggle('done')
  dropDownEl.style.display="block "
 }else{
  dropDownEl.style.display="none  "
 }

}

function renderUsers(){
  // clearing the ulList container before adding
  ulList.innerHTML="";
   usersData.forEach(user=>{
     if(user.name.toLowerCase().includes(inputEl.value.toLowerCase()))
     addUsers(user)
   })
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