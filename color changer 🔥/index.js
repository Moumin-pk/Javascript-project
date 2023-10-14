const button = document.querySelectorAll('.button')
const body = document.querySelector('body')

button.forEach((elem)=>{
    console.log(elem);
elem.addEventListener('click',(elem)=>{
console.log(elem.target.id);

   // => with if else
// if(elem.target.id == 'grey'){
//     body.style.backgroundColor='grey';
//     body.style.color ='#fff'
// }
// if(elem.target.id == 'white'){
//     body.style.backgroundColor='white';
//     body.style.color='#212121'
// }
// if(elem.target.id == 'blue'){
//     body.style.backgroundColor='blue';
//     body.style.color ='#fff'
// }
// if(elem.target.id == 'yellow'){
//     body.style.backgroundColor='yellow';
//     body.style.color ='#212121'
// }

// => switch

switch (elem.target.id) {
    case 'grey':
    body.style.backgroundColor= elem.target.id;
    body.style.color ='#fff'
        break;
    case 'white':
    body.style.backgroundColor= elem.target.id;
    body.style.color='#212121'
        break;
    case 'blue':
    body.style.backgroundColor= elem.target.id;
    body.style.color ='#fff'
        break;
    case 'yellow':
    body.style.backgroundColor= elem.target.id;
    body.style.color ='#212121'
        break;
}

})
})
