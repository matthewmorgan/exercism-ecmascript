'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _clock = require('./clock');

var _clock2 = _interopRequireDefault(_clock);

describe('Clock', function () {

  it('prints the hour', function () {
    expect((0, _clock2['default'])(8).toString()).toEqual('08:00');
    expect((0, _clock2['default'])(9).toString()).toEqual('09:00');
  });

  it('prints past the hour', function () {
    expect((0, _clock2['default'])(11, 9).toString()).toEqual('11:09');
    expect((0, _clock2['default'])(11, 19).toString()).toEqual('11:19');
  });

  it('can add minutes', function () {
    var clock = (0, _clock2['default'])(10).plus(3);
    expect(clock.toString()).toEqual('10:03');
  });

  it('can add over an hour', function () {
    var clock = (0, _clock2['default'])(10).plus(61);
    expect(clock.toString()).toEqual('11:01');
  });

  it('wraps around midnight', function () {
    var clock = (0, _clock2['default'])(23, 59).plus(2);
    expect(clock.toString()).toEqual('00:01');
  });

  it('can subtract minutes', function () {
    var clock = (0, _clock2['default'])(10, 3).minus(3);
    expect(clock.toString()).toEqual('10:00');
  });

  it('can subtract over an hour', function () {
    var clock = (0, _clock2['default'])(10, 3).minus(30);
    expect(clock.toString()).toEqual('09:33');

    var clock2 = (0, _clock2['default'])(10, 3).minus(70);
    expect(clock2.toString()).toEqual('08:53');
  });

  it('can know if it\'s equal to another clock', function () {
    var clock1 = (0, _clock2['default'])(10, 3);
    var clock2 = (0, _clock2['default'])(10, 3);
    expect(clock1.equals(clock2)).toBe(true);
  });

  it('can know if it\'s not equal to another clock', function () {
    var clock1 = (0, _clock2['default'])(10, 3);
    var clock2 = (0, _clock2['default'])(10, 4);
    expect(clock1.equals(clock2)).toBe(false);
  });

  it('wraps around midnight backwards', function () {
    var clock = (0, _clock2['default'])(0, 3).minus(4);
    expect(clock.toString()).toEqual('23:59');
  });
});