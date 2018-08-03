export default class SunningJuly {
  context = {}
  constructor(context) {
    this.context = context;
  }
  palette() {
    const that = this.context;
    return {
      width: '700rpx',
      height: '1400rpx',
      background: '#eee',
      views: [{
        type: 'qrcode',
        content: 'https://github.com/Kujiale-Mobile/Painter',
        css: {
          top: '40rpx',
          left: '180rpx',
          color: 'red',
          borderWidth: '10rpx',
          borderColor: 'blue',
          width: '120rpx',
          height: '120rpx',
        },
        methods: {
          tap() {
            console.log('qrcode');
          },
        },
      },
      {
        type: 'rect',
        css: {
          top: '40rpx',
          right: '40rpx',
          color: 'green',
          borderRadius: '20rpx',
          borderWidth: '10rpx',
          width: '120rpx',
          height: '120rpx',
        },
        methods: {
          tap() {
            console.log('rect');
            console.log(that);
          },
          longpress() {
            console.log('rect longpress');
          },
          touchend() {
            console.log('rect touch end');
          },
        },
      },
      {
        type: 'text',
        text: 'borderWidth',
        css: {
          top: '40rpx',
          right: '200rpx',
          color: 'green',
          borderWidth: '2rpx',
        },
        methods: {
          tap() {
            console.log('text');
          },
        },
      },
      ],
      methods: {
        tap: this._tap,
        longpress() {
          console.log('long press');
        },
        touchend() {
          console.log('touch end');
        },
      },
    };
  }

  _tap() {
    console.log(this);
  }

  _longpress() {}

  _touchstart() {}

  _touchmove() {}

  _touchend() {}
}
