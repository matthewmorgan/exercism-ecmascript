const earthSecondsPerYear=31557600;

const planetTimeScale = {
  Earth: 1,
  Mercury: .2408467,
  Venus: 0.61519726,
  Mars: 1.8808158,
  Jupiter: 11.862615,
  Saturn: 29.447498,
  Uranus: 84.016846,
  Neptune: 164.79132
}

export default class SpaceAge {
  constructor(seconds) {
    this.seconds=seconds;
    Object.keys(planetTimeScale).forEach((planet) => {
      this["on"+planet] = () => +(this.seconds/earthSecondsPerYear/planetTimeScale[planet]).toFixed(2);
    });
  }
}


