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

