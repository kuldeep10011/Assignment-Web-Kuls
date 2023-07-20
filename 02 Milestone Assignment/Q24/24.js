const paragraph = document.getElementById('highlightParagraph');

function highlightWords() {
  const words = paragraph.innerText.split(' ');
  const wordsToHighlight = words.filter(word => word.length > 8);

  const highlightedParagraph = words.map(word =>
    wordsToHighlight.includes(word) ? `<span class="highlight">${word}</span>` : word
  ).join(' ');

  paragraph.innerHTML = highlightedParagraph;
}

highlightWords();