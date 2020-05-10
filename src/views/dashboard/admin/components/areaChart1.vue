<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/china.js'
require('echarts')
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
  mounted() {
    this.initCharts()
  },
  methods: {
    initCharts() {
      this.chart = echarts.init(this.$el)
      this.setOptions()
    },
    setOptions() {
      var chartData = [
        [
          {
              "name":"山东",
              "value":"188"
          },
          {
              "name":"江苏",
              "value":"605"
          },
          {
              "name":"内蒙古",
              "value":"185"
          },
          {
              "name":"四川",
              "value":"933"
          },
          {
              "name":"宁夏",
              "value":"538"
          },
          {
              "name":"湖北",
              "value":"933"
          },
          {
              "name":"黑龙江",
              "value":"811"
          },
          {
              "name":"澳门",
              "value":"1"
          },
          {
              "name":"陕西",
              "value":"1290"
          },
          {
              "name":"安徽",
              "value":"2432"
          },
          {
              "name":"海南",
              "value":"182"
          },
          {
              "name":"福建",
              "value":"224"
          },
          {
              "name":"西藏",
              "value":"199"
          },
          {
              "name":"吉林",
              "value":"734"
          },
          {
              "name":"辽宁",
              "value":"1164"
          },
          {
              "name":"江西",
              "value":"202"
          },
          {
              "name":"东京都",
              "value":"1"
          },
          {
              "name":"甘肃",
              "value":"188"
          },
          {
              "name":"广西",
              "value":"189"
          },
          {
              "name":"新疆",
              "value":"182"
          },
          {
              "name":"中国",
              "value":"100"
          },
          {
              "name":"广东",
              "value":"433"
          },
          {
              "name":"上海",
              "value":"636"
          },
          {
              "name":"河北",
              "value":"387"
          },
          {
              "name":"山西",
              "value":"2099"
          },
          {
              "name":"北京",
              "value":"941"
          },
          {
              "name":"浙江",
              "value":"992"
          },
          {
              "name":"河南",
              "value":"201"
          },
          {
              "name":"贵州",
              "value":"177"
          },
          {
              "name":"天津",
              "value":"1338"
          },
          {
              "name":"青海",
              "value":"552"
          },
          {
              "name":"大阪府",
              "value":"1"
          },
          {
              "name":"湖南",
              "value":"181"
          },
          {
              "name":"重庆",
              "value":"541"
          },
          {
              "name":"云南",
              "value":"205"
          }
        ],
        [
          {
              "name": "天津",
              "value": "2667"
          },
          {
              "name": "江苏",
              "value": "481"
          },
          {
              "name": "西藏",
              "value": "385"
          },
          {
              "name": "湖南",
              "value": "363"
          },
          {
              "name": "宁夏",
              "value": "1162"
          },
          {
              "name": "陕西",
              "value": "2629"
          },
          {
              "name": "青海",
              "value": "1155"
          },
          {
              "name": "湖北",
              "value": "1823"
          },
          {
              "name": "云南",
              "value": "363"
          },
          {
              "name": "中国",
              "value": "47"
          },
          {
              "name": "黑龙江",
              "value": "1540"
          },
          {
              "name": "江西",
              "value": "387"
          },
          {
              "name": "贵州",
              "value": "384"
          },
          {
              "name": "福建",
              "value": "403"
          },
          {
              "name": "广东",
              "value": "712"
          },
          {
              "name": "山西",
              "value": "4221"
          },
          {
              "name": "山东",
              "value": "364"
          },
          {
              "name": "四川",
              "value": "1936"
          },
          {
              "name": "浙江",
              "value": "1934"
          },
          {
              "name": "广西",
              "value": "392"
          },
          {
              "name": "安徽",
              "value": "968"
          },
          {
              "name": "吉林",
              "value": "1477"
          },
          {
              "name": "河南",
              "value": "377"
          },
          {
              "name": "甘肃",
              "value": "332"
          },
          {
              "name": "海南",
              "value": "374"
          },
          {
              "name": "河北",
              "value": "814"
          },
          {
              "name": "北京",
              "value": "1938"
          },
          {
              "name": "上海",
              "value": "1155"
          },
          {
              "name": "辽宁",
              "value": "2287"
          },
          {
              "name": "重庆",
              "value": "1132"
          },
          {
              "name": "内蒙古",
              "value": "404"
          },
          {
              "name": "新疆",
              "value": "406"
          }
        ],
        [
          {
              "name": "贵州",
              "value": "191"
          },
          {
              "name": "广西",
              "value": "186"
          },
          {
              "name": "北京",
              "value": "923"
          },
          {
              "name": "青海",
              "value": "568"
          },
          {
              "name": "河南",
              "value": "170"
          },
          {
              "name": "河北",
              "value": "373"
          },
          {
              "name": "海南",
              "value": "205"
          },
          {
              "name": "湖北",
              "value": "953"
          },
          {
              "name": "江西",
              "value": "170"
          },
          {
              "name": "福建",
              "value": "187"
          },
          {
              "name": "云南",
              "value": "216"
          },
          {
              "name": "山西",
              "value": "2021"
          },
          {
              "name": "甘肃",
              "value": "202"
          },
          {
              "name": "广东",
              "value": "361"
          },
          {
              "name": "浙江",
              "value": "928"
          },
          {
              "name": "新疆",
              "value": "199"
          },
          {
              "name": "山东",
              "value": "179"
          },
          {
              "name": "辽宁",
              "value": "1158"
          },
          {
              "name": "黑龙江",
              "value": "735"
          },
          {
              "name": "天津",
              "value": "1329"
          },
          {
              "name": "吉林",
              "value": "719"
          },
          {
              "name": "内蒙古",
              "value": "204"
          },
          {
              "name": "重庆",
              "value": "611"
          },
          {
              "name": "湖南",
              "value": "173"
          },
          {
              "name": "宁夏",
              "value": "535"
          },
          {
              "name": "四川",
              "value": "913"
          },
          {
              "name": "上海",
              "value": "598"
          },
          {
              "name": "西藏",
              "value": "202"
          },
          {
              "name": "安徽",
              "value": "178"
          },
          {
              "name": "陕西",
              "value": "1307"
          },
          {
              "name": "江苏",
              "value": "193"
          }
        ]
      ]
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
      var data = [
        [],
        [],
        []
      ]
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
      var days = [
        "清淡",
        "酸甜",
        "香辣"
      ]
      
      var news = [
        '口味全国分布详情图', 
        '口味全国分布详情图', 
        '口味全国分布详情图'
      ]

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
            },
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
            left: "5%"
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
              //rotate:45,
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
                show: false,
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
                show: false,
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
          return b.value - a.value;
        }).slice(0, 6)

        res.sort(function(a, b) {
          return a.value - b.value;
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
              subtextStyle:{          //对应样式
                // color:'#F27CDE',
                fontSize:14
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

