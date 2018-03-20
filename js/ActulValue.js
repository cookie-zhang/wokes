$(function() {
	/*单位留存*/
	var unit = getYearQuarter()
	var mainContainer = document.getElementById('js-main-divUnit');
    //用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    var resizeMainContainer = function () {
        mainContainer.style.width = window.innerWidth+'px';
        mainContainer.style.height =  window.innerHeight+'px';
    };
    //设置div容器高宽
    resizeMainContainer();
    // 初始化图表
    var mainChart = echarts.init(mainContainer);
    $(window).on('resize',function(){//
        //屏幕大小自适应，重置容器高宽
        resizeMainContainer();
        mainChart.resize();
    });
	
	option = {
		title: {},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		legend: {
			data: [unit.Kdatatime1, unit.Kdatatime2, unit.Kdatatime3],
			textStyle: {
				color: '#fff'
			}
		},
		grid: {
			left: '1%',
			right: '5%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: {
			type: 'value',
			boundaryGap: [0, 0.01],
			// y轴的字体样式
			axisLabel: {
				show: true,
				textStyle: {
					color: '#fff'
				},
				fontSize: .16
			},
			// y轴的颜色和宽度
			axisLine: {
				lineStyle: {
					color: '#fff',
					width: 1, //这里是坐标轴的宽度
				}
			}
		},
		yAxis: {
			type: 'category',
			data: ['局指挥部','局指挥部','局指挥部','局指挥部','局指挥部','局指挥部','局指挥部','局指挥部','局指挥部','局指挥部','局指挥部'],
			// y轴的字体样式
			axisLabel: {
				show: true,
				textStyle: {
					color: '#fff'
				}
			},
			// y轴的颜色和宽度
			axisLine: {
				lineStyle: {
					color: '#fff',
					width: 1, //这里是坐标轴的宽度
				}
			}
		},
		series: [{
				name: unit.Kdatatime1,
				type: 'bar',
				data: [18203,18203,18203,18203,18203,18203,18203,18203,18203,18203,18203]
			},
			{
				name: unit.Kdatatime2,
				type: 'bar',
				data: [19325,18203,18203,18203,18203,18203,18203,18203,18203,18203,29903]
			},
			{
				name: unit.Kdatatime3,
				type: 'bar',
				data: [19325,18203,18203,18203,18203,18203,18203,18203,18203,18203,9000]
			}
		],
		 dataZoom:[                                      //区域缩放  
		    {  
		        id: 'dataZoomX', 
		        show: true,  
		        start: 70, 
		        type: 'slider',
		        orient: "vertical",
		    }
		]
	};
	mainChart.setOption(option);
	//点击
	mainChart.on('click', function(params){ //201712  09  06 03
		var UnitClickGetCompany = params.name; // 得到公司名字
		var UnitClickGetQuarter = params.seriesName; // 季度
		var UnitClickGetYear = UnitClickGetQuarter.slice(0,4);   //  截取得是year
		var UnitClickGetNumber = UnitClickGetQuarter.slice(6,7);  //  截取得是一或二或三或四
		var UnitNewYearNumber;
		if(UnitClickGetNumber == '一'){
			UnitNewYearNumber = UnitClickGetYear+"03"
		}else if(UnitClickGetNumber == '二'){
			UnitNewYearNumber = UnitClickGetYear+"06"
		}else if(UnitClickGetNumber == '三'){
			UnitNewYearNumber = UnitClickGetYear+"09"
		}else if(UnitClickGetNumber == '四'){
			UnitNewYearNumber = UnitClickGetYear+"12"
		}
		console.log(UnitClickGetCompany)
		console.log(UnitNewYearNumber)
	})
	function getYearQuarter() {
		var data = new Date
		var year = data.getFullYear() //2018年
		var lastyear = data.getFullYear() - 1 //2017年
		var month = data.getMonth() + 1 //月份
		var quarter = parseInt(Math.ceil(month / 3)) //季度
		var datatime1, datatime2, datatime3;
		if(quarter === 4) {
			return {
				Kdatatime1: year + "年第三季度",
				Kdatatime2: year + "年第二季度",
				Kdatatime3: year + "年第一季度",
			}

		} else {
			if(quarter == 3) {
				return {
					Kdatatime1: year + "年第二季度",
					Kdatatime2: lastyear + "年第一季度",
					Kdatatime3: lastyear + "年第四季度",
				}
			} else if(quarter == 2) {
				return {
					Kdatatime1: year + "年第一季度",
					Kdatatime2: lastyear + "年第三季度",
					Kdatatime3: lastyear + "年第三季度",
				}
			} else if(quarter == 1) {
				return {
					Kdatatime1: lastyear + "年第四季度",
					Kdatatime2: lastyear + "年第三季度",
					Kdatatime3: lastyear + "年第二季度",
				}
			}
		}
	}
})