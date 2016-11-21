function DnaTranscriber() {}

DnaTranscriber.prototype.toRna = function (dnaStrand) {
  rnaStrand = []
  dnaStrand.split('').forEach(function (nucleotide) {
    if (nucleotide === 'C') {rnaStrand.push('G')}
    if (nucleotide === 'G') {rnaStrand.push('C')}
    if (nucleotide === 'A') {rnaStrand.push('U')}
    if (nucleotide === 'T') {rnaStrand.push('A')}
  })
  return rnaStrand.join('')
}

module.exports = DnaTranscriber
