export default class Index {
  palette() {
    const res = wx.getSystemInfoSync();
    return {
      background: '/palette/background.jpeg',
      width: '750rpx',
      height: `${res.windowHeight}px`,
      views: [
        {
          type: 'image',
          url: '/palette/sky.jpg',
          css: {
            width: '300rpx',
            height: '300rpx',
            right: '20rpx',
            top: '20rpx',
            borderRadius: '1500rpx',
          },
          animation: {
            drag: true,
          },
          methods: {
            tap: this.toStaticDemo,
          },
        },

        {
          type: 'text',
          text: '点击仰望天空查看精简版Painter的  Demo(无交互能力)',
          css: {
            fontSize: '40rpx',
            lineHeight: '50rpx',
            left: '50rpx',
            top: '40rpx',
            width: '350rpx',
            color: '#0aa',
          },
        },

        {
          type: 'image',
          url: '/palette/night.png',
          css: {
            width: '300rpx',
            height: '300rpx',
            left: '20rpx',
            bottom: '100rpx',
            borderRadius: '1500rpx',
          },
          animation: {
            drag: true,
          },
          methods: {
            tap: this.toDynamicDemo,
          },
        },

        {
          type: 'text',
          text: '点击 夜间球场 查看动态版Painter的  Demo(有交互能力)',
          css: {
            fontSize: '40rpx',
            lineHeight: '50rpx',
            right: '50rpx',
            bottom: '140rpx',
            width: '350rpx',
            color: '#aa0',
          },
        },
      ],
    };
  }

  toStaticDemo() {
    wx.navigateTo({
      url: '/pages/example/example',
    });
  }
  toDynamicDemo() {
    wx.navigateTo({
      url: '/pages/koo-example/koo-example',
    });
  }
}
module.exports = Index;
