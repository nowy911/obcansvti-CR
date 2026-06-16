function finishTest() {
    stats.totalTests++;
    stats.bestScore = Math.max(stats.bestScore, (score / currentQuestions.length) * 100);
    localStorage.setItem('stats', JSON.stringify(stats));
    
    showSection('results');
    document.getElementById('score-summary').innerHTML = `<h3>Výsledek: ${Math.round((score/currentQuestions.length)*100)}% (${score}/${currentQuestions.length})</h3>`;
    
    const review = document.getElementById('review-container');
    review.innerHTML = userAnswers.map((a, index) => {
        // Generování možností pro každou otázku v revizi
        const optionsHtml = Object.entries(a.options).map(([key, val]) => {
            let className = '';
            if (key === a.correct) className = 'correct-box'; // Správná
            else if (key === a.userAnswer && a.userAnswer !== a.correct) className = 'wrong-box'; // Tvoje špatná
            return `<div class="${className}">${key}: ${val} ${key === a.userAnswer ? '(Tvoje volba)' : ''}</div>`;
        }).join('');

        // Zobrazení vysvětlení (pokud existuje v datech)
        const explanationHtml = a.explanation ? `<div class="explanation-box"><strong>Vysvětlení:</strong> ${a.explanation}</div>` : '';

        return `
            <div class="review-item">
                <p><strong>${index + 1}. ${a.question}</strong></p>
                ${optionsHtml}
                ${explanationHtml}
            </div>
        `;
    }).join('');
}
