const imgs = document.querySelectorAll('img')
const menuBurguer = document.querySelector('.menu-burguer')
const toggleMenu = document.querySelector('.toggle-menu')

if (window.matchMedia("(max-width: 960px)").matches) {
      imgs.forEach(img => {
            const caminhoModificado = img.getAttribute('src').replace('desktop', 'mobile')
            return img.setAttribute('src', caminhoModificado)
            
      }) 
}

menuBurguer.addEventListener('click', () => {
      toggleMenu.classList.toggle('active')
})