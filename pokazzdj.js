document.addEventListener('DOMContentLoaded', (event) => {
  fetch('/msq.php')
    .then(response => response.json())
    .then(files => {
      const fileList = document.querySelector('.cards');
      files.forEach(filename => {
        const listItem = document.createElement('li');
        const img = document.createElement('img');
        img.src = '/uploads/' + filename;
        listItem.appendChild(img);
        fileList.appendChild(listItem);
      });

      const cards = document.querySelectorAll('.cards li');
      let currentIndex = 0;

      // Ustaw początkowy stan: ukryj wszystkie elementy <li>, z wyjątkiem pierwszego
      gsap.set(cards, {opacity: 0, x: "-50%"});
      gsap.set(cards[currentIndex], {opacity: 1, x: "0%", scale: 1.2});

      document.querySelector(".next").addEventListener("click", () => {
          // Ukryj bieżący element
          gsap.to(cards[currentIndex], {opacity: 0, x: "-50%", scale: 1, duration: 0.5});
          
          // Zwiększ bieżący indeks
          currentIndex++;
          if (currentIndex >= cards.length) {
              currentIndex = 0; // Jeśli przekroczyliśmy ostatni element, wróć do pierwszego
          }

          // Pokaż nowy element na środku
          gsap.fromTo(cards[currentIndex], {x: "50%"}, {opacity: 1, x: "0%", scale: 1.2, duration: 0.5});
      });

      document.querySelector(".prev").addEventListener("click", () => {
          // Ukryj bieżący element
          gsap.to(cards[currentIndex], {opacity: 0, x: "50%", scale: 1, duration: 0.5});
          
          // Zmniejsz bieżący indeks
          currentIndex--;
          if (currentIndex < 0) {
              currentIndex = cards.length - 1; // Jeśli jesteśmy przed pierwszym elementem, przejdź do ostatniego
          }

          // Pokaż nowy element na środku
          gsap.fromTo(cards[currentIndex], {x: "-50%"}, {opacity: 1, x: "0%", scale: 1.2, duration: 0.5});
      });

      // Inicjalizacja Hammer.js na elemencie .cards
      var cardsElement = document.querySelector('.cards');
      var hammerInstance = new Hammer(cardsElement);

      // Obsługa gestu swipeleft (przesunięcie w lewo)
      hammerInstance.on('swipeleft', function() {
          // Kliknięcie przycisku "prev"
          document.querySelector('.next').click();
      });

      // Obsługa gestu swiperight (przesunięcie w prawo)
      hammerInstance.on('swiperight', function() {
          // Kliknięcie przycisku "next"
          document.querySelector('.prev').click();
      });
    })
    .catch(error => {
      console.error('Wystąpił błąd:', error);
    });
});
