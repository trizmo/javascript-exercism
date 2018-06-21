//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function (num) {
  this.year = num;
};

Year.prototype.isLeap = function () {
  if (this.year % 4 === 0 && (this.year % 400 === 0 || this.year % 100 !== 0))  {
    return true;
  } else {
    return false;
  }
};

module.exports = Year;

