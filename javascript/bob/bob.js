var Bob = function() {};

Bob.prototype.hey = function(input) {
  // if input is lowercase and ends with '.' or '!' or uses an acronym like 'DMV' or contains Only numbers(and commas)
    // return 'Whatever.'
  if(hasLowerCase(input) && endsWithPeriod(input) || endsWithExclamationPoint(input)) {
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

function endsWithPeriod(str) {
  var lastChar = str.slice(-1)
  return (/\./.test(lastChar))
}

function endsWithExclamationPoint(str) {
  var lastChar = str.slice(-1)
  return (/\!/.test(lastChar))
}

function containsAcronym(str) {
  // not sure how I'm gonna do this?
}

function containsOnlyNumbers(str) {
  // fix this
  return (/^\d+$/.test(str))
}

module.exports = Bob
