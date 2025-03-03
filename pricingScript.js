function autoScroll() {
    var page = $("html, body");
    page.scrollTop(page.scrollTop()+300);
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

let canScroll = true
document.addEventListener('scroll', () => {
    const dragon = document.querySelector('.hero > .img');
    let scrolled = window.scrollY;

    dragon.style.marginTop = scrolled/2 + "px";

    if(scrolled>3000){
        canScroll = false;
    }
    if(scrolled<=3000 && canScroll){
        autoScroll();
    }


});