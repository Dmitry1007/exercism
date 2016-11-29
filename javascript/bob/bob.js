var Bob = function() {};

Bob.prototype.hey = function(input) {
  // if input is lowercase and ends with '.' or '!' or uses an acronym like 'DMV' or contains Only numbers(and commas)
    // return 'Whatever.'
  if(hasLowerCase(input) && endsWithPeriod(input) || endsWithExclamationPoint(input) || containsOnlyNumbers(input)) {
    return 'Whatever.'
  }

  // if input is uppercase and ends with '!' or '?' or contains SOME numbers AND '?'
    // return 'Whoa, chill out!'

  // if input has a '?'
    // return 'Sure.'

}

function hasLowerCase(str) {
  return (/[a-z]+\.?/.test(str))
}

// function hasUpperCase(str) {
//   return (/[A-Z]+\.?/.test(str))
// }

function endsWithPeriod(str) {
  var lastChar = str.slice(-1)
  return (/\./.test(lastChar))
}

function endsWithExclamationPoint(str) {
  var lastChar = str.slice(-1)
  return (/\!/.test(lastChar))
}

function containsAcronym(str) {
  if (hasLowerCase(str)) {

  }
}

function containsOnlyNumbers(str) {
  var removedCommas = str.replace(/,/g, '')
  return (/^\d+$/.test(removedCommas))
}

module.exports = Bob
