document.addEventListener('DOMContentLoaded', () => {
    // Chatbot functionality
    const chatbotHeader = document.getElementById('chatbot-header');
    const chatbotBody = document.getElementById('chatbot-body');
    const chatbotInput = document.querySelector('#chatbot-input input');
    const chatbotSendButton = document.querySelector('#chatbot-input button');

    chatbotHeader.addEventListener('click', () => {
        const chatbot = document.getElementById('chatbot');
        const isHidden = chatbotBody.style.display === 'none';
        chatbotBody.style.display = isHidden ? 'block' : 'none';
        document.querySelector('#chatbot-input').style.display = isHidden ? 'flex' : 'none';
    });

    chatbotSendButton.addEventListener('click', () => {
        const message = chatbotInput.value;
        if (message.trim() !== '') {
            addMessage('user', message);
            chatbotInput.value = '';
            // Respond to user message (simple echo for now)
            setTimeout(() => {
                addMessage('bot', `You said: "${message}"`);
            }, 500);
        }
    });

    function addMessage(sender, text) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', `${sender}-message`);
        messageElement.textContent = text;
        chatbotBody.appendChild(messageElement);
        chatbotBody.scrollTop = chatbotBody.scrollHeight;
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
