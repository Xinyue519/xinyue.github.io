let topBtn = document.getElementById("back-to-top");
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");
let eliteLinkBtn = document.getElementById("eliteLink-btn");
let btaiBtn = document.getElementById("btai-btn");
let eyeCanDoBtn = document.getElementById("eyeCanDo-btn");
let jpmgBtn = document.getElementById("jpmg-btn");

window.onscroll = function() {scrollFunction()};

function animateOnScroll(selector, threshold = 0.3) {
    const element = document.querySelector(selector);
    if (!element) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    element.classList.add("in-view");
                } else {
                    element.classList.remove("in-view");
                }
            });
        },
        { threshold }
    );

    observer.observe(element);
}

document.addEventListener("DOMContentLoaded", function () {
    animateOnScroll("#profile-pic");
    animateOnScroll("#about-info-container");
    animateOnScroll(".experience-container")
});


let slideIndex = 1;
showSlide(slideIndex);

function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }
}

topBtn.addEventListener('click', ()=>{
    backToTop();
})

function backToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

prevBtn.addEventListener('click', () => plusSlide(-1));
nextBtn.addEventListener('click', () => plusSlide(1));

function showSlide(n){
    let slides = document.getElementsByClassName("project-container");
    let dots = document.getElementsByClassName("dot");
    if(n > slides.length){
        slideIndex = 1;
    }
    else if(n<1){
        slideIndex = slides.length;
    }else{
        slideIndex = n;
    }


    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";

    for(let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    dots[slideIndex - 1].classList.add("active");
}

function plusSlide(n){
    slideIndex += n;
    showSlide(slideIndex);
}

function currentSlide(index){
    showSlide(index);
}

// experience section

eyeCanDoBtn.addEventListener('click', ()=>openExperience('EyeCanDo'));
jpmgBtn.addEventListener('click', ()=>openExperience('jpmg'));
btaiBtn.addEventListener('click', ()=>openExperience('btAI'));
eliteLinkBtn.addEventListener('click', ()=>openExperience('eliteLink'));

function openExperience(name){
    const experience = document.getElementById(name);
    const currentActive = document.querySelector('.experience-active');
    if(currentActive.id == name){
        return;
    }
    if (currentActive) {
        currentActive.classList.remove('experience-active');
        currentActive.classList.add('hidden');
    }
    experience.classList.add('experience-active');
}
