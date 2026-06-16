let currentMode = '';
let currentQuestions = [];
let currentIndex = 0;
let score = 0;

function startTest(mode) {
    currentMode = mode;
    currentQuestions = mode === 'test' 
        ? [...QUESTIONS].sort(() => 0.5 - Math.random()).slice(0, 30)
        : [...QUESTIONS];
    currentIndex = 0;
    score = 0;
    document.getElementById('menu').classList.add('hidden');
    renderQuestion();
}

function renderQuestion() {
    const q = currentQuestions[currentIndex];
    const container = document.getElementById('quiz-container');
    container.innerHTML = `
        <div class="card">
            <h3>${q.question}</h3>
            ${Object.entries(q.options).map(([key, val]) => 
                `<button onclick="checkAnswer('${key}')">${key}: ${val}</button>`
            ).join('')}
        </div>
    `;
    container.classList.remove('hidden');
}

function checkAnswer(answer) {
    const q = currentQuestions[currentIndex];
    const isCorrect = (answer === q.correct);
    if (isCorrect) score++;
    
    if (currentMode === 'practice') {
        alert(isCorrect ? "Správně!" : `Špatně. Správně bylo: ${q.correct}`);
    }
    
    currentIndex++;
    if (currentIndex < currentQuestions.length) renderQuestion();
    else finishTest();
}

function finishTest() {
    alert(`Test ukončen. Skóre: ${score}/${currentQuestions.length}`);
    document.getElementById('menu').classList.remove('hidden');
    document.getElementById('quiz-container').classList.add('hidden');
}