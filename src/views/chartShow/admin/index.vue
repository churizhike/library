<template>
  <div class="dashboard-editor-container">
    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chart-data="lineData" />
    </el-row>
    <div style="margin-bottom:32px;">
      <el-row :gutter="32">
        <el-col v-for="(item, index) in pieData" :key="index" :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <pie-chart :chart-data="item" />
          </div>
        </el-col>
      </el-row>
    </div>

    <div style="margin-bottom:32px;">
      <div class="chart-wrapper">
        <bar-chart :chart-data="barData" :type="typeBar" />
      </div>
    </div>

    <div style="margin-bottom:32px;">
      <div class="chart-wrapper">
        <bar-chart1 :chart-data="stackData" :type="typeStackBar" />
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from './components/LineChart'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'
import BarChart1 from './components/BarChart1'
import axios from 'axios'

export default {
  name: 'DashboardAdmin',
  components: {
    LineChart,
    PieChart,
    BarChart,
    BarChart1
  },
  data() {
    return {
      typeBar: '',
      typeStackBar: 'vistors',
      pieData: [],
      barData: {},
      stackData: {},
      lineData: {}
    }
  },
  mounted() {
    this.getPieData()
    this.getBarData()
    this.getStackData()
    this.getLineData()
    this.getAreaData()
  },
  methods: {
    getPieData() {
      axios.get('http://172.16.8.174:9876/dimension/bar').then(response => {
        if (response.status === 200) {
          this.pieData = response.data
        }
      })
    },
    getStackData() {
      axios.get('http://172.16.8.174:9876/dimension/cylindrical', {
        headers: {
          kind: 'dish'
        }
      }).then(response => {
        if (response.status === 200) {
          this.stackData = response.data
        }
      })
    },
    getBarData() {
      axios.get('http://172.16.8.174:9876/dimension/cylindrical', {
        headers: {
          kind: 'windows'
        }
      }).then(response => {
        if (response.status === 200) {
          this.barData = response.data
        }
      })
    },
    getLineData() {
      axios.get('http://172.16.8.174:9876/dimension/broken').then(response => {
        if (response.status === 200) {
          this.lineData = {
            field: response.data.field,
            value: []
          }
          this.lineData.field.sort()
          response.data.value.map(item => {
            const tem = []
            item.value.map(val => {
              tem.push(val.value)
            })
            this.lineData.value.push({
              name: item.name,
              value: tem
            })
          })
        }
      })
    },
    getAreaData() {
      axios.get('http://172.16.8.174:9876/dimension/plat-map', {
        headers: {
          taste: 'light'
        }
      }).then(response => {
        if (response.status === 200) {
          console.log(response)
          // this.barData = response.data
        }
      })
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
