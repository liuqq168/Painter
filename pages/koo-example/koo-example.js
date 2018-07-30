// pages/koo-example/koo-example.js
import DCard from '../../palette/dancing-card';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    template: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const template = new DCard().palette();
    console.log(template);
    this.setData({
      template: template,
    });
  },


});

