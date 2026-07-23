const read= require("readline.sync")
const product =
[
  { name: 'Apple', category: 'Pome', price: 2.5 },
  { name: 'Banana', category: 'Tropical', price: 1.2 },
  { name: 'Orange', category: 'Citrus', price: 2.0 },
  { name: 'Mango', category: 'Tropical', price: 3.5 },
  { name: 'Grapes', category: 'Berry', price: 4.0 },
  { name: 'Pineapple', category: 'Tropical', price: 5.0 },
  { name: 'Strawberry', category: 'Berry', price: 6.5 },
  { name: 'Watermelon', category: 'Melon', price: 7.0 },
  { name: 'Kiwi', category: 'Berry', price: 3.0 },
  { name: 'Papaya', category: 'Tropical', price: 4.5 }
]

// Shows items
function showInventoryItems() {
    
}
// Adds products
function addProducts() {
    console.log("New Product Details")
    const name = read.question("Enter Product Name")
    const category = read.question("Enter Product Category")
    const price = read.question("Enter Product Product")
    const newProduct={
        name: name, 
        category: category, 
        price: price

    }
    product.push(newProduct);
}
// Removes products
function removeProducts() {
    
}
// Filters products by price
function filterProductByPrice() {
    
}
// Filters products by category
function filterProductByCategory() {
    const categoryName= read.question("Enter category:")
    const filterProducts = product.filter((item)=>{
        return item.category.toLowerCase() === categoryName.toLowerCase();
    })
    console.log("Filter Product \n");
    filterProducts.forEach(
        (
            item
        ) => console.log(item.name.item.category.item.price)
    )
}

while(true){
    console.log("="*10)
}



