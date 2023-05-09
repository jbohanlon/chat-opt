window.addEventListener('DOMContentLoaded', () => {
  handleChatInput();

  /**
   * Set up required components so users can write to a chat log
   */
  function handleChatInput() {
    document.getElementById('chat-form').addEventListener('submit', (e) => {
      e.preventDefault();

      writeUserMessage();
      writeReplyMessage();
    });
  }

  /**
   * Take typed user input and write it to the chat log
   */
  function writeUserMessage() {
    // Store typed chat message
    const messageContent = document.getElementById('chat-input').value;

    // Add user's typed message to the chat log
    const userMessage = document.createElement('p');
    const userName = document.getElementById('name-input').value || 'You';
    userMessage.textContent = `${userName}: ${messageContent}`;
    userMessage.classList.add('small-padding-horizontal', 'user-message');
    document.getElementById('chat-log').appendChild(userMessage);
    autoScroll();

    // Clear chat input so the user can type something else
    document.getElementById('chat-input').value = '';
  }

  /**
   * Take input from another user and write it to the chat log
   */
  function writeReplyMessage() {
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
      const replyName = 'Chat-Bot 9000';
      replyMessage.textContent = `${replyName}: ${replies[Math.floor(Math.random() * (replies.length))]}`;
      replyMessage.classList.add('small-padding-horizontal', 'reply-message');
      document.getElementById('chat-log').appendChild(replyMessage);
      autoScroll();
    }, (Math.random() * 1000) + 500);
  }

  /**
   * Scroll to the bottom of the chat history after next text has been added
   */
  function autoScroll() {
    const chatHistory = document.getElementById('chat-history');
    chatHistory.scrollTop = chatHistory.scrollHeight;
  }
});
