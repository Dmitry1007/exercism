function  Hamming() {}

Hamming.prototype.compute = function(strand1, strand2) {

  var hammingDif = 0
  strand1Array = strand1.split('')
  strand2Array = strand2.split('')

  if (strand1Array.length !== strand2Array.length) {
    throw 'DNA strands must be of equal length.'
  }

  strand1Array.forEach(function(e, i) {
    if (e !== strand2Array[i]) {
      hammingDif += 1
    }
  })
  return hammingDif
}

module.exports = Hamming
