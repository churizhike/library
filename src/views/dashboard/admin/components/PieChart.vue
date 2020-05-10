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
      default: '151px'
    },
    chartData: {
      type: Object,
      required: true
    },
    indexNum: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      chart: null
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

      const temOption = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          left: 'center',
          bottom: this.indexNum === 0 ? '0' : '10'
          // data: ['男', '女']
        },
        title: [
          {
            text: '性别纬度口味占比环形图',
            textStyle: {
              color: '#2D3E53',
              fontSize: 20,
              fontWeight: 'bold'
            },
            subtextStyle: { // 对应样式
              // color:'#F27CDE',
              fontSize: 14,
              top: -5
            },
            top: -5,
            left: 'center'
          }
        ],
        series: [
          {
            name: this.chartData.field[0],
            type: 'pie',
            // roseType: 'radius',
            radius: ['40%', '60%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold'
              }
            },
            center: this.indexNum === 0 ? ['48%', '50%'] : ['48%', '38%'],
            data: this.chartData.value,
            animationEasing: 'cubicInOut',
            animationDuration: 2600
          }
        ]
      }
      console.log(this.indexNum)
      if (this.indexNum !== 0) {
        delete (temOption.title)
      }

      this.chart.setOption(temOption)
    }
  }
}
</script>
