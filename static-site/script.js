// Mobile Menu Logic

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
