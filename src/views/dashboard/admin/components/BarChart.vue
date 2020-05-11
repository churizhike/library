<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import { debounce } from '@/utils'

const animationDuration = 1000

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
    },
    chartData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      percentIndex: [],
      copyChartData: [],
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
    this.initChart()
    this.__resizeHandler = debounce(() => {
      if (this.chart) {
        this.chart.resize()
      }
    }, 100)
    window.addEventListener('resize', this.__resizeHandler)
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    window.removeEventListener('resize', this.__resizeHandler)
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    refreshCharts() {
      if (this.chart) {
        this.chart.resize()
      }
    },
    setOptions({ expectedData, actualData } = {}) {
      const option = {
        tooltip: {
          // trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        title: [
          {
            text: '窗口纬度口味详情柱形图',
            subtext: '窗口纬度',
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
          top: '15%',
          left: '2%',
          right: '2%',
          bottom: '13%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: this.chartData.field,
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(0,0,0,.3)'
            }
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#777C7C'
            }
          }
        }],
        yAxis: [{
          type: 'value',
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(0,0,0,0)'
            }
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#777C7C'
            }
          }
        }],
        legend: {
          data: ['清淡', '酸甜', '香辣'],
          bottom: 20
        }
      }
      option.series = []
      if (this.chartData.value) {
        this.chartData.value.map(opt => {
          option.series.push({
            name: opt.name,
            type: 'bar',
            seriesLayoutBy: 'row',
            barMaxWidth: '35px',
            data: opt.value,
            animationDuration
          })
        })
      }
      this.chart.setOption(option, true)
      this.refreshCharts()
    },
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions(this.chartData)
    }
  }
}
</script>
