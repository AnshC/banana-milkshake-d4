document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('img').forEach(img => {
    img.onerror = function() {
      this.onerror = null; // Prevents infinite loop if default image is also missing
      this.src = '../AthleteImages/default.jpg';
      this.alt = "Image Not Found"
    };
});

document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', () => {
      img.src = '../AthleteImages/default.jpg'; // Replace with your default image path
    });
})