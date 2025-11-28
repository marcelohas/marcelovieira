// Configuração do efeito de digitação
const textToType = "Professor de Tecnologia Educacional";
const typingElement = document.getElementById('typing-text');
let charIndex = 0;

function typeWriter() {
    if (typingElement && charIndex < textToType.length) {
        typingElement.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 50); // Velocidade da digitação em ms
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
    
    const yearCurrent = document.getElementById('currentYear');
    if (yearCurrent) {
        yearCurrent.textContent = new Date().getFullYear();
    }

    // Adiciona classe de animação ao header se existir
    const headerContent = document.querySelector('.header-content');
    if (headerContent) {
        headerContent.classList.add('animate');
    }
    
    // Contador de caracteres (para a página de contato)
    const mensagem = document.getElementById('mensagem');
    const charCount = document.getElementById('charCount');
    if (mensagem && charCount) {
        mensagem.addEventListener('input', function() {
            const len = this.value.length;
            charCount.textContent = len;
            charCount.style.color = len > 4500 ? '#e74c3c' : '';
        });
    }
});

// Scroll Suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Observador de Interseção para Animações ao Rolar a página
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar seções e cards
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

document.querySelectorAll('.project-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
});
