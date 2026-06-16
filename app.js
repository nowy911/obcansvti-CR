let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let userAnswers = [];

const stats = JSON.parse(localStorage.getItem('stats')) || { totalTests: 0, bestScore: 0 };
const myErrors = JSON.parse(localStorage.getItem('myErrors')) || [];

function showSection(id) {
    document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
    document.getElementById(id + '-screen').classList.remove('hidden');
    if(id === 'stats') renderStats();
    if(id === 'errors') renderErrors();
}

// Pomocná funkce, která vykreslí otázku v revizním formátu
function renderReviewItem(q, userAnswer) {
    const optionsHtml = Object.entries(q.options).map(([key, val]) => {
        let cssClass = 'option-box';
        // Zvýraznění
        if (key === q.correct) cssClass = 'correct-box';
        else if (key === userAnswer && userAnswer !== q.correct) cssClass = 'wrong-box';
        
        return `<div class="${cssClass}">
            ${key}: ${val} 
            ${key === userAnswer ? ' <b>(Tvoje volba)</b>' : ''}
            ${key === q.correct ? ' <b>(Správná)</b>' : ''}
        </div>`;
    }).join('');

    return `
        <div class="review-item">
            <p><strong>${q.question}</strong></p>
            ${optionsHtml}
        </div>
    `;
}

function startTest(mode) {
  let shuffled = [...QUESTIONS];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    currentQuestions = mode === 'test' 
        ? shuffled.slice(0, 30) // Vezme prvních 30 po zamíchání
        : shuffled; // Režim procvičování vezme vše
        
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
    // Přidat chybu pouze pokud tam ještě není (prevence duplicit)
    if (!myErrors.find(e => e.question === q.question)) {
        myErrors.push({ ...q, userAnswer: 'chyba' }); // Uložíme jako chybu
        localStorage.setItem('myErrors', JSON.stringify(myErrors));
    }
}

function finishTest() {
    stats.totalTests++;
    stats.bestScore = Math.max(stats.bestScore, (score / currentQuestions.length) * 100);
    localStorage.setItem('stats', JSON.stringify(stats));
    
    showSection('results');
    document.getElementById('score-summary').innerHTML = `<h3>Výsledek: ${Math.round((score/currentQuestions.length)*100)}% (${score}/${currentQuestions.length})</h3>`;
    
    // Použijeme novou sdílenou funkci
    const review = document.getElementById('review-container');
    review.innerHTML = userAnswers.map(a => renderReviewItem(a, a.userAnswer)).join('');
}

function renderStats() {
    document.getElementById('stats-content').innerHTML = `
        <p>Absolvované testy: ${stats.totalTests}</p>
        <p>Nejlepší výsledek: ${stats.bestScore.toFixed(0)}%</p>
    `;
}

function renderErrors() {
    const content = document.getElementById('errors-content');
    // Zde vykreslíme všechny chyby pomocí stejné funkce
    content.innerHTML = myErrors.map(q => renderReviewItem(q, null)).join('');
}
