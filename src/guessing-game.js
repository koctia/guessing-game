class GuessingGame { // алгоритм https://en.wikipedia.org/wiki/Binary_search_algorithm
  constructor() {
    this.minNumber = 0;
    this.maxNumber = 0;
    this.middleNumber = 0;
  }

  setRange(min, max) { // этот метод принимает min и max значение диапазона чисел для угадывания
    this.minNumber = min;
    this.maxNumber = max;
  }

  guess() { // этот метод возвращает кандидата на решение (вы делаете предположение, основанное на диапазоне и предыдущих предположениях)
    this.middleNumber = Math.ceil((this.minNumber + this.maxNumber) / 2);
    return this.middleNumber;
  }

  lower() { // этот метод вызывается, если предыдущий вызов guess() вернул число, которое больше, чем ответ
    this.maxNumber = this.middleNumber;
  }

  greater() { // этот метод вызывается, если предыдущий вызов guess() вернул число, которое меньше, чем ответ
    this.minNumber = this.middleNumber;
  }
}

module.exports = GuessingGame;
