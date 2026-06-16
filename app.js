let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let userAnswers = []; // Historie pro revizi

// Načtení dat
const stats = JSON.parse(localStorage.getItem('stats')) || { totalTests: 0, bestScore: 0 };
const myErrors = JSON.parse(localStorage.getItem('myErrors')) || [];

function showSection(id) {
    document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
    document.getElementById(id + '-screen').classList.remove('hidden');
    if(id === 'stats') renderStats();
    if(id === 'errors') renderErrors();
}

function startTest(mode) {
    currentQuestions = mode === 'test' 
        ? [...QUESTIONS].sort(() => 0.5 - Math.random()).slice(0, 30)
        : [...QUESTIONS];
    currentIndex = 0;
    score = 0;
    userAnswers = [];
    showSection('test');
    renderQuestion();
}

function renderQuestion() {
    const q = currentQuestions[currentIndex];
    const progress = ((currentIndex) / currentQuestions.length) * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;
    
    const container = document.getElementById('quiz-container');
    container.innerHTML = `
        <div class="card">
            <h3>Otázka ${currentIndex + 1} z ${currentQuestions.length}</h3>
            <p>${q.question}</p>
            ${Object.entries(q.options).map(([key, val]) => 
                `<button onclick="submitAnswer('${key}')">${key}: ${val}</button>`
            ).join('')}
        </div>
    `;
}

function submitAnswer(ans) {
    const q = currentQuestions[currentIndex];
    const isCorrect = (ans === q.correct);
    if (isCorrect) score++;
    else saveError(q);
    
    userAnswers.push({ ...q, userAnswer: ans });
    currentIndex++;
    
    if (currentIndex < currentQuestions.length) renderQuestion();
    else finishTest();
}

function saveError(q) {
    if (!myErrors.find(e => e.question === q.question)) {
        myErrors.push(q);
        localStorage.setItem('myErrors', JSON.stringify(myErrors));
    }
}

function finishTest() {
    stats.totalTests++;
    stats.bestScore = Math.max(stats.bestScore, (score / currentQuestions.length) * 100);
    localStorage.setItem('stats', JSON.stringify(stats));
    
    showSection('results');
    document.getElementById('score-summary').innerHTML = `<h3>Výsledek: ${Math.round((score/currentQuestions.length)*100)}% (${score}/${currentQuestions.length})</h3>`;
    
    const review = document.getElementById('review-container');
    review.innerHTML = userAnswers.map(a => `
        <div class="review-item">
            <p>${a.question}</p>
            <p>Tvoje odpověď: <span class="${a.userAnswer === a.correct ? 'correct' : 'wrong'}">${a.userAnswer}</span></p>
            <p>Správně: <span class="correct">${a.correct}</span></p>
        </div>
    `).join('');
}

function renderStats() {
    document.getElementById('stats-content').innerHTML = `
        <p>Absolvované testy: ${stats.totalTests}</p>
        <p>Nejlepší výsledek: ${stats.bestScore.toFixed(0)}%</p>
    `;
}

function renderErrors() {
    const content = document.getElementById('errors-content');
    content.innerHTML = myErrors.map(q => `
        <div class="review-item">
            <p>${q.question}</p>
            <p>Správná odpověď: ${q.correct}</p>
        </div>
    `).join('');
}
