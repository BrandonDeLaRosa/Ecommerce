
// =====================DOM======================

// el addEvent se le agrega al document, para que trabaje sobre la carga del html.
// El DOMContentLoaded (significa que la accion que esta esperando, es la carga del contenido del documento -> dentro del callback se agregan las intrucciones que hara posterior a la carga del documento )

// Funcion anonima -- funciona igual pero ene sta estructura va dar problemas 
// Para que una funciona anonima debe estar aqui.
// para estar despues document. add... debe ser funcion declarada.
// cont load = () => {
//     setTimeout(() =>{
//         loader.classList.add("hide")
//     }, 3000);
// }

document.addEventListener("DOMContentLoaded", ()=>{
    // La instruccion que se otorgara es el cambio de clase al loader, descrito en LOAD.
    load()
})

// esta funcion va contabilizar el tiempo que pasa postiror a la carga del dom, para cumplir con la funcion de otrogar acceso 3 seg despues de la carga del dom.
// Funcion declarada.


// ************En JS se usan ID´s y en CSS Classes...*************


// ==============LOADER ==============

// loader. Primer hay que identificarlo y despues de que el DOM cargue, va esperar 3 seg y va desaparecer.

const loader = document.getElementById("loader")

function load () {
    setTimeout(() =>{
        loader.classList.add("hide")
    }, 3000);
}

// Estudiar HOISTING  DE FUNCIONES. 


// ========================DARK MODE===============
// *********Para que funcione correctamente, las imagenes o iconos/logos deben estar en el html y css, siendo usadas como texto.
// y los svg deben estar dentro del html, no referenciados.**********


const themeButton = document.getElementById("theme-button")
themeButton.addEventListener("click", () =>{
    // Debido a que solo hay un body en el document, se puede ingresar de esta forma
    // y se usa el body porque el dark theme se va aplicar en todo el contenido de la pagina.
   
    // La instruccion es un toggle asociado a una lista de clases (dark-theme)
    // La cual contendra los valores de color para el theme.   
    // Para cambiar el icono de dark mode luna a sol, se hace un if else.
    document.body.classList.toggle( "dark-theme" )
    // Si,el boton en su clase, tiene bx-moon, remplazarlo por bx sun, y sino
    // remplazar bx-sun por bx-moon
    if(themeButton.classList.contains("bx-moon")){
        themeButton.classList.replace("bx-moon", "bx-sun")
    }else{
        themeButton.classList.replace("bx-sun", "bx-moon")
    }
})


// =============================MENU HAMBURGESA===========

const icon = document.querySelector("#nav-toggle")
const menu = document.querySelector("#nav--menu")
const tache = document.querySelector("#nav-close")


// icon.addEventListener("click",toggleMenu)

// function toggleMenu() {
//     menu.classList.toggle( "visible" )
// }


icon.addEventListener("click", () =>{
    menu.classList.toggle( "visible" )
})


tache.addEventListener("click", () =>{
    menu.classList.remove( "visible" )
})


// =================== CART CONTAINER===================

const sideBar = document.querySelector("#cart--container")
const cartOpen = document.querySelector("#cart-shop")

// No permite usar el mismo id en diferentes procesos, para que funcione el mismo tache en diferentes iconos (cart y menu), hay que cambiarle el id a cada uno y referenciarlo
// nuevamente en una variable. 
const cartClose = document.querySelector("#close-cart")

// // opcion 1

cartOpen.addEventListener("click", () => {
    sideBar.classList.toggle( "visible" )
})

cartClose.addEventListener("click", () => {
    sideBar.classList.remove( "visible" )
})


// opcion brenda
// En esta opcion se esta usando el hide creado para ocultar el loader del inicio.

//    cartOpen.addEventListener("click", () => {
//     sideBar.classList.remove( "hide" )

//    })

// cartClose.addEventListener("click", ()=>{
//     sideBar.classList.add( "hide" )
// })


// =======================SCROLL =====================

// Este  solo va leer la cantidad de palabras leidas al mmento de hacer scroll
const header = document.getElementById("header")

// Se trabaja directo en la ventana del navegador, el 50 hace referencia a 3.5rem, aprox.
// Y apartir de ese cruce de 3.5rem la barra cambiara de transparent a solid.
// Se uso scroll en ekl eje "Y" o vertical.


window.addEventListener("scroll", () =>{
    // Si el scroll en la ventana, sobrepasa  o iguala los 50 
    if(window.scrollY >= 50 ){
        // Si sucede lo anterior, header pasara a la clase scroll-he...
        // Y si no llega o retrocede regresara a su valor predeterminado, antes de scroll-...
        header.classList.add("scroll-header")
    }else{
        header.classList.remove("scroll-header")
    }
} )




