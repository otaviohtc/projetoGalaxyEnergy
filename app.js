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
const emailInput = document.querySelector("[data-email-input]")
const descriptionInput = document.querySelector("[data-description-input]")
const button = document.querySelector("[data-submit-button]")

button.addEventListener("click", () => {
    const name = nameInput.value
    const email = emailInput.value
    const description = descriptionInput.value

    if (!name) {
        alert("Preencha o nome corretamente")
        return
    }
    if (!email) {
        alert("Preencha o email corretamente")
        return
    }
    if (!description) {
        alert("Preencha a descrição corretamente")
        return
    }
    const text = encodeURIComponent(`Olá, sou ${name}, meu email é ${email}, ${description}`)
    window.open(`https://api.whatsapp.com/send?phone=5519991796883&text=${text}`)
})

const navlinks = document.getElementById("navlinks");
function showMenu() {
    navlinks.classList.add("isOpen")
}
function hideMenu() {
    navlinks.classList.remove("isOpen")
}