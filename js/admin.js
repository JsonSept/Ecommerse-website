let h1 = document.querySelector('h1')
h1.innerText = "Admin Page"

//empty array to store our items/products
let productPage = []
//-------------------------------------------------------------------------------------------------------------------
//constructor function to create my objects
function Constructor(url,id,name,description,price){
    this.url = url
    this.id = id
    this.name = name
    this.description = description
    this.price = price
}
//-------------------------------------------------------------------------------------------------------------------
//item list
let item1 = new Constructor('https://i.postimg.cc/NfnjfqNJ/yugioh6.jpg',1, 'YuGiOh figurine' , 'Classic YuGiOh display figurine',130)
let item2 = new Constructor('https://i.postimg.cc/pdfWZ9P4/yugioh5.webp',2, 'YuGiOh card sleeves' , 'Sleeves to protect your cards',120)
let item3 = new Constructor('https://i.postimg.cc/FR3QmzWm/yugioh3.jpg',3, 'YugiOh Box set' , 'comes with more than just cards',160)
let item4 = new Constructor('https://i.postimg.cc/YSxyrkpT/yugioh2.jpg',4, 'YuGiOh card packs gold' , 'open card packs and strengthen your deck',25)
let item5 = new Constructor('https://i.postimg.cc/tR5b7Qgd/yugioh1.jpg',5, 'YuGiOh card packs black' , 'open card packs and strengthen your deck',25)

//--------------------------------------------------------------------------------------------------------------------
//Pushing items into array
productPage.push(item1,item2,item3,item4,item5)

    //sets the array in local storage
//items is the name of the array
//JSON.stringify turns objects into a string to be able to view in the console
localStorage.setItem("productPage",JSON.stringify(productPage))

//getItem gets the item from the browser
//sets the array from local storage to array(items) in code
product = JSON.parse(localStorage.getItem('productPage')) 
let set = document.querySelector('h1')

let deleteButton = document.querySelector('.delete')

//---------------------------------------------------------------------------------------------------------------------
function remove(position){
    // alert('button clicked')
    product = JSON.parse(localStorage.getItem('productPage')) 
    localStorage.setItem("productPage",JSON.stringify(productPage))
    productPage.splice(position,1)
    storage()
    upload()
}
//--------------------------------------------------------------------------------------------------------------------

//the window.onload() is an event handler , not an event listener
//You must figure out the event listener on your own
function upload(){
let productItems = productPage.map(function(item,index){
    console.log(item);
    
   return `
  <table>
    <tr>
      <td><img src='${item.url}' alt='${item.name}'></td>
      <td>${item.id}</td><br>
                    <td>${item.name}</td><br>
                    <td>R${item.price}</td><br>
                    <td>${item.description}</td><br>
      <td><button class='edit'>Edit</button></td>
      <td><button class='delete' value='${index}'>Delete</button></td>
    </tr>
  </table>


    `
            
})

set.innerHTML = productItems.join('')
}
upload()

// ------------------------------------------------------------------------------------------------------------------

function storage(){
    //sets the array in local storage
//items is the name of the array
//JSON.stringify turns objects into a string to be able to view in the console
localStorage.setItem("productPage",JSON.stringify(productPage))

//getItem gets the item from the browser
//sets the array from local storage to array(items) in code
itemStorage = JSON.parse(localStorage.getItem('productPage')) 
// remove()
}


// ------------------------------------------------------------------------------------------------------------------
set.addEventListener('click',function(){
    if(event.target.classList.contains('delete')) {
        remove(event.target.value)
        // alert(event.target.value)
    }
})

// function load(){
//     let spinner = document.getElementById('productList');
//     spinner.innerHTML.display = 
//     <div class="spinner-border m-5" role="status">
//     <span class="visually-hidden">Loading...</span>
//   </div>
    
// }
