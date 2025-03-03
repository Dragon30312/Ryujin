let scrolledTemp = 0;

document.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    let scrolled = window.scrollY;

    if (scrolled > scrolledTemp) {
        nav.style.transitionDuration = '0.5s';
        nav.classList.add('hideNav');
        console.log("scrollujesz w dol")
        scrolledTemp = scrolled;

    } else if(scrolledTemp > scrolled){
        console.log("scollujesz w gore")
        nav.classList.remove('hideNav');
        setTimeout(function() {
            nav.style.transitionDuration = '0s';
        }, 5000);
        scrolledTemp = scrolled;

    }
});

let clicked=0;
function hamburgerBar(){
    const hamburgerBarContainer = document.querySelector('.hamburgerBarContainer');
    if(clicked == 0){
        clicked = 1;
        hamburgerBarContainer.style.transitionDuration = '0.5s';
        hamburgerBarContainer.style.left = '0vw';
        document.body.style.overflowY='hidden';
    }
    else{
        clicked = 0;
        hamburgerBarContainer.style.left = '100vw';
        setTimeout(function() {
            hamburgerBarContainer.style.transitionDuration = '0s';
        }, 5000);
        document.body.style.overflowY='visible';
    }
}


document.addEventListener('mousemove', e => {
    let x = event.pageX;
    document.documentElement.style.setProperty(`--x`, `${x}px`);
});

