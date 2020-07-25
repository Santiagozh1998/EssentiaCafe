const openMenu = () => {

    let urlMenu = 'https://drive.google.com/file/d/1N5XdlnBcG62OIhFFL5HHMacHzub62Wm-/view?usp=sharing';
    window.open(urlMenu);
}

const handlerCheck = () => {

    if(screen.width <= 800) {

        let checked = document.getElementById("res-menu").checked == true;
        
        if(checked) {
            document.getElementById("res-menu").checked = false;
        }
    }
}

window.addEventListener("scroll", function handlerScroll() {
    if(screen.width <= 800) {

        if(window.scrollY != 0) {
            document.getElementById("res-menu").checked = false;
        }
    }
})