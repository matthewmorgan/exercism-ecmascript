let complement = {C:'G', G:'C', A:'U',T:'A'};

export default () => ({ toRna: (dna) => [...dna].map((nuc)=> complement[nuc]).join('')})