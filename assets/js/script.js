console.log('JS OK')



const blNav = document.querySelector('.bl-nav');

function openCart() {
    blNav.querySelector('.bl-nav-cart-content').classList.remove('bl-nav-cart-default-state');
    blNav.querySelector('.bl-nav-cart-content').classList.remove('bl-nav-cart-close-state');
    blNav.querySelector('.bl-nav-cart-content').classList.add('bl-nav-cart-open-state');
    document.querySelector('.bl-body').classList.add('obscured-while-cart-is-open');
    blNav.classList.add('obscured-while-cart-is-open');
}

function closeCart() {
    blNav.querySelector('.bl-nav-cart-content').classList.remove('bl-nav-cart-open-state');
    blNav.querySelector('.bl-nav-cart-content').classList.add('bl-nav-cart-close-state');
    document.querySelector('.bl-body').classList.remove('obscured-while-cart-is-open');
    blNav.classList.remove('obscured-while-cart-is-open');

}






    

blNav.querySelector('.bl-nav-cart-btn').addEventListener("click", openCart);

blNav.querySelector('.bl-nav-cart-exit-button').addEventListener("click", closeCart);
    








    

// document.querySelectorAll('.bl-nav').forEach(blNav => {




//     blNav.querySelector('.bl-nav-cart-btn').addEventListener("click", function openCart() {
//         blNav.querySelector('.bl-nav-cart-content').classList.remove('bl-nav-cart-default-state');
//         blNav.querySelector('.bl-nav-cart-content').classList.remove('bl-nav-cart-close-state');
//         blNav.querySelector('.bl-nav-cart-content').classList.add('bl-nav-cart-open-state');
//         document.querySelector('.bl-body').classList.add('obscured-while-cart-is-open');
//         blNav.classList.add('obscured-while-cart-is-open');
//     });

//     blNav.querySelector('.bl-nav-cart-exit-button').addEventListener("click", function closeCart() {
//         blNav.querySelector('.bl-nav-cart-content').classList.remove('bl-nav-cart-open-state');
//         blNav.querySelector('.bl-nav-cart-content').classList.add('bl-nav-cart-close-state');
//         document.querySelector('.bl-body').classList.remove('obscured-while-cart-is-open');
//         blNav.classList.remove('obscured-while-cart-is-open');

//     });
// });


