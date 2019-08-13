// Your code goes here
// * [ ] `keydown`
// * [ ] `wheel`
// * [ ] `drag / drop`
// * [ ] `load`
// * [ ] `focus`
// * [ ] `resize`
// * [ ] `scroll`
// * [ ] `select`
// * [ ] `dblclick`

// 1st unique event listener - mouseover
// The mouseover evenet listener.  Whill turn nav links mouseover to yellow.
const navMouseOver = document.querySelector('.nav')
navMouseOver.addEventListener('mouseover', (event) =>{
  event.target.style.color = "#F6CD0F";
}
)

// 2nd unique event listener - mouseout
//The mouseout evenet listener.  Will turn nav links mouseout to defualt color.
const navMouseOut = document.querySelector('.nav')
navMouseOut.addEventListener('mouseout', (event) =>{
  event.target.style.color = "";
}
)


// 3rd unique event listener - click
// Fun In The Sun singup button.
// The first click will make an email form pop up and change the "learn more" text on the button to "Sumbit Email"
// The second click will change the "Submit Email" text on the button to "submitted"
const funInTheSunBtn = document.querySelector('#funInTheSunBtn')
  funInTheSunBtn.addEventListener('click', (event) =>{
    event.target.style.color = "red";
    event.target.background = "red"
    funInTheSunBtn.textContent = "Submit";
    funInTheSunBtn.addEventListener('click', (event) =>{
      funInTheSunBtn.textContent = "Email Submited"
 })
})

// Mountain Excursion sign up button
const mountainExcursionBtn = document.querySelector('#mountainExcursionBtn')
  mountainExcursionBtn.addEventListener('click', (event) =>{
    event.target.style.color = "red";
    event.target.background = "red"
    funInTheSunBtn.textContent = "Submit";
    mountainExcursionBtn.addEventListener('click', (event) =>{
      mountainExcursionBtn.textContent = "Email Sumbited"
 })
})

// Island Getaway sigup button
const islandGetawayBtn = document.querySelector('#islandGetawayBtn')
  islandGetawayBtn.addEventListener('click', (event) =>{
    event.target.style.color = "red";
    event.target.background = "red";
    islandGetawayBtn.textContent = "Submit";
    islandGetawayBtn.addEventListener('click', (event) =>{
      islandGetawayBtn.textContent = "Email Submited"
 })
})


document.addEventListener('keydown', (event) => {
  if (event.key === 'f') {
    event.key = "home"
    // alert('The f key was pressed!')
  }
})



document.addEventListener('keydown', function () {
  console.log('key was pressed!')
})

function keyPress() {
  console.log('key was pressed!')
}

document.addEventListener('keydown', keyPress)
