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
      default: '400px'
    },
    chartData: {
      type: Object,
      required: true
    },
    type: {
      type: String,
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
        grid: {
          left: '2%',
          right: '2%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          // type: 'category',
          // data: this.chartData.field,
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(0,0,0,.3)'
            }
          },
          type: 'value',
          axisLabel: {
            show: true,
            textStyle: {
              color: '#777C7C'
            }
          }
        }],
        yAxis: [{
          type: 'category',
          data: this.chartData.field,
          // type: 'value',
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(0,0,0,0)'
            }
          },
          inverse: true,
          axisLabel: {
            show: true,
            textStyle: {
              color: '#777C7C'
            }
          }
        }],
        legend: {
          // data: [...filds] // 图例组件展现了不同系列的标记(symbol)，颜色和名字。可以通过点击图例控制哪些系列不显示。
        }
      }
      option.series = []
      if (this.chartData.value) {
        this.chartData.value.map(opt => {
          option.series.push({
            name: opt.name,
            type: 'bar',
            stack: this.type,
            seriesLayoutBy: 'row',
            // barMaxWidth: '35px',
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
