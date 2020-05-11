<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/china.js'
require('echarts')
import axios from 'axios'
export default {
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '500px'
    }
  },
  data() {
    return {
      chartData: [],
      axisList: []
    }
  },
  mounted() {
    this.initCharts()
  },
  methods: {
    initCharts() {
      this.chart = echarts.init(this.$el)
      axios.get('http://172.16.8.174:9876/dimension/plat-map', {
        headers: {
          taste: 'light'
        }
      }).then(response => {
        if (response.status === 200) {
          this.axisList = Object.keys(response.data)
          this.axisList.map(item => {
            this.chartData.push(response.data[item])
          })
          console.log(this.chartData)
          this.setOptions()
        }
      })  
    },
    setOptions() {
      var chartData = this.chartData
      var province = [
        '湖北',
        '广东',
        '浙江',
        '湖南',
        '河南',
        '安徽',
        '重庆',
        '山东',
        '江西',
        '四川',
        '江苏',
        '北京',
        '福建',
        '上海',
        '广西',
        '河北',
        '陕西',
        '云南',
        '海南',
        '黑龙江',
        '辽宁',
        '山西',
        '天津',
        '甘肃',
        '内蒙古',
        '新疆',
        '宁夏',
        '吉林',
        '贵州',
        '青海',
        '西藏',
        '澳门',
        '香港',
        '台湾'
      ]
      var data = []
      var news = []
      this.axisList.map(item => {
        data.push([])
        news.push('口味全国分布详情图')
      })

      chartData.map((item, index) => {
        province.map(pro => {
          let a = true
          item.map(item1 => {
            if (pro === item1.name) {
              data[index].push(item1.value)
              a = false
            }
          })
          if (a) {
            data[index].push(0)
          }
        })
      })
      var days = this.axisList

      console.log(data)
      // var data = [
      //   [270, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      //   [375, 26, 5, 1, 1, 0, 5, 1, 2, 2, 0, 10, 0, 6, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      //   [444, 32, 10, 4, 5, 1, 9, 6, 3, 5, 1, 14, 1, 16, 2, 1, 4, 0, 5, 1, 2, 1, 4, 0, 0, 0, 1, 1, 3, 0, 0, 1, 1, 1]
      // ]

      const option = {
        baseOption: {
          timeline: {
            axisType: 'category',
            // realtime: false,
            // loop: false,
            autoPlay: true,
            playInterval: 2000,
            symbolSize: 12,
            left: '5%',
            right: '5%',
            bottom: '0%',
            width: '90%',
            // controlStyle: {
            //     position: 'left'
            // },
            data: days,
            tooltip: {
              formatter: days
            }
          },
          tooltip: {
            show: true,
            formatter: function(params) {
              return params.name + '：' + params.data['value']
            }
          },
          visualMap: {
            type: 'piecewise',
            pieces: [
              {
                min: 1002,
                color: '#2390ff'
              },
              {
                min: 501,
                max: 1001,
                color: '#2dabfb'
              },
              {
                min: 251,
                max: 500,
                color: '#68acf1'
              },
              {
                min: 101,
                max: 250,
                color: '#7fb8f1'
              },
              {
                min: 11,
                max: 100,
                color: '#8dbae6'
              },
              {
                min: 1,
                max: 10,
                color: '#a4c5e4'
              },
              {
                value: 0,
                color: 'white'
              }
            ],
            orient: 'vertical',
            itemWidth: 25,
            itemHeight: 15,
            showLabel: true,
            seriesIndex: [0],

            textStyle: {
              color: '#7B93A7'
            },
            bottom: '10%',
            left: '5%'
          },
          grid: {
            right: '5%',
            top: '20%',
            bottom: '10%',
            width: '20%'
          },
          xAxis: {
            min: 0,
            max: 4000,
            show: false
          },
          yAxis: [{
            inverse: true,
            offset: '2',
            'type': 'category',
            data: '',
            nameTextStyle: {
              color: '#fff'
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              // rotate:45,
              textStyle: {
                fontSize: 14,
                color: '#000000'
              },
              interval: 0
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#333'
              }
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: '#333'
              }
            }
          }],
          geo: {
            map: 'china',
            right: '35%',
            left: '5%',
            label: {
              emphasis: {
                show: false
              }
            },
            itemStyle: {
              emphasis: {
                areaColor: '#e9b08f'
              }
            },
            zoom: 0.75
          },
          series: [
            {
              name: 'mapSer',
              type: 'map',
              map: 'china',
              roam: false,
              // zoom: 0.8,
              layoutCenter: ['30%', '30%'],
              geoIndex: 0,
              label: {
                show: false
              }
            },
            {
              'name': '',
              'type': 'bar',
              zlevel: 2,
              barWidth: '40%',
              label: {
                normal: {
                  show: true,
                  fontSize: 14,
                  position: 'right',
                  formatter: '{c}'
                }
              }
            }
          ]
        },
        animationDurationUpdate: 3000,
        animationEasingUpdate: 'quinticInOut',
        options: []
      }
      for (var n = 0; n < days.length; n++) {
        var res = []
        for (var j = 0; j < data[n].length; j++) {
          res.push({
            name: province[j],
            value: data[n][j]
          })
        }
        res.sort(function(a, b) {
          return b.value - a.value
        }).slice(0, 6)

        res.sort(function(a, b) {
          return a.value - b.value
        })
        var res1 = []
        var res2 = []
        for (var t = 0; t < 10; t++) {
          res1[t] = res[res.length - 1 - t].name
          res2[t] = res[res.length - 1 - t].value
        }
        option.options.push({
          title: [
            {
              text: days[n] + news[n],
              subtext: days[n] + '口味',
              textStyle: {
                color: '#2D3E53',
                fontSize: 28
              },
              subtextStyle: { // 对应样式
                // color:'#F27CDE',
                fontSize: 14
              },
              left: 20,
              top: 20
            },
            {
              show: true,
              text: days[n] + '口味省份分布Top10',
              textStyle: {
                color: '#2D3E53',
                fontSize: 18
              },
              right: '10%',
              top: '15%'
            }
          ],
          yAxis: {
            data: res1
          },
          series: [
            {
              type: 'map',
              data: res
            }, {
              type: 'bar',
              data: res2,
              itemStyle: {
                normal: {
                  color: function(params) {
                    // build a color map as your need.
                    var colorList = [
                      {
                        colorStops: [{
                          offset: 0,
                          color: '#00C0FA' // 0% 处的颜色
                        }, {
                          offset: 1,
                          color: '#2F95FA' // 100% 处的颜色
                        }]
                      },
                      {
                        colorStops: [{
                          offset: 0,
                          color: '#00C0FA' // 0% 处的颜色
                        }, {
                          offset: 1,
                          color: '#2F95FA' // 100% 处的颜色
                        }]
                      }
                    ]
                    if (params.dataIndex < 3) {
                      return colorList[0]
                    } else {
                      return colorList[1]
                    }
                  }
                }
              }
            }
          ]
        })
      }

      this.chart.setOption(option)
    }
  }
}
</script>

