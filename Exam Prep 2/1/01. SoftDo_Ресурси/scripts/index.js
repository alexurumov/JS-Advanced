// NOTE: The comment sections inside the index.html file is an example of how suppose to be structured the current elements.
//       - You can use them as an example when you create those elements, to check how they will be displayed, just uncomment them.
//       - Also keep in mind that, the actual skeleton in judge does not have this comment sections. So do not be dependent on them!
//       - Тhey are present in the skeleton just to help you!

function mySolution() {

    let $questionInput = document.querySelector('#inputSection textarea');
    let $sendButton = document.querySelector('#inputSection div button');
    let $usernameInput = document.querySelector('#inputSection div input');
    let $pendingQuestionsList = document.querySelector('#pendingQuestions');
    let $openQuestionsList = document.querySelector('#openQuestions');
    

    $sendButton.addEventListener('click', sendQuestionHandler);

    function sendQuestionHandler() {

        if (!$questionInput.value) {
            return;
        }

        let div = document.createElement('div');
        div.classList.add('pendingQuestion');

        let img = document.createElement('img');
        img.src = './images/user.png';
        img.width = '32';
        img.height = '32';
        div.appendChild(img);

        let nameSpan = document.createElement('span');
        if ($usernameInput.value) {
            nameSpan.textContent = $usernameInput.value;
        } else {
            nameSpan.textContent = 'Anonymous';
        }
        div.appendChild(nameSpan);

        let p = document.createElement('p');
        p.textContent = $questionInput.value;
        div.appendChild(p);

        let actionsDiv = document.createElement('div');
        actionsDiv.classList.add('actions');
        let archiveButton = document.createElement('button');
        archiveButton.textContent = 'Archive';
        archiveButton.classList.add('archive');

        archiveButton.addEventListener('click', archiveQuestionHandler);

        function archiveQuestionHandler() {
            $pendingQuestionsList.removeChild(div);
        }
        
        actionsDiv.appendChild(archiveButton);

        let openButton = document.createElement('button');
        openButton.textContent = 'Open';
        openButton.classList.add('open');
        actionsDiv.appendChild(openButton);

        openButton.addEventListener('click', openQuestionHandler);

        function openQuestionHandler() {
            div.classList.remove('pendingQuestion');
            div.classList.add('openQuestion');
            
            actionsDiv.innerHTML = '';
            let replyButton = document.createElement('button');
            replyButton.classList.add('reply');
            replyButton.textContent = 'Reply';

            actionsDiv.appendChild(replyButton);

            let replyDiv = document.createElement('div');
            replyDiv.classList.add('replySection');
            replyDiv.style.display = 'none';

            let replyInput = document.createElement('input');
            replyInput.classList.add('replyInput');
            replyInput.type = 'text';
            replyInput.placeholder = 'Reply to this question here...';
            replyDiv.appendChild(replyInput);
            
            let replyButtonSend = document.createElement('button');
            replyButtonSend.classList.add('replyButton');
            replyButtonSend.textContent = 'Send';
            replyDiv.appendChild(replyButtonSend);

            let replyOl = document.createElement('ol');
            replyOl.classList.add('reply');
            replyOl.type = '1';
            replyDiv.appendChild(replyOl);
            div.appendChild(replyDiv);

            replyButton.addEventListener('click', replyQuestionHandler);

            function replyQuestionHandler() {
                if (replyDiv.style.display === 'none') {
                    replyDiv.style.display = 'block';
                    replyButton.textContent = 'Back';
                } else {
                    replyDiv.style.display = 'none';
                    replyButton.textContent = 'Reply';
                }
            }

            replyButtonSend.addEventListener('click', apendReplyHandler);

            function apendReplyHandler() {
                if (!replyInput.value) {
                    return;
                }

                let replyLi = document.createElement('li');
                replyLi.textContent = replyInput.value;
                replyOl.appendChild(replyLi);

                replyInput.value = '';
            }

            $openQuestionsList.appendChild(div);
            archiveQuestionHandler();
        }

        div.appendChild(actionsDiv);

        $pendingQuestionsList.appendChild(div);

        $questionInput.value = '';
        $usernameInput.value = '';
    }

}