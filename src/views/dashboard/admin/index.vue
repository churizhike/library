<template>
  <div class="dashboard-editor-container">
    <div style="margin-bottom:32px;padding:0 16px">
      <el-row :gutter="32">
        <el-col :xs="24" :sm="24" :lg="24" style="background:#fff;">
          <area-chart />
        </el-col>
      </el-row>
    </div>

    <div style="margin-bottom:32px;padding:0 16px">
      <el-row :gutter="32">
        <el-col v-for="(item, index) in pieData.slice(0, 4)" :key="index" :xs="24" :sm="24" :lg="6">
          <div class="chart-wrapper">
            <pie-chart :chart-data="item" :index-num="index" />
          </div>
        </el-col>
      </el-row>
    </div>

    <div style="margin-bottom:32px;">
      <div class="chart-wrapper">
        <bar-chart1 :chart-data="stackData" :type="typeStackBar" />
      </div>
    </div>

    <div style="margin-bottom:32px;padding:0 16px">
      <el-row :gutter="32">
        <el-col v-for="(item, index) in pieData.slice(4, 8)" :key="index" :xs="24" :sm="24" :lg="6">
          <div class="chart-wrapper">
            <pie-chart1 :chart-data="item" :index-num="index" />
          </div>
        </el-col>
      </el-row>
    </div>

    <div style="margin-bottom:32px;padding:0 16px">
      <el-row :gutter="32">
        <el-col :xs="24" :sm="24" :lg="12">
          <line-chart :chart-data="MonthLineData" style="background:#fff;margin-bottom:30px" />
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <line-chart :chart-data="YearLineData" style="background:#fff;margin-bottom:30px" />
        </el-col>
      </el-row>
    </div>

    <div style="margin-bottom:32px;">
      <div style="background:#fff;">
        <bar-chart :chart-data="barData" :type="typeBar" />
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from './components/LineChart'
import PieChart from './components/PieChart'
import PieChart1 from './components/PieChart1'
import BarChart from './components/BarChart'
import BarChart1 from './components/BarChart1'
import areaChart from './components/areaChart1'
import axios from 'axios'

export default {
  name: 'DashboardAdmin',
  components: {
    LineChart,
    PieChart,
    BarChart,
    BarChart1,
    areaChart,
    PieChart1
  },
  data() {
    return {
      typeBar: '',
      typeStackBar: 'vistors',
      pieData: [],
      barData: {},
      stackData: {},
      MonthLineData: {},
      YearLineData: {}
    }
  },
  mounted() {
    this.getPieData()
    this.getBarData()
    this.getStackData()
    this.getMonthLineData()
    this.getYearLineData()
    this.getAreaData()
  },
  methods: {
    getPieData() {
      axios.get('http://172.16.8.174:6737/dimension/bar').then(response => {
        if (response.status === 200) {
          this.pieData = response.data
        }
      })
    },
    getStackData() {
      axios.get('http://172.16.8.174:6737/dimension/cylindrical', {
        headers: {
          kind: 'book_kind'
        }
      }).then(response => {
        if (response.status === 200) {
          this.stackData = response.data
        }
      })
    },
    getBarData() {
      axios.get('http://172.16.8.174:6737/dimension/cylindrical', {
        headers: {
          kind: 'age'
        }
      }).then(response => {
        if (response.status === 200) {
          this.barData = response.data
          this.barData.field.sort()
        }
      })
    },
    getMonthLineData() {
      axios.get('http://172.16.8.174:6737/dimension/broken', {
        headers: {
          dateName: 'month'
        }
      }).then(response => {
        if (response.status === 200) {
          const temF = []
          response.data.field.map(item => {
            if (item.indexOf('2019') !== -1) {
              temF.push(item)
            }
          })
          this.MonthLineData = {
            field: temF,
            value: []
          }
          this.MonthLineData.field.sort()
          response.data.value.map(item => {
            const tem = []
            item.value.map(val => {
              tem.push(val.value)
            })
            this.MonthLineData.value.push({
              name: item.name,
              value: tem
            })
          })
        }
      })
    },
    getYearLineData() {
      axios.get('http://172.16.8.174:6737/dimension/broken', {
        headers: {
          dateName: 'year'
        }
      }).then(response => {
        if (response.status === 200) {
          response.data.field.splice(response.data.field.indexOf('2027'), 1)
          this.YearLineData = {
            field: response.data.field,
            value: []
          }
          this.YearLineData.field.sort()
          response.data.value.map(item => {
            const tem = []
            item.value.map(val => {
              tem.push(val.value)
            })
            this.YearLineData.value.push({
              name: item.name,
              value: tem
            })
          })
        }
      })
    },
    getAreaData() {

    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
  }
  .myHeader {
    height: 40px;
    line-height: 40px;
    background-color: white;
    border-bottom: 1px solid #d6cfcf;
    padding-left: 30px;
    border-left: 5px solid #1890ff;
    font-family: PingFang SC;
    font-weight: 400;
    font-style: normal;
    font-size: 15px;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
