
// O evento DOMContentLoaded garante que o código só será executado
// depois que todo o HTML estiver carregado, evitando erros de seleção de elementos
document.addEventListener("DOMContentLoaded", () => { 
  const menuToggle = document.getElementById("menuToggle")  // Seleciona o botão do menu pelo ID "menuToggle"
  const nav = document.getElementById("nav")  // Seleciona o botão do menu pelo ID "menuToggle"
  menuToggle.addEventListener("click", () => { //Adiciona evento de clique no botão 
    nav.classList.toggle("active")// Alterna a classe 'active' no nav para mostrar ou esconder o menu 
  })
  // FECHAR MENU AO CLICAR EM UM LINK
  const navLinks = document.querySelectorAll("nav a") // Seleciona todos os links dentro da tag <nav>
  navLinks.forEach((link) => {  // Para cada link do menu 
    link.addEventListener("click", () => { //Adiciona evento de clique
      nav.classList.remove("active") //Remove a classe 'active' do nav, fechando o menu
    })
  })
  // SCROLL SUAVE - NAVEGAÇÃO ENTRE SEÇÕES
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => { // Seleciona todos os links internos(href começando com "#")
    anchor.addEventListener("click", function (e) { // Adiciona o evento de clique 
      // Previne o comportamento padrão do link (pular direto)
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href")) // Seleciona o elemento alvo baseado no href
      if (target) { // Se o elemento existe, realiza o scroll suave até ele
        target.scrollIntoView({
          behavior: "smooth", // Animação suave do scroll
          block: "start",     // Alinha o topo do elemento com o topo da viewport
        })
      }
    })
  })
  // EFEITO PARALLAX - GARRAFA DO HERO
  const heroBottle = document.getElementById("heroBottle") // Seleciona a imagem da garrafa no hero pelo ID "heroBottle"
  // Adiciona evento de scroll na janela
  window.addEventListener("scroll", () => {
    // Pega a quantidade de pixels que a página foi rolada verticalmente
    const scrolled = window.pageYOffset

    // Se a garrafa existe, aplica transformação de deslocamento vertical
    // Multiplicando por 0.3 para criar efeito parallax suave
    if (heroBottle) {
      heroBottle.style.transform = `translateY(${scrolled * 0.3}px)`
    }
  })

  // ========================================
  // ANIMAÇÃO DOS CARDS AO SCROLL
  // ========================================

  // Configurações do Intersection Observer
  const observerOptions = {
    threshold: 0.2,            // Ativa quando 20% do elemento está visível
    rootMargin: "0px 0px -100px 0px", // Margem inferior de 100px
  }

  // Cria o observer que vai monitorar a visibilidade dos elementos
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // Se o elemento entrou na viewport
      if (entry.isIntersecting) {
        // Torna o elemento visível e remove deslocamento
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Seleciona todos os cards de produtos
  document.querySelectorAll(".product-card").forEach((card) => {
    // Define estado inicial: invisível e deslocado para baixo
    card.style.opacity = "0"
    card.style.transform = "translateY(50px)"
    card.style.transition = "all 0.6s ease" // Transição suave

    // Adiciona o card ao observer para monitorar quando entra na tela
    observer.observe(card)
  })
  // INTERAÇÃO DOS BOTÕES CTA
  const ctaButtons = document.querySelectorAll(".cta-button") // Seleciona todos os botões de call-to-action (classe . cta-button) 
  ctaButtons.forEach((button) => { //Para cada botão 
    button.addEventListener("click", () => { //Adiciona evento de clique
      button.style.transform = "scale(0.95)" // Reduz o tamanho do botão momentaneamente para efeito de clique 
      setTimeout(() => { //Após 200ms, retonra ao tamanho original 
        button.style.transform = "scale(1)"
      }, 200)
    })
  })
})
