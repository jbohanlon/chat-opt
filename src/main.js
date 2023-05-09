window.addEventListener('DOMContentLoaded', () => {
  handleChatInput();

  /**
   * Takes typed user input and writes it to a chat log
   */
  function handleChatInput() {
    document.getElementById('chat-form').addEventListener('submit', (e) => {
      e.preventDefault();

      // Store typed chat message
      const messageContent = document.getElementById('chat-input').value;

      // Add user's typed message to the chat log
      const userMessage = document.createElement('p');
      userMessage.textContent = messageContent;
      userMessage.classList.add('small-padding-horizontal', 'user-message');
      document.getElementById('chat-log').appendChild(userMessage);

      // Clear chat input so the user can type something else
      document.getElementById('chat-input').value = '';

      // Placeholder: Pause for between 0.5 and 1.5 seconds,
      // and then reply with a randomly selected string from the array below
      setTimeout(() => {
        const replies = [
          "That's an excellent point",
          'Well said',
          'How does that make you feel?',
          'Have you always felt this way?',
          "I'm sorry, I don't think I understand. Could you explain what you mean?",
        ];
        const replyMessage = document.createElement('p');
        replyMessage.textContent = replies[Math.floor(Math.random() * (replies.length))];
        replyMessage.classList.add('small-padding-horizontal', 'reply-message');
        document.getElementById('chat-log').appendChild(replyMessage);
      }, (Math.random() * 1000) + 500);
    });
  }
});
