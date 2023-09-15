const coefficients = {
    slope: -1.3883789094697734,
    intercept: 13.911783384907695
};

const calculateMarginLeft = (width, coefficients) => {
    const value = -Math.exp(coefficients.slope * Math.log(width) + coefficients.intercept);
    return Math.round(value * 100) / 100; // Zaokrąglenie do dwóch miejsc po przecinku
};

// Pobierz aktualną szerokość okna przeglądarki
const windowWidth = window.innerWidth;

// Oblicz wartość marginesu dla tej szerokości
const marginLeftValue = calculateMarginLeft(windowWidth, coefficients);

// Dodaj regułę CSS do strony
const styleElement = document.createElement("style");
document.head.appendChild(styleElement);
const stylesheet = styleElement.sheet;

const cssRule = `@media (max-width: ${windowWidth}px) {
  .cards {
    margin-left: ${marginLeftValue}%;
  }
}`;

stylesheet.insertRule(cssRule, 0);

console.log("Added CSS rule:", cssRule);
