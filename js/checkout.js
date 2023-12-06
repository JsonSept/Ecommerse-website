let h1 = document.querySelector('h1')
h1.innerText = "Checkout"
// let purchased = []
let purchased = JSON.parse(localStorage.getItem('purchased'));

let table = document.querySelector('table');

table.innerHTML = purchased.map((item,index)=>{
    return `
    <tr>
        <td>${index+1}</td>
        <td>${item.name}</td>
        <td>${item.name}</td>
        <td>${item.description}</td>
        <td>R${item.price}</td>
        <td><button>X</button></td>
    </tr>
    `
}).join(``)

