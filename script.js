let min = 1.00;
let max = 2.00;
let biasMin = 1.10;
let biasMax = 1.50;

let main_btn = document.getElementById("koef");
let result_display = document.querySelector(".qwer");

// Функція генерації з пріоритетом
function getBiasedRandom(min, max, biasMin, biasMax, biasFactor) {
    let rand = Math.random();
    let range1 = biasMax - biasMin;
    let totalRange = max - min;

    // Ймовірність потрапити у пріоритетний діапазон
    let probBias = (range1 * biasFactor) / (range1 * biasFactor + (totalRange - range1));

    if (rand < probBias) {
        // Потрапляє в пріоритетну область
        return Math.random() * (biasMax - biasMin) + biasMin;
    } else {
        // Потрапляє в іншу частину
        let lowerRange = [min, biasMin];
        let upperRange = [biasMax, max];
        let chooseUpper = Math.random() < ((upperRange[1] - upperRange[0]) / (totalRange - range1));
        if (chooseUpper) {
            return Math.random() * (upperRange[1] - upperRange[0]) + upperRange[0];
        } else {
            return Math.random() * (lowerRange[1] - lowerRange[0]) + lowerRange[0];
        }
    }
}

main_btn.onclick = function () {
    let randomValue = getBiasedRandom(min, max, biasMin, biasMax, 1.5);
    result_display.textContent = randomValue.toFixed(2);
};
