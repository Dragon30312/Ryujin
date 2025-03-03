

document.addEventListener('scroll', () => {

    const numbers = document.getElementById("numbers");
    let scrolled = window.scrollY;
    if(scrolled>300){
        numbers.style.marginLeft = (-scrolled+3000)/19.2+"vw";
    }
});

