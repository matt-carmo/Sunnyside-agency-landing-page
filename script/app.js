const imgs = document.querySelectorAll('img')



if (window.matchMedia("(max-width: 960px)").matches) {
      imgs.forEach(img => {
            const caminhoModificado = img.getAttribute('src').replace('desktop', 'mobile')
            return img.setAttribute('src', caminhoModificado)
            
      }) 
} 