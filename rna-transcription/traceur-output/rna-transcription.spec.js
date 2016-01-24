"use strict";
$traceurRuntime.options.symbols = true;
var $__rna_45_transcription__;
var Transcriptor = ($__rna_45_transcription__ = require("./rna-transcription"), $__rna_45_transcription__ && $__rna_45_transcription__.__esModule && $__rna_45_transcription__ || {default: $__rna_45_transcription__}).default;
describe('Transcriptor', function() {
  var transcriptor = new Transcriptor();
  it('transcribes cytosine to guanine', function() {
    expect(transcriptor.toRna('C')).toEqual('G');
  });
  xit('transcribes guanine to cytosine', function() {
    expect(transcriptor.toRna('G')).toEqual('C');
  });
  xit('transcribes adenine to uracil', function() {
    expect(transcriptor.toRna('A')).toEqual('U');
  });
  xit('transcribes thymine to adenine', function() {
    expect(transcriptor.toRna('T')).toEqual('A');
  });
  xit('transcribes all dna nucleotides to their rna complements', function() {
    expect(transcriptor.toRna('ACGTGGTCTTAA')).toEqual('UGCACCAGAAUU');
  });
});
