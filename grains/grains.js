import BigInt from './big-integer';

export default () => ({
  square: n => BigInt(2).pow(n - 1).toString(),
  total:  () => BigInt(2).pow(64).minus(1).toString()
});