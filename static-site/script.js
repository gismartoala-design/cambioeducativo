// Interactions and Animations

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Mobile Menu Logic
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');

function toggleMenu() {
    mobileMenu.classList.toggle('active');
}

mobileMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);

// Reveal on Scroll using Intersection Observer
const observerOptions = {
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Once revealed, we can stop observing this element
            // observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal, .reveal-up, .reveal-left, .reveal-right').forEach(el => {
    observer.observe(el);
});

// Chatbot Logic
const chatbotWindow = document.getElementById('chatbot-window');
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatMessages = document.getElementById('chat-messages');

chatbotToggle.addEventListener('click', () => {
    chatbotWindow.classList.toggle('open');
    chatbotWindow.classList.toggle('hidden');

    const isOpen = chatbotWindow.classList.contains('open');
    document.getElementById('bot-icon-open').style.display = isOpen ? 'none' : 'block';
    document.getElementById('bot-icon-close').style.display = isOpen ? 'block' : 'none';
});

function handleBotOption(option) {
    if (option === 'postular') {
        const userMsg = document.createElement('div');
        userMsg.className = 'bg-primary text-white p-3 rounded-2xl rounded-tr-none shadow-sm ml-auto max-w-[85%] text-sm';
        userMsg.textContent = '¿Cómo puedo postular mi proyecto?';
        chatMessages.appendChild(userMsg);

        setTimeout(() => {
            const botMsg = document.createElement('div');
            botMsg.className = 'bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-blue-50 max-w-[85%] text-sm';
            botMsg.innerHTML = 'Para postular tu proyecto, puedes contactarnos directamente al <b>+593 XXXXXXXXX</b> o agendar una asesoría desde nuestra sección de contacto. ¡Estaremos encantados de escucharte!';
            chatMessages.appendChild(botMsg);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 600);
    }
}
