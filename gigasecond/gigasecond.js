'use strict';

var MSPERGIGASECOND=1000000000000;

export default (born) => {
  return { date: () => new Date(born.getTime()+MSPERGIGASECOND)};
}