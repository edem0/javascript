function getOtosLotteryNumbers() {
    const numbers = new Set();
    while (numbers.size < 5) {
        const randomNum = Math.floor(Math.random() * 90) + 1;
        numbers.add(randomNum);
    }
    return Array.from(numbers);
}

function getSortedLotteryNumbers(lotteryNumbers) {
    return lotteryNumbers.slice().sort((a, b) => a - b);
}

function getNumberOfHits(lotteryNumbers, guesses) {
    return guesses.filter(num => lotteryNumbers.includes(num)).length;
}

function getMonthlyLotteryArrayNumbers() {
    const monthlyNumbers = [];
    for (let i = 0; i < 4; i++) {
        monthlyNumbers.push(getOtosLotteryNumbers());
    }
    return monthlyNumbers;
}

function getUniqueMonthlyLotteryNumbers(monthlyLotteryNumbers) {
    const uniqueNumbers = new Set();
    monthlyLotteryNumbers.forEach(weekNumbers => {
        weekNumbers.forEach(num => {
            uniqueNumbers.add(num);
        });
    });
    return Array.from(uniqueNumbers);
}

function monthlyStatistics(monthlyLotteryNumbers) {
    const numberCount = {};
    monthlyLotteryNumbers.forEach(weekNumbers => {
        weekNumbers.forEach(num => {
            numberCount[num] = (numberCount[num] || 0) + 1;
        });
    });
    return Object.entries(numberCount).map(([num, count]) => [parseInt(num), count]);
}


const monthlyLottery = getMonthlyLotteryArrayNumbers();
console.log("Havi lottószámok:", monthlyLottery);

const uniqueNumbers = getUniqueMonthlyLotteryNumbers(monthlyLottery);
console.log("Egyedi lottószámok:", uniqueNumbers);

const stats = monthlyStatistics(monthlyLottery);
console.log("Havi statisztika:", stats);
