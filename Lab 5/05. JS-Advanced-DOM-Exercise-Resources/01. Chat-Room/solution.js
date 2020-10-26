function solve() {
   let sendButton = document.getElementById('send');
   let input = document.getElementById('chat_input');
   let messageField = document.getElementById('chat_messages');

   sendButton.addEventListener('click', (e) => {
      let newDiv = document.createElement('div');
      newDiv.innerHTML = input.value;
      newDiv.classList.add('message', 'my-message');
      messageField.appendChild(newDiv);
      input.value = '';
   })
}


