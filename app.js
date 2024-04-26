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

const nameInput = document.querySelector("[data-name-input]")
const telInput = document.querySelector("[data-tel-input]")
const cityInput = document.querySelector("[data-city-input]")
const contaInput = document.querySelector("[data-conta-input]")
const telhadoInput = document.querySelector("[data-telhado-input]")
const button = document.querySelector("[data-submit-button]")

button.addEventListener("click", () => {
    const name = nameInput.value
    const telefone = telInput.value
    const cidade = cityInput.value
    const conta = contaInput.value
    const telhado = telhadoInput.value

    if (!name) {
        alert("Preencha o nome corretamente")
        return
    }
    if (!telefone) {
        alert("Preencha o telefone corretamente")
        return
    }
    if (!cidade) {
        alert("Preencha a mensagem corretamente")
        return
    }
    if (!conta) {
        alert("Preencha a mensagem corretamente")
        return
    }
    if (!telhado) {
        alert("Preencha a mensagem corretamente")
        return
    }
    const text = encodeURIComponent(`Olá, me chamo ${name}\nContato: ${telefone}\nMoro em: ${cidade}\nPago: R$${conta} em minha conta de energia\nMeu tipo de telhado é: ${telhado}`)
    window.open(`https://api.whatsapp.com/send?phone=5519981382033&text=${text}`)
})

const navlinks = document.getElementById("navlinks");
function showMenu() {
    navlinks.classList.add("isOpen")
}
function hideMenu() {
    navlinks.classList.remove("isOpen")
}