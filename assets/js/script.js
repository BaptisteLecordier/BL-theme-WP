console.log('JS OK')


var blNavs = document.querySelectorAll('.bl-nav');

blNavs.forEach(blNav => {

    blNav.querySelector('.bl-nav-cart-btn').addEventListener("click", function () {
        blNav.querySelector('.bl-nav-cart-content').classList.remove('bl-nav-cart-default-state');
        blNav.querySelector('.bl-nav-cart-content').classList.remove('bl-nav-cart-close-state');
        blNav.querySelector('.bl-nav-cart-content').classList.add('bl-nav-cart-open-state');

    });

    blNav.querySelector('.bl-nav-cart-exit-button').addEventListener("click", function () {
        blNav.querySelector('.bl-nav-cart-content').classList.remove('bl-nav-cart-open-state');
        blNav.querySelector('.bl-nav-cart-content').classList.add('bl-nav-cart-close-state');

    });
});