// Configuração do efeito de digitação
const textToType = "Professor de Tecnologia Educacional";
const typingElement = document.getElementById('typing-text');
let charIndex = 0;

function typeWriter() {
    if (typingElement && charIndex < textToType.length) {
        typingElement.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 50); // Velocidade da digitação (ms)
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Inicia digitação com pequeno delay
    setTimeout(typeWriter, 500);

    // Atualiza ano no rodapé
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Adiciona classe de animação ao header
    const headerContent = document.querySelector('.header-content');
    if (headerContent) {
        headerContent.classList.add('animate');
    }
});

// Scroll Suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Observador de Interseção para Animações ao Rolar
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersect
