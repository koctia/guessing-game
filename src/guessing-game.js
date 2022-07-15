class GuessingGame { // algorithm https://en.wikipedia.org/wiki/Binary_search_algorithm
  constructor() {
    this.minNumber = 0;
    this.maxNumber = 0;
    this.middleNumber = 0;
  }

  setRange(min, max) { // this method accepts min and max value of range of number to guess
    this.minNumber = min;
    this.maxNumber = max;
  }

  guess() { // this method returns solution candidate (you make an assumption based on range and previous assumptions)
    this.middleNumber = Math.ceil((this.minNumber + this.maxNumber) / 2);
    return this.middleNumber;
  }

  lower() { // this method is called if prev call of guess() returned number which is greater than answer
    this.maxNumber = this.middleNumber;
  }

  greater() { // this method is called if prev call of guess() returned number which is lower than answer
    this.minNumber = this.middleNumber;
  }
}

module.exports = GuessingGame;
