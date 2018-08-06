export default class SunningJuly {
  context = {}
  constructor(data) {
    this.data = data;
  }
  palette() {
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
          align: 'center',
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
          left: '180rpx',
          color: 'green',
          borderRadius: '20rpx',
          borderWidth: '10rpx',
          width: '120rpx',
          height: '120rpx',
        },
        methods: {
          tap() {
            console.log('rect');
          },
        },
      },
      {
        type: 'text',
        text: 'borderWidthsdjfkdgjlsdhfdskljdshgdsjalfdjhgdklshgksahf',
        css: {
          top: '340rpx',
          left: '300rpx',
          color: 'green',
          borderWidth: '2rpx',
          fontSize: '40rpx',
          width: '200rpx',
          maxLines: 3,
          align: 'left',
        },
        methods: {
          tap() {
            console.log('text');
          },
        },
      },
      {
        type: 'text',
        text: 'borderWidthsdjfkdgjlsdhfdskljdshgdsjalfdjhgdklshgksahf',
        css: {
          top: '540rpx',
          left: '300rpx',
          color: 'green',
          borderWidth: '2rpx',
          fontSize: '40rpx',
          width: '200rpx',
          maxLines: 3,
          align: 'center',
        },
        methods: {
          tap() {
            console.log('text');
          },
        },
      },
      {
        type: 'text',
        text: 'borderWidthsdjfkdgjlsdhfdskljdshgdsjalfdjhgdklshgksahf',
        css: {
          top: '740rpx',
          left: '300rpx',
          color: 'green',
          borderWidth: '2rpx',
          fontSize: '40rpx',
          width: '200rpx',
          maxLines: 3,
          align: 'right',
        },
        methods: {
          tap() {
            console.log('text');
          },
        },
      },
      ],
      methods: {
        // tap(e) {
        //   console.log('background tap');
        // },
      },
    };
  }
}

module.exports = SunningJuly;

