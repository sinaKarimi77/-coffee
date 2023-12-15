let search = document.querySelector('.search-box');
document.querySelector('#search-icon').onclick = () =>{
    search.classList.toggle('active');
    navbar.classList.remove('active');
}
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-icon').onclick = () =>{
    navbar.classList.toggle('active');
    search.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    search.classList.remove('active');

}


let header=document.querySelector('header');
window.addEventListener('scroll' , () =>{
    header.classList.toggle('shadow', window.scrollY > 0);
});



var slideIndex = 0;
ShowSlides();
function ShowSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    for(i=0;i< slides.length;i++)
    {
        slides[i].style.display="none";
    }

    slideIndex++;
    if(slideIndex > slides.length)
    {
        slideIndex = 1;
    }  

    for(i=0;i<dots.length;i++)
    {
        dots[i].className = dots[i].className.replace(" active","");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex -1].className +=" active";

    setTimeout(ShowSlides,2000);
}

const loaderElem = document.querySelector('.loader')

window.addEventListener('load', function () {
    //first way
    loaderElem.classList.add('hidden')

    // second way
    loaderElem.className += ' hidden' // class="loader hidden"

})



