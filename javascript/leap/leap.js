function Year(yearNumber) {
  this.yearNumber = yearNumber
}

Year.prototype.isLeap = function() {
  // is a LeapYear if evenly divisble by 4
  // except if evenly divisible by 100
  // unless if evenly divisible by 400
  if (this.yearNumber % 400 === 0) {
    return true
  } else if (this.yearNumber % 100 === 0) {
    return false
  } else if (this.yearNumber % 4 === 0) {
    return true
  } else {
    return false
  }
}

module.exports = Year
