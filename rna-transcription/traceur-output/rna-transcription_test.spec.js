"use strict";
$traceurRuntime.options.symbols = true;
var $__rna_45_transcription__;
var Transcriptor = ($__rna_45_transcription__ = require("./rna-transcription"), $__rna_45_transcription__ && $__rna_45_transcription__.__esModule && $__rna_45_transcription__ || {default: $__rna_45_transcription__}).default;
describe('Transcriptor', function() {
  var transcriptor = new Transcriptor();
  it('transcribes cytosine to guanine', function() {
    expect(transcriptor.toRna('C')).toEqual('G');
  });
  it('transcribes guanine to cytosine', function() {
    expect(transcriptor.toRna('G')).toEqual('C');
  });
  it('transcribes adenine to uracil', function() {
    expect(transcriptor.toRna('A')).toEqual('U');
  });
  it('transcribes thymine to adenine', function() {
    expect(transcriptor.toRna('T')).toEqual('A');
  });
  it('transcribes all dna nucleotides to their rna complements', function() {
    expect(transcriptor.toRna('ACGTGGTCTTAA')).toEqual('UGCACCAGAAUU');
  });
});
