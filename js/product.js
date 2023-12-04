
let h1 = document.querySelector('h1');
h1.innerText = "Product page";

let sort = document.createElement('button');
sort.innerText = "Sort"
document.querySelector('main').appendChild(sort);

let search = document.createElement('button');
sort.innerText = "search"
document.querySelector('main').appendChild(search);

function sorting() {
    products.sort( (a, b)=> {
        // Sorting by price
    })
}

// function to sort through prices
function sorting() {
    products.sort((a, b) => {
        // Sorting by price
        return a.price - b.price;
    });
}