const form = document.querySelector('form')
console.log(form);


form.addEventListener('submit',(elem) => {
    elem.preventDefault();

const weight = document.querySelector('#weight').value
const height = document.querySelector('#heigth').value
const res = document.querySelector('#res')

console.log(weight);
console.log(height);

if(height === '' || height < 0 || isNaN(height)){
    res.innerHTML =`Please enter height` 
}else if(weight === '' || weight < 0 || isNaN(weight)){
    res.innerHTML =`Please enter weight` 
}else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    res.innerHTML= `BIMI : ${bmi}`

    // weight Guide
    const guidRes = document.querySelector('#guid-res')
if (bmi < 18.5) {
    guidRes.innerHTML = `You're in the underweight range`
    guidRes.style.color ='#0074D9'
} else if (bmi >= 18.5 && bmi < 25) {
    guidRes.innerHTML = `You're in the healthy weight range`
     guidRes.style.color ='#3F9C35'
} else if (bmi >= 25 && bmi < 30) {
    guidRes.innerHTML = `You're in the overweight range`
     guidRes.style.color ='#EAAB00'
} else {
    guidRes.innerHTML = `You're in the obese range`
     guidRes.style.color ='#D6003F'
}
}

})
