let productPage = []

function Constructor(url,id,name,description,price){
    this.url = url
    this.id = id
    this.name = name
    this.description = description
    this.price = price
}
//-------------------------------------------------------------------------------------------------------------------
//item list
let item1 = new Constructor('https://i.postimg.cc/NfnjfqNJ/yugioh6.jpg',1, 'figurine' , 'Classic YuGiOh display figurine',130)
let item2 = new Constructor('https://i.postimg.cc/pdfWZ9P4/yugioh5.webp',2, 'card sleeves' , 'Sleeves to protect your cards',120)
let item3 = new Constructor('https://i.postimg.cc/FR3QmzWm/yugioh3.jpg',3, 'box set' , 'comes with more than just cards',160)
let item4 = new Constructor('https://i.postimg.cc/YSxyrkpT/yugioh2.jpg',4, 'card packs gold' , 'open card packs and strengthen your deck',25)
let item5 = new Constructor('https://i.postimg.cc/tR5b7Qgd/yugioh1.jpg',5, 'card packs black' , 'open card packs and strengthen your deck',25)

//--------------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------------
productPage.push(item1,item2,item3,item4,item5)
let set = document.getElementById('productList')
localStorage.setItem("productPage",JSON.stringify(productPage))

// //getItem gets the item from the browser
// //sets the array from local storage to array(items) in code
product = JSON.parse(localStorage.getItem('productPage')) 

function upload(){
    let productItems = product.map(function(item,index){
        console.log(item);
        // console.log(index);
        return `
            <div class='card col-6';
            <div><img src=${item.url}</div>
            <div class='container'>
                <h3>${item.id}</h3>
                <h1>${item.name}</h1>
                <h3>R${item.price}</h3>
                <h5>${item.description}</h5>
                <button value = '${index}' data-add>Add To Cart</button>
            </div>
            </div>`

    });

set.innerHTML = productItems.join('')

}
upload()


function sortItems(itemArray) {
    return itemArray.sort((a, b) => {
       if (a.price < b.price) {
         return -1;
       }
       if (a.price > b.price) {
         return 1;
       }
       return 0;
    });
   }

// let sort = document.querySelector('sort')
// sort.addEventListener('click' , sortItems)
   

   let sortedProduct = sortItems(productPage);
   console.log(sortedProduct);