const seletores = [".quemSomos", ".comoAtuamos", ".produtos", ".parceiros", ".pqContratar", ".financiamento", ".bancos", ".forms"]

seletores.forEach((seletor) => {

    const elemento = document.querySelector(seletor)

    const observer = new IntersectionObserver(function ([entry]) {
        if (entry.isIntersecting) {
            elemento.style.transition = "500ms"
            elemento.style.opacity = 1
            elemento.style.transform = "translateY(0px)"
        }
        else {
            elemento.style.transition = "0ms"
            elemento.style.opacity = 0
            elemento.style.transform = "translateY(50px)"
        }
    })

    observer.observe(elemento)

})


