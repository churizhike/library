<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

export default {
  mixins: [resize],
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
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions(this.chartData)
    },
    
    setOptions({ expectedData, actualData } = {}) {
      const options = {
        xAxis: {
          data: this.chartData.field,
          // boundaryGap: false,
          // axisTick: {
          //   show: false
          // },
          type: 'category'
        },
        title: [
          {
            text: this.chartData.field[0].indexOf('-') === -1 ? '不同类型年份维度趋势图' : '不同类型月份维度趋势图',
            subtext: '折线图',
            textStyle: {
              color: '#2D3E53',
              fontSize: 20,
              fontWeight: 'bold'
            },
            subtextStyle: { // 对应样式
              // color:'#F27CDE',
              fontSize: 14
            },
            left: 20,
            top: 15,
            left: 'center'
          }
        ],
        grid: {
          left: 10,
          right: 10,
          bottom: 60,
          top: 100,
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          padding: [5, 10]
        },
        yAxis: {
          axisTick: {
            show: false
          }
        },
        legend: {
          data: ['清淡', '酸甜', '香辣'],
          bottom: 20
        }
      }
      options.series = []
      if (this.chartData.value) {
        this.chartData.value.map(item => {
          options.series.push({
            name: item.name,
            // itemStyle: {
            //   normal: {
            //     // color: '#FF005A',
            //     lineStyle: {
            //       color: '#FF005A',
            //       width: 2
            //     }
            //   }
            // },
            // areaStyle: {},
            smooth: false,
            type: 'line',
            data: item.value,
            animationDuration: 2800,
            animationEasing: 'cubicInOut'
          })
        })
      }
      if (this.chart && this.chart.setOption) {
        this.chart.setOption(options, true)
      }
    }
  }
}
</script>
