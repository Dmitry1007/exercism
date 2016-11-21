function DnaTranscriber() {}

DnaTranscriber.prototype.toRna = function (dnaStrand) {
  rnaStrand = []
  dnaStrand.split('').forEach(function (nucleotide) {
    nucleotide === 'C' ? rnaStrand.push('G') : null
    nucleotide === 'G' ? rnaStrand.push('C') : null
    nucleotide === 'A' ? rnaStrand.push('U') : null
    nucleotide === 'T' ? rnaStrand.push('A') : null
  })
  return rnaStrand.join('')
}

module.exports = DnaTranscriber
