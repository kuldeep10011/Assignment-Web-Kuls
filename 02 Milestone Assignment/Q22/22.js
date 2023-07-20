window.onscroll = function() {
    updateProgressBar();
  };
  
  function updateProgressBar() {
    const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const currentScrollPosition = window.scrollY;
    const progressBar = document.getElementById('myProgressBar');
    const progress = (currentScrollPosition / totalScrollHeight) * 100;
    progressBar.style.width = progress + '%';
  }