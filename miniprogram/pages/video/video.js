/*
* @Author: YOYO
* @Date:   2018-04-18 11:01:12
* @Last Modified by:   YOYO
* @Last Modified time: 2018-11-15 16:35:32
*/
Page({
	data: {
    cctvSrc: 'http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8',
    activeIndex: -1,
    srcList: [
    	{src: 'http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8', name: 'CCTV-1'},
    	{src: 'http://ivi.bupt.edu.cn/hls/cctv3hd.m3u8', name: 'CCTV-3'},
    	{src: 'http://ivi.bupt.edu.cn/hls/cctv5hd.m3u8', name: 'CCTV-5'},
    	{src: 'http://ivi.bupt.edu.cn/hls/cctv6hd.m3u8', name: 'CCTV-6'},
    	{src: 'http://ivi.bupt.edu.cn/hls/cctv8hd.m3u8', name: 'CCTV-8'},
    	{src: 'http://ivi.bupt.edu.cn/hls/chchd.m3u8', name: 'CHC'},
    	{src: 'http://ivi.bupt.edu.cn/hls/btv1hd.m3u8', name: '北京卫视'},
    	{src: 'http://ivi.bupt.edu.cn/hls/hunanhd.m3u8', name: '湖南卫视'},
    	{src: 'http://ivi.bupt.edu.cn/hls/zjhd.m3u8', name: '浙江卫视'},
    	{src: 'http://ivi.bupt.edu.cn/hls/jshd.m3u8', name: '江苏卫视'},
    	{src: 'http://ivi.bupt.edu.cn/hls/dfhd.m3u8', name: '东方卫视'},
    	{src: 'http://ivi.bupt.edu.cn/hls/ahhd.m3u8', name: '安徽卫视'},
    	{src: 'http://ivi.bupt.edu.cn/hls/hljhd.m3u8', name: '黑龙江卫视'},
    	{src: 'http://ivi.bupt.edu.cn/hls/lnhd.m3u8', name: '辽宁卫视'},
    	{src: 'http://ivi.bupt.edu.cn/hls/szhd.m3u8', name: '深圳卫视'},
    	{src: 'http://ivi.bupt.edu.cn/hls/gdhd.m3u8', name: '广东卫视'},
    	{src: 'http://ivi.bupt.edu.cn/hls/tjhd.m3u8', name: '天津卫视'},
    	{src: 'http://ivi.bupt.edu.cn/hls/hbhd.m3u8', name: '湖北卫视'},
    	{src: 'http://ivi.bupt.edu.cn/hls/sdhd.m3u8', name: '山东卫视'}
    ]
	},
	onLoad: function () {
		
	},
	playVideo: function (e) {
		let src = e.target.dataset.src
		let index = e.target.dataset.index
		this.setData({
			cctvSrc: src,
			activeIndex: index
		})
	}
})