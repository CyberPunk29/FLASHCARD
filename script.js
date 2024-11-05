function showAnswer(card) {
    const answer = card.querySelector('.answer');
    answer.style.display = answer.style.display === 'none' || answer.style.display === '' ? 'block' : 'none';
}
