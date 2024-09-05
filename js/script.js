let scrolltop = document.getElementById("backtotop")
console.log(scrolltop)
window.onscroll = function() {
    if(window.scrollY > 80 || document.documentElement.scrollTop > 80 ){
        scrolltop.style.display = "block"
    }
    else{
        scrolltop.style.display = "none"
    }
}