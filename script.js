
let cartCount = 0;

const addToCart = document.querySelectorAll('.add-to-cart');
let cart_Count = document.getElementById('cart-count');

addToCart.forEach(element => {
    element.addEventListener("click", () => {
        cartCount++;
        alert("Item added to cart sucessfully.")
        cart_Count.textContent = `Cart: ${cartCount} items`
    })
})




