const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const dozens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const hundred = 'hundred';

module.exports = function toReadable (number) {
  
  let string = String(number);

  if (string.length < 2) {
      return units[string]
  } else if (string.length === 2 && string[1] != '0') {
      if (string[0] === '1') {
        return teens[string[1] - 1]
      } else if (string[0] === '2') {
        return `${dozens[1]} ${units[string[1]]}`
      } else if (string[0] === '3') {
        return `${dozens[2]} ${units[string[1]]}`
      } else if (string[0] === '4') {
        return `${dozens[3]} ${units[string[1]]}`
      } else if (string[0] === '5') {
        return `${dozens[4]} ${units[string[1]]}`
      } else if (string[0] === '6') {
        return `${dozens[5]} ${units[string[1]]}`
      } else if (string[0] === '7') {
        return `${dozens[6]} ${units[string[1]]}`
      } else if (string[0] === '8') {
        return `${dozens[7]} ${units[string[1]]}`
      } else if (string[0] === '9') {
        return `${dozens[8]} ${units[string[1]]}`
      }
  } else if (string.length === 2) {
      if (string[1] === '0') {
        return dozens[string[0] - 1]
      } else if (string[0] === '1') {
          return teens[0]
      }
  } else if (string.length === 3) {
    if (string[1] != '0' && string[2] != '0') {
      if (string[1] === '1') {
        return `${units[string[0]]} ${hundred} ${teens[string[2] - 1]}`
      } else {
      return `${units[string[0]]} ${hundred} ${dozens[string[1] - 1]} ${units[string[2]]}`
      }
    } else if (string[1] != '0' && string[2] === '0') {
      return `${units[string[0]]} ${hundred} ${dozens[string[1] - 1]}`
    } else if (string[1] === '0' && string[2] === '0') {
      return `${units[string[0]]} ${hundred}`
    } else if (string[1] === '0' && string[2] != '0') {
      return `${units[string[0]]} ${hundred} ${units[string[2]]}`
    } else if (string[1] === '1' && string[2] === '0') {
      return `${units[string[0]]} ${hundred} ${dozens[string[1]]}`
    }
  }
}
