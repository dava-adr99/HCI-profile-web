/*=== TAMPILAN MENU ===*/
const showMenu = (toggleid, navId) =>{
    const toggle = document.getElementById(toggleid),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toogle','nav-menu')


