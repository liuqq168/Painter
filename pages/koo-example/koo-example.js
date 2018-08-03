// pages/koo-example/koo-example.js
import KooHandler from '../../components/painter/lib/koo-handler';
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
    this.kooHandler = new KooHandler(this);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const template = new DCard(this).palette();
    this.setData({
      template: template,
    });
  },

  onImgOK(e) {
    // console.log(e);
    this.kooHandler.init(this.data.template);
  },

  onEventSend(e) {
    // true表示渗透，默认冒泡
    this.kooHandler.emitEvent(e);
  },

  pageMethod() {
    console.log('page method');
  },

});

