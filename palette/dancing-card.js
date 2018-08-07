export default class SunningJuly {
  context = {}
  constructor(data) {
    this.data = data;
  }
  palette() {
    return {
      width: '700rpx',
      height: '1000rpx',
      background: '#eee',
      methods: {
        tap(e) {
          console.log(e);
        },
      },
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
        animation: {
          drag: true,
        },
        methods: {
          tap() {
            console.log('click');
          },
        },
      },
      ],
    };
  }
}

module.exports = SunningJuly;

