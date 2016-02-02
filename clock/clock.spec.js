import Clock from './clock';

describe('Clock', () => {

  it('prints the hour',  () => {
    expect(Clock(8).toString()).toEqual('08:00');
    expect(Clock(9).toString()).toEqual('09:00');
  });

  it('prints past the hour',  () => {
    expect(Clock(11, 9).toString()).toEqual('11:09');
    expect(Clock(11, 19).toString()).toEqual('11:19');
  });

  it('can add minutes',  () => {
    const clock = Clock(10).plus(3);
    expect(clock.toString()).toEqual('10:03');
  });

  it('can add over an hour',  () => {
    const clock = Clock(10).plus(61);
    expect(clock.toString()).toEqual('11:01');
  });

  it('wraps around midnight',  () => {
    const clock = Clock(23, 59).plus(2);
    expect(clock.toString()).toEqual('00:01');
  });

  it('can subtract minutes',  () => {
    const clock = Clock(10, 3).minus(3);
    expect(clock.toString()).toEqual('10:00');
  });

  it('wraps around at exactly midnight', () => {
    const clock = Clock(0, 0).plus(1440);
    expect(clock.toString()).toEqual('00:00');
  });

  it('can subtract over an hour',  () => {
    const clock = Clock(10, 3).minus(30);
    expect(clock.toString()).toEqual('09:33');

    const clock2 = Clock(10, 3).minus(70);
    expect(clock2.toString()).toEqual('08:53');
  });

  it('can subtract a day and a half',  () => {
    const clock = Clock(10, 3).minus(2160);
    expect(clock.toString()).toEqual('22:03');
  });

  it('can add a day and a half',  () => {
    const clock = Clock(10, 3).plus(2160);
    expect(clock.toString()).toEqual('22:03');
  });

  it('can know if it\'s equal to another clock',  () => {
    const clock1 = Clock(10, 3);
    const clock2 = Clock(10, 3);
    expect(clock1.equals(clock2)).toBe(true);
  });

  it('can know if it\'s not equal to another clock',  () => {
    const clock1 = Clock(10, 3);
    const clock2 = Clock(10, 4);
    expect(clock1.equals(clock2)).toBe(false);
  });

  it('wraps around midnight backwards',  () => {
    const clock = Clock(0, 3).minus(4);
    expect(clock.toString()).toEqual('23:59');
  });

});
