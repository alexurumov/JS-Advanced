function solve() {
  let quizzie = document.getElementById('quizzie');
  let sections = document.getElementsByTagName('section');
  let result = document.querySelector('.results-inner h1');

  let correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  let userCorrectAnswers = 0;
  let currentStep = 0;

  let handler = (e) => {
    if (e.target.className === 'answer-text') {
      sections[currentStep].style.display = 'none';
      if (correctAnswers.includes(e.target.innerHTML)) {
        userCorrectAnswers++;
      }

      currentStep++;
      if (currentStep < correctAnswers.length) {
        sections[currentStep].style.display = 'block';
      }

      if (currentStep === correctAnswers.length) {
        quizzie.removeEventListener('click', handler);
        document.getElementById('results').style.display = 'block';
        result.innerHTML = correctAnswers.length === userCorrectAnswers 
            ? `You are recognized as top JavaScript fan!`
            : `You have ${userCorrectAnswers} right answers`
      }
    }
  }

  quizzie.addEventListener('click', handler);
}
