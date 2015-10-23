let map = {C:'G', G:'C', A:'U',T:'A'};

export default () => { return { toRna : (rna) => rna.split('').map((el)=> map[el]).join('') } };