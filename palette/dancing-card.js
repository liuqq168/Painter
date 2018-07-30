export default class SunningJuly {
  palette() {
    return {
      width: '700rpx',
      height: '1400rpx',
      background: '#eee',
      views: [],
      methods: {
        tap: this._tap,
        longpress: this._longpress,
        touchstart: this._touchstart,
        touchmove: this._touchmove,
        touchend: this._touchend,
      },
    };
  }

  _tap(e) {
    console.log('tapped at: ');
    console.log(e);
  }

  _longpress() {}

  _touchstart() {}

  _touchmove() {}

  _touchend() {}
}
