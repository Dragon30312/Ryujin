const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            // entry.target.classList.remove('show');
        }
    });
});


const hiddenItems = document.querySelectorAll('.hidden');
const hidden2 = document.querySelectorAll('.hidden2');
const hiddenFromLeftItems1 = document.querySelectorAll('.hiddenFromLeft1')
const hiddenFromLeftItems2 = document.querySelectorAll('.hiddenFromLeft2');
const hiddenFromLeftItems3 = document.querySelectorAll('.hiddenFromLeft3');
const hiddenFromLeftItems4 = document.querySelectorAll('.hiddenFromLeft4');
const hiddenFromLeftItems5 = document.querySelectorAll('.hiddenFromLeft5');
const hiddenFromLeftItems6 = document.querySelectorAll('.hiddenFromLeft6');
const hiddenStaticItems = document.querySelectorAll('.hiddenStatic');
const hiddenStaticItems2 = document.querySelectorAll('.hiddenStatic2');
hiddenItems.forEach((el) => observer.observe(el));
hidden2.forEach((el) => observer.observe(el));
hiddenFromLeftItems1.forEach((el) => observer.observe(el));
hiddenFromLeftItems2.forEach((el) => observer.observe(el));
hiddenFromLeftItems3.forEach((el) => observer.observe(el));
hiddenFromLeftItems4.forEach((el) => observer.observe(el));
hiddenFromLeftItems5.forEach((el) => observer.observe(el));

hiddenFromLeftItems6.forEach((el) => observer.observe(el));
hiddenStaticItems.forEach((el) => observer.observe(el));

hiddenStaticItems2.forEach((el) => observer.observe(el));
