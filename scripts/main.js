document.addEventListener('DOMContentLoaded', () => {
    const cart = [];

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            const productId = event.target.dataset.id;
            const product = products.find(p => p.id == productId);

            cart.push(product);
            console.log(cart);
            alert(`${product.name} has been added to your cart.`);
        });
    });
});
PORT=3000
node app.js
