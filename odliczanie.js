function odliczanie() {
  const czasdo = new Date("2024-05-01T16:00:00");
  const dzis = new Date();

  const timeDifference = czasdo - dzis;

  if (timeDifference <= 0) {
    document.getElementById("odliczanie").innerHTML = "To już się zaczeło!";
    return;
  }

  const dni = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const godzin = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minuty = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const sekundy = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById("odliczanie").innerHTML = `<div class="kwadrat dni">${dni} dni</div> <div class="kwadrat godziny">${godzin} godzin</div> <div class="kwadrat minuty">${minuty} minut</div> i <div class="kwadrat sekundy">${sekundy} sekund</div>.`;

  
}
//wywołanie co sekunde
//
setInterval(odliczanie, 1000);

//kolejny scrypt do wyswietlenia obrazów. 


let iteration = 0; // gets iterated when we scroll all the way to the end or start and wraps around - allows us to smoothly continue the playhead scrubbing in the correct direction.

const spacing = 0.1,    // spacing of the cards (stagger)
  snap = gsap.utils.snap(spacing), // we'll use this to snap the playhead on the seamlessLoop
  cards = gsap.utils.toArray('.cards li'),
  seamlessLoop = buildSeamlessLoop(cards, spacing),
  scrub = gsap.to(seamlessLoop, { // we reuse this tween to smoothly scrub the playhead on the seamlessLoop
    totalTime: 0,
    duration: 0.5,
    ease: "power3",
    paused: true
  })


function buildSeamlessLoop(items, spacing) {
  let overlap = Math.ceil(1 / spacing), // number of EXTRA animations on either side of the start/end to accommodate the seamless looping
    startTime = items.length * spacing + 0.5, // the time on the rawSequence at which we'll start the seamless loop
    loopTime = (items.length + overlap) * spacing + 1, // the spot at the end where we loop back to the startTime 
    rawSequence = gsap.timeline({paused: true}), // this is where all the "real" animations live
    seamlessLoop = gsap.timeline({ // this merely scrubs the playhead of the rawSequence so that it appears to seamlessly loop
      paused: true,
      repeat: -1, // to accommodate infinite scrolling/looping
      onRepeat() { // works around a super rare edge case bug that's fixed GSAP 3.6.1
        this._time === this._dur && (this._tTime += this._dur - 0.01);
      }
    }),
    l = items.length + overlap * 2,
    time = 0,
    i, index, item;

  // set initial state of items
  gsap.set(items, {xPercent: 400, opacity: 0,  scale: 0});

  // now loop through and create all the animations in a staggered fashion. Remember, we must create EXTRA animations at the end to accommodate the seamless looping.
  for (i = 0; i < l; i++) {
    index = i % items.length;
    item = items[index];
    time = i * spacing;
    rawSequence.fromTo(item, {scale: 0, opacity: 0}, {scale: 1, opacity: 1, zIndex: 100, duration: 0.5, yoyo: true, repeat: 1, ease: "power1.in", immediateRender: false}, time)
               .fromTo(item, {x: 450}, {x: -450, duration: 1, ease: "none", immediateRender: false}, time);
    i <= items.length && seamlessLoop.add("label" + i, time); // we don't really need these, but if you wanted to jump to key spots using labels, here ya go.
  }
  
  // here's where we set up the scrubbing of the playhead to make it appear seamless. 
  rawSequence.time(startTime);
  seamlessLoop.to(rawSequence, {
    time: loopTime,
    duration: loopTime - startTime,
    ease: "none"
  }).fromTo(rawSequence, {time: overlap * spacing + 1}, {
    time: startTime,
    duration: startTime - (overlap * spacing + 1),
    immediateRender: false,
    ease: "none"
  });
  return seamlessLoop;
}
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


//formularz wysyłania plików dziwkowych graficznych i filmików
document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Zapobieganie domyślnej akcji przycisku (wysyłanie formularza)

    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    if (!file) return;

    // Sprawdzenie rozmiaru pliku
    if (file.size > 120 * 1024 * 1024) {
        alert('Plik jest za duży! Maksymalny rozmiar to 120MB.');
        return;
    }

    // Sprawdzenie formatu pliku
    const validFormats = ['image/jpeg', 'image/png', 'image/gif', 'audio/mpeg', 'video/mp4'];
    if (!validFormats.includes(file.type)) {
        alert('Nieprawidłowy format pliku! Akceptowane formaty to: JPEG, PNG, GIF, MP3, MP4.');
        return;
    }

    const formData = new FormData();
    const newFileName = file.name.replace(/\s+/g, '_');
    formData.append('file', file, newFileName);

    // Wysyłanie pliku na serwer
    fetch('/uploads.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            console.log('Plik został pomyślnie przesłany!');
        } else {
            alert('Wystąpił błąd podczas przesyłania pliku.');
        }
    })
    .catch(error => {
        console.error('Wystąpił błąd:', error);
    });
});

//animacja przycisku
gsap.registerPlugin(MotionPathPlugin);
gsap.set("#paperPlaneRoute", { drawSVG: "0% 0%" });
gsap.set("#rectSentItems", { x: "-=240" });
const tl = gsap.timeline();

let ranOnce = false;

function onBtnUp() {
  if (ranOnce) {
    tl.restart();
    return;
  }
  ranOnce = true;
  tl.to("#base", { duration: 0.2, scale: 1, transformOrigin: "50% 50%" });
  tl.to(
    "#btnBase",
    { duration: 0.77, morphSVG: "#cBottom", ease: "power1.inOut" },
    "start"
  );

  tl.to("#btnBase", { duration: 0.23, morphSVG: "#cTop", ease: "power1.inOut" });
  tl.to("#btnBase", {
    duration: 0.2,
    morphSVG: "#cCenter",
    ease: "power1.inOut"
  });
  tl.to(
    "#btnBase",
    { duration: 0.5, morphSVG: "#cEnd", ease: "power1.inOut" },
    "revealStart"
  );
  tl.to("#rectSentItems", { x: "0", duration: 0.5 }, "revealStart");
  tl.to(
    "#mask1",
    { x: "-=260", duration: 0.5, ease: "power1.inOut" },
    "revealStart"
  );
  tl.to(
    "#paperPlane",
    { x: "-=205", duration: 0.5, ease: "power1.inOut" },
    "revealStart"
  );
  tl.to(
    "#paperPlanePath",
    { duration: 0.43, morphSVG: "#tickMark" },
    "start+=0.77"
  );

  tl.to(
    "#txtSend",
    { duration: 0.6, scale: 0, transformOrigin: "50% 50%" },
    "start"
  );
  tl.to(
    "#paperPlaneRoute",
    { drawSVG: "80% 100%", duration: 0.7, ease: "power1.inOut" },
    "start+=0.3"
  );
  tl.to(
    "#paperPlaneRoute",
    { drawSVG: "100% 100%", duration: 0.2, ease: "power1.inOut" },
    "start+=1"
  );

  tl.to(
    "#paperPlane",
    {
      duration: 1,
      ease: "power1.inOut",
      immediateRender: true,
      motionPath: {
        path: "#paperPlaneRoute",
        align: "#paperPlaneRoute",
        alignOrigin: [0.5, 0.5],
        autoRotate: 90
      }
    },
    "start"
  );

  tl.to(
    "#paperPlanePath",
    { duration: 0.15, attr: { fill: "#ffffff" } },
    "start"
  );
  tl.to(
    "#paperPlanePath",
    { duration: 0.15, attr: { fill: "#4E67E8" } },
    "start+=0.77"
  );
}

function onBtnDown() {
  gsap.timeline({ defaults: { clearProps: true } });
  gsap.to("#base", { duration: 0.1, scale: 0.9, transformOrigin: "50% 50%" });
}

const btn = document.getElementById("base");
btn.addEventListener("mousedown", onBtnDown);
btn.addEventListener("mouseup", onBtnUp);