const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

//-------------operacion fon form---------------------------------------------------

form.addEventListener('submit', sumaInputValues);

function sumaInputValues(event){
    console.log({event});
    event.preventDefault();
    const sumaInput = Number(input1.value) + Number(input2.value);
    pResult.innerText = "Resultado: " + sumaInput;
}

//-------------SUMA---------------------------------------------------

// btn.addEventListener('click', btnOneClick);

// function btnOneClick(){
//     console.log(Number(input1.value) + Number(input2.value));
//     const sumaInput = Number(input1.value) + Number(input2.value);
//     pResult.innerText = "Resultado: " + sumaInput;
// }

// -------------------------------------------------------------------

// console.log(input.value);

// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input
// });

// h1.innerHTML = 'Patito <br> Feo';
// h1.innerText = 'Patito <br> Feo';
// console.log(h1.getAttribute('class'))
// h1.setAttribute('class', 'rojo')

// h1.classList.add('rojo');
// h1.classList.remove('verde');
// h1.classList.toggle('verde'); 
// h1.classList.contains('verde');

// input.value = "456"

// const img = document.createElement("img");
// img.setAttribute('src', 'https://img.freepik.com/foto-gratis/leon-melena-arcoiris-ojos-azules_1340-39421.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699315200&semt=ais');

// console.log(img);

// pid.innerHTML = ""
// pid.appendChild(img);

// pid.replaceWith(img);