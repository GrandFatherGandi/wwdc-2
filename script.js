let nav = document.querySelector('.nav');

window.onscroll = () => {
    const y = document.body.scrollTop;
    const scrolledClass = 'scrolled';

    (y > 100) ? nav.classList.add(scrolledClass) : nav.classList.remove(scrolledClass);
    // if(y > 100) {
    //     nav.classList.add(scrolledClass);
    // } else {
    //     nav.classList.remove(scrolledClass);
    // }
}


let show_more_button = document.querySelector('.button_gallery');

const gallery_view = document.querySelector('.gallery_view_more');
const gallery_show ='show';
let visible = (gallery_view.style.display=="block");

show_more_button.addEventListener("click", (event) => { 
    event.preventDefault(); //funkcja która resetuje domyślne zachowanie 
    if(visible==false){
        gallery_view.classList.add(gallery_show);
        show_more_button.innerHTML = "Show Less";
        visible = true;
    } else {
        gallery_view.classList.remove(gallery_show);
        show_more_button.innerHTML = "Show More";
        visible = false;
        
    }
    console.log()
})

let show_nav_list = document.querySelector('.nav_button');
let nav_li = document.querySelector('.nav_list');

show_nav_list.addEventListener("click", (event) => {
    let nav_li_visible = (nav_li.style.display=="block")
    event.preventDefault(); 
    if(nav_li_visible==false){
    nav_li.style.display="block";
    

}else {
    console.log("sdsasddsa");
        nav_li.style.display="none";  
        
    }
})

$("#nav").scrollspy({ offset: -75 });
