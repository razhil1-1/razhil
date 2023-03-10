/* ================================= toggle style switcher ================================= */
const bgSwitcherToggle = document.querySelector(".bg-switcher-toggler");
bgSwitcherToggle.addEventListener("click", () =>{
    document.querySelector(".bg-switcher").classList.toggle("open");
})
//hide Bg switcher on scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".bg-switcher").classList.contains("open"))
    {
        document.querySelector(".bg-switcher").classList.remove("open");

    }
    
})
/* ================================= Background Colors ================================= */
const alternateBackground = document.querySelectorAll(".alternate-bg");
function setActiveBg(color)
{
    alternateBackground.forEach((bg) => {
        if(color === bg.getAttribute("title"))
        {
            bg.removeAttribute("disabled");
        }
        else
        {
            bg.setAttribute("disabled","true");

        }
    })
}

