<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="bono.smallhost.pl - testowanie servera" />

  <title>Internetowa Księga Gości</title>
  <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="/CSS/styl.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/svg.js/3.1.1/svg.min.js"></script>

</head>

<body>
  <header>
    <div class="lewa-kolumna">
      <h1><span class="imie">Kinga i Albert</span></h1>
      <div id="kopula"><img src="assets/my.png" alt="Zdjęcie przyszłej Pary Młodej"></div>
    </div>
    <div class="prawa-kolumna">
      <h3><span class="imie">Witajcie</span></h3>
      <p>To Nasza Wirtualna Księga Gości!<br>
        Chcemy (i mamy nadzieje że Wy też) zatrzymać ze sobą <br>
        wspomnienia z pięknych chwil. <br>
        Zróbmy to tutaj! <br>
        Podeślij wideo, zdjęcie, głosówkę! <br>
        Pokaż jak się bawisz!
      </p>
    </div>
  </header>
  <main>
    <div id="drawing"></div>
    <form class="form">
      <span class="form-title">Prześlij swój plik</span>
      <p class="form-paragraph">
        Plik powinien być obrazem, wideo lub dźwiękiem
      </p>
      <label for="file-input" class="drop-container">
        <span class="drop-title">Przeciągnij pliki tutaj</span>
        lub
        <input type="file" accept="image/*,video/*,audio/*" required="" id="file-input">
      </label>
      <button class="przycisk" id="submitBtn">
        <svg viewBox="0 0 1400 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="paperPlaneRoute" d="M563.558,526.618 C638.854,410.19 787.84,243.065 916.53,334.949 1041.712,424.328 858.791,877.927 743.926,856.655 642.241,838.669 699.637,688.664 700,540" stroke="white" stroke-width="3" style="stroke-dashoffset: 0.001px; stroke-dasharray: 0px, 999999px;" />
          <g id="rectSent" clip-path="url(#clipPath)">
            <g id="rectSentItems">
              <rect id="sentBase" x="460" y="468.5" width="580" height="143" rx="23" fill="white" />
              <text id="txtSent" fill="#4F67ED" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="82" font-weight="bold" letter-spacing="0.025em">
                <tspan x="637.487" y="568.027">Wysłane</tspan>
              </text>
            </g>
          </g>
          <g id="base">
            <g filter="url(#flShadow)">
              <rect id="btnBase" x="418.117" y="460.55" width="583.765" height="158.899" rx="23" fill="#F1F3FF" />
            </g>
            <text id="txtSend" fill="#291D89" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="82" font-weight="bold" letter-spacing="0.06em">
              <tspan x="679.379" y="568.027">Wyślij</tspan>
            </text>
            <g id="paperPlane" style="transform-origin: 0px 0px 0px;" data-svg-origin="563.55859375 527.734375" transform="matrix(0.8396,0.5432,-0.5432,0.8396,377.09924,-222.6639)">
              <path id="paperPlanePath" d="M560.611 481.384C562.003 479.263 565.113 479.263 566.505 481.384L607.063 543.177C615.657 556.272 607.507 573.375 592.766 575.676L566.422 557.462V510.018C566.422 508.436 565.14 507.154 563.558 507.154C561.976 507.154 560.693 508.436 560.693 510.018V557.462L534.349 575.676C519.609 573.375 511.459 556.272 520.053 543.177L560.611 481.384Z" fill="#4F67EB" />
            </g>
          </g>
          <circle id="cBottom" cx="700" cy="540" r="97.516" fill="#C23F3F" class="hidden" />
          <circle id="cTop" cx="700" cy="502.365" r="107.898" fill="#C23F3F" class="hidden" />
          <circle id="cCenter" cx="700" cy="540" r="123" fill="#A74C4C" class="hidden" />
          <circle id="cEnd" cx="495" cy="540" r="98" fill="#F1F3FF" class="hidden" />
          <path id="tickMark" fill-rule="evenodd" clip-rule="evenodd" d="M597.3 489.026C595.179 487.257 592.026 487.541 590.257 489.662L550.954 536.768L534.647 522.965C532.539 521.181 529.384 521.444 527.6 523.551L519.096 533.598C517.312 535.706 517.575 538.861 519.682 540.645L538.606 556.662C538.893 557.162 539.272 557.621 539.74 558.012L549.847 566.445C551.967 568.214 555.12 567.929 556.889 565.809L608.042 504.501C609.811 502.38 609.527 499.227 607.406 497.458L597.3 489.026Z" fill="#4E67E8" class="hidden" />
          <defs>
            <clipPath id="clipPath">
              <rect id="mask1" x="700" y="450" width="600" height="180" fill="white" rx="23" ry="23" id="clipRect" />
            </clipPath>
            <filter id="flShadow" x="0" y="0" width="1000" height="1000" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="4" dy="4" />
              <feGaussianBlur stdDeviation="3.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.5125 0 0 0 0 0.420677 0 0 0 0 0.420677 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          </defs>
        </svg>
      </button>
    </form>
    <div class="opis">
      <h3>Tu są wszystkie zdjęcia nadesłane przez was!</h3>
      <div class="holder">
        <div class="spinner">
          <!-- Tu bedą zdjęcia -->
        </div>
      </div>
      <div class="paginacja">
        <button type="button" id="prev">&#8592;</button>
        <button type="button" id="prev">&#8594;</button>

      </div>
    </div>

    <p>Teraz kilka faktów: </p>
    <ul>
      <li>Jesteśmy już małżeństwem!</li>
      <li>Bardzo Cieszymy się że jesteście z Nami!</li>
      <li>To będzie epickie Wesele!</li>
    </ul>
  </main>
  <footer>
    <h2>Do wesela zostało: </h2>
    <p id="odliczanie"></p>
  </footer>
  <script src="odliczanie.js"></script>
</body>

</html>
