module.exports = function toReadable(number) {
    const words = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tensWords = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (number === 0) {
      return 'zero';
    }
    if (number < 20) {
      return words[number];
    }
    if (number < 100) {
      const tens = Math.floor(number / 10);
      const ones = number % 10;
      return tensWords[tens] + (ones ? ' ' + words[ones] : '');
    }
    if (number < 1000) {
      const hundreds = Math.floor(number / 100);
      const remainder = number % 100;
      return words[hundreds] + ' hundred' + (remainder ? ' ' + toReadable(remainder) : '');
    }
    throw new Error('Number is too large');
  };
  