Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 1000,
    duration: 1000
  },
  changeImg:function(){
    this.setData({
      imgUrls: this.data.imgUrls.concat([
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3052528090,1728025683&fm=27&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3854561730,2201854252&fm=27&gp=0.jpg',
        'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1155416223,519567889&fm=58'
        ])
    })
  },
  startOrPause:function(){
    this.setData({
      autoplay:!this.data.autoplay
    })
  }
})