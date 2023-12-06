let productPage = [];

function Constructor(url, id, name, description, price) {
    this.url = url;
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
}

let item1 = new Constructor('https://i.postimg.cc/NfnjfqNJ/yugioh6.jpg', 1, 'figurine', 'Classic YuGiOh display figurine', 130);
let item2 = new Constructor('https://i.postimg.cc/pdfWZ9P4/yugioh5.webp', 2, 'card sleeves', 'Sleeves to protect your cards', 120);
let item3 = new Constructor('https://i.postimg.cc/FR3QmzWm/yugioh3.jpg', 3, 'box set', 'comes with more than just cards', 160);
let item4 = new Constructor('https://i.postimg.cc/YSxyrkpT/yugioh2.jpg', 4, 'card packs gold', 'open card packs and strengthen your deck', 25);
let item5 = new Constructor('https://i.postimg.cc/tR5b7Qgd/yugioh1.jpg', 5, 'card packs black', 'open card packs and strengthen your deck', 25);

productPage.push(item1, item2, item3, item4, item5);
let set = document.getElementById('productList');
let product = JSON.parse(localStorage.getItem(''));

function upload(product) {
    let productItems = productPage.map(function (item, index) {
        return `
       
            <div class='card col-6'>
                <div><img src=${item.url}></div>
                <div class='container'>
                    <h3>${item.id}</h3>
                    <h1>${item.name}</h1>
                    <h3>R${item.price}</h3>
                    <h5>${item.description}</h5>
                    <button id="cart-btn" value='${index}' data-add>Add To Cart</button>
                    
                </div>
            </div>`;

    });

    set.innerHTML = productItems.join('');
}

upload(product);

function sortItems() {
    let sortedProduct = productPage.slice(); // Create a copy of the array to avoid modifying the original
    sortedProduct.sort((a, b) => a.price - b.price);
    upload(sortedProduct);
}

let sortButton = document.querySelector('.sort');
sortButton.addEventListener('click', sortItems);


function search() {
    let inputValue = document.getElementById('filterInput').value.toLowerCase();

    
    if (inputValue.trim() === "") {
        alert('Item not found');
        
        upload(productPage);
        
    } else {
       
        let filteredItems = productPage.filter(item => item.name.toLowerCase().includes(inputValue));
        upload(filteredItems);
    }
}

let searchBtn = document.querySelector(".search");
searchBtn.addEventListener('click', search)



let main = document.querySelector('main')

main.addEventListener('click' , function(){
    if(event.target.hasAttribute('data-add')){
        add(event.target.value)
      
    }
})


let button = document.getElementById("cart-btn");
let cart = document.getElementById('cart')
        let i = 1;
        button.addEventListener("click", () => {
        
            cart.innerText = i++;
        })
        
function add(index) {
    productPage.push(product[index])
    localStorage.setItem('purchased' , JSON.stringify(purchased))
}
// --------------------------------------------------------------------

        