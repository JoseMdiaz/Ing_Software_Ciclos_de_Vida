document.addEventListener('DOMContentLoaded', () => {
    // Reveal Observer
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Interaction on Cards
    const cards = document.querySelectorAll('.sdlc-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            console.log('Clicked step:', card.querySelector('h3').textContent);
        });
    });

    // Quiz Logic
    const optionBtns = document.querySelectorAll('.option-btn');
    const quizResult = document.getElementById('quiz-result');
    let score = 0;
    let answeredQuestions = 0;
    const totalQuestions = document.querySelectorAll('.quiz-item').length;

    optionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const isCorrect = btn.getAttribute('data-correct') === 'true';
            const parent = btn.parentElement;
            const buttonsInItem = parent.querySelectorAll('.option-btn');

            // Disable all buttons in this question
            buttonsInItem.forEach(b => b.disabled = true);

            if (isCorrect) {
                btn.classList.add('correct');
                score++;
            } else {
                btn.classList.add('incorrect');
                // Show the correct one
                parent.querySelector('[data-correct="true"]').classList.add('correct');
            }

            answeredQuestions++;
            if (answeredQuestions === totalQuestions) {
                showQuizResult();
            }
        });
    });

    function showQuizResult() {
        quizResult.classList.remove('hidden');
        quizResult.textContent = `¡Has completado el quiz! Tu puntuación: ${score}/${totalQuestions}`;
        quizResult.style.color = score === totalQuestions ? 'var(--success)' : 'var(--accent)';
        quizResult.scrollIntoView({ behavior: 'smooth' });
    }
});
