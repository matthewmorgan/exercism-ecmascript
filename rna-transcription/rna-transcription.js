export default () =>
    ({ toRna: (dna) => [...dna].map((nuc)=> ({C:'G', G:'C', A:'U',T:'A'})[nuc]).join('')})
