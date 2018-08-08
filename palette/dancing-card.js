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
        animation: {
          drag: true,
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
        animation: {
          drag: true,
        },
      },
      {
        type: 'text',
        text: 'borderWidthsdjfkdgjlsdhfdskljdshgdsjalfdjhgdklshgksahf',
        css: {
          top: '240rpx',
          left: '300rpx',
          color: 'green',
          borderWidth: '2rpx',
          fontSize: '40rpx',
          width: '200rpx',
          maxLines: 3,
          align: 'left',
        },
        animation: {
          drag: true,
        },
      },
      {
        type: 'text',
        text: 'borderWidthsdjfkdgjlsdhfdskljdshgdsjalfdjhgdklshgksahf',
        css: {
          top: '440rpx',
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
            console.log('click');
          },
        },
        animation: {
          drag: true,
        },
      },
      {
        type: 'text',
        text: 'borderWidthsdjfkdgjlsdhfdskljdshgdsjalfdjhgdklshgksahf',
        css: {
          top: '640rpx',
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
            console.log('click');
          },
        },
      },
      ],
    };
  }
}

module.exports = SunningJuly;

