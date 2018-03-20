$(function(){
	var myPieChart = echarts.init(document.getElementById('js-index-rate-pieEcharts'))
	
	option = {
	    tooltip: {
	        trigger: 'item',
	        formatter: "{a} <br/>{b}: {c} ({d}%)"
	    },
			graphic:{
                type:'text',
                left:'center',
                top:'center',
                style:{
                    text:'87.8%\n占留存总值',
                    textAlign:'center',
                    fill:'#33c7f7',
                    font: 'bolder 1em "Microsoft YaHei", sans-serif',
                    width:30,
                    height:30
                }
            },
	    series: [
	        {
	            name:'访问来源',
	            type:'pie',
	            radius: ['50%', '70%'],
	            avoidLabelOverlap: false,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'center'
	                },
	                emphasis: {
	                    show: true,
	                    textStyle: {
	                        fontSize: '30',
	                        fontWeight: 'bold'
	                    }
	                }
	            },
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },	
	            data:[
	                {value:335},
	                {value:310}
	            ]
	        }
	    ],
	    color: ['rgb(51,199,247)','rgb(233,86,102)']
	};
	
	myPieChart.setOption(option);

	
	/***********line***************/
	var myLineChart = echarts.init(document.getElementById('js-numberValue-linecharts'))
	var LineChart = getYearQuarter()	
	option = {
	    title: {
	        
	    },
	    tooltip: {
	        trigger: 'axis'
	    },
	    legend: {
	        data:['实际值','调减后实现值'],
	        textStyle: {
	        	color: '#fff'
	        }
	    },
	    grid: {
	        left: '5%',
	        right: '14%',
	        bottom: '3%',
	        containLabel: true
	    },
	    toolbox: {
	        feature: {
	           
	        }
	    },
	    xAxis: {
	        type: 'category',
	        boundaryGap: false,
	        data: [LineChart.Kdatatime1,LineChart.Kdatatime2,LineChart.Kdatatime3],
	        axisLabel: {
	            textStyle: {
	            	color: '#fff',
	            	fontSize: 12
	            }
	        },
	        // y轴的字体样式
	        axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff'
                }
            },
	        // y轴的颜色和宽度
	        axisLine:{
	            lineStyle:{
	                color:'#fff',
	                  width:1, //这里是坐标轴的宽度
	            }
	        }
	    },
	    yAxis: {
	        type: 'value',
	        axisLabel: {
	            textStyle: {
	            	color: '#fff'
	            }
	        },
	        // y轴的字体样式
	        axisLabel: {
	            show: true,
	            textStyle: {
	                color: '#fff'
	            }
	        },
	        // y轴的颜色和宽度
	        axisLine:{
	            lineStyle:{
	                color:'#fff',
	                  width:1,                  //这里是坐标轴的宽度
	            }
	        }
	        
	    },
	    series: [
	        {
	            name:'实际值',
	            type:'line',
	            stack: '总量',
	            data:[50, 132, 101]
	        },
	        {
	            name:'调减后实现值',
	            type:'line',
	            stack: '总量',
	            data:[250, 182, 191]
	        } 
	    ],
	     color: ['rgb(254,67,101)','rgb(51,199,247)']
	};
	
		myLineChart.setOption(option);
		

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
