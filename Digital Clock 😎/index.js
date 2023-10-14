const theme = document.querySelectorAll('#theme');
console.log(theme);
theme.forEach((elem) => {
    const body = document.querySelector('body')
    console.log(elem);
elem.addEventListener('click' , (elem) => {
    console.log(elem.target.className);
    console.log(elem.target);
    const display = elem.target

switch (elem.target.className) {
    case 'theme white':
        body.style.backgroundColor = '#fff'
        body.style.color = 'black'
        break;
    case 'theme orange':
        body.style.backgroundColor = 'orange'
        body.style.color = 'black'
        break;
    case 'theme dark':
        body.style.backgroundColor = 'black'
        body.style.color = '#fff'
        break;
    case 'theme yellow':
        body.style.backgroundColor = 'yellow'
        body.style.color = 'black'
        break;
    default:
        break;
}
})
})

// clock
const dateDisplay = document.querySelector('#date')
console.log(dateDisplay);
const standard = document.querySelector('#standard')

// hard method => 2 some hard code

function date(){
setInterval(() => {
let date = new Date();
let h = date.getHours()
let m = date.getMinutes()
let s = date.getSeconds()
let section = 'AM'



// AM  - PM section
if(h >= 12){
    section = 'PM'
}

// convert time in24h formate to  12h formate
if(h > 12){
    h = h - 12;
}

h = h < 10? "0"+h :h;
m = m < 10? "0"+m :m;
s = s < 10? "0"+s :s;

    dateDisplay.innerHTML =`${h} : ${m} : ${s}  ${section}`
}, 1000);

}
date();

// easy method => 1

// let date = new Date();
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());



// setInterval( () => {
//     let date = new Date();
//     dateDisplay.innerHTML = date.toLocaleTimeString()
//     // standard.innerHTML = date.
// },1000)
