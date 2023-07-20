const courseCurriculum = [
    "Introduction to JavaScript",
    "Variables and Data Types",
    "Control Flow and Loops",
    "Functions and Scope",
    "Arrays and Objects",
    "DOM Manipulation",
    "AJAX and Fetch API",
    "ES6+ Features",
    "Modules and Bundlers",
  ];
  
  let currentIndex = 0;
  const list = document.getElementById('list');
  const addButton = document.getElementById('addButton');
  
  function addItemToList() {
    if (currentIndex < courseCurriculum.length) {
      const newItem = document.createElement('li');
      newItem.textContent = courseCurriculum[currentIndex];
      list.appendChild(newItem);
      currentIndex++;
    } else {
      alert('All items have been added.');
    }
  }
  
  addButton.addEventListener('click', addItemToList);