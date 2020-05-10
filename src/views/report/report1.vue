<template>
  <div>
    <div v-loading="loading" class="dashboard-editor-container">
      <el-row :gutter="32" style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
        <el-col :xs="24" :sm="24" :lg="24">
          <!-- <span>按</span>
          <el-select v-model="value" placeholder="请选择" style="margin:0 10px">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <span>查看</span> -->
          <div style="">
            <lineChart :chart-data="chartData" :title='title' />
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="32" style="background:#fff;padding:16px 16px;">
        <el-col :xs="24" :sm="24" :lg="24" style="margin-top:20px">
          <el-table
            :data="tableData"
            border
            :header-cell-style="{background:'#efefef',height:'60px'}"
            header-align="center"
            style="width: 100%"
            :default-sort="{prop: 'dateStr', order: 'ascending'}"
          >
            <el-table-column
              prop="dateStr"
              label="日期"
              align="center"
              sortable
            />
            <el-table-column
              prop="dimension"
              label="窗口"
              align="center"
              sortable
            />
            <el-table-column
              prop="value"
              label="人数"
              align="center"
              sortable
            />
            <el-table-column
              prop="amount"
              label="金额"
              align="center"
              sortable
            />
          </el-table>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import lineChart from './components/LineChart'
export default {
  components: {
    lineChart
  },
  data() {
    return {
      loading: false,
      title: '窗口纬度数据详情',
      options: [{
        value: 'dish',
        label: '菜品'
      }, {
        value: 'windows ',
        label: '窗口'
      }, {
        value: 'taste',
        label: '口味'
      }],
      value: 'windows',
      apiData: [],
      dictMap: {
        amount: '付费金额',
        value: '人数'
      },
      chartData: {},
      tableData: []
    }
  },
  watch: {
    value(newVal, oldVal) {
      this.getData(newVal)
    }
  },
  mounted() {
    this.getData(this.value)
    this.handleList()
  },
  methods: {
    getData(val) {
      this.loading = true
      axios.get('http://172.16.8.174:9876/report/data', {
        headers: {
          kind: val
        }
      }).then(response => {
        if (response.status === 200) {
          this.loading = false
          // console.log(response.data)
          this.apiData = response.data
          this.handleList()
        }
      })
    },
    handleList() {
      this.tableData = JSON.parse(JSON.stringify(this.apiData))
      const axisList = []
      const value = []
      this.apiData.map(item => {
        if (!axisList.includes(item.dateStr)) {
          axisList.push(item.dateStr)
        }
      })
      axisList.sort()
      axisList.map((date, index) => {
        if (index === 0) {
          this.apiData.map(item => {
            if (item.dateStr === date) {
              const temObj1 = {
                name: item.dimension + ',' + '付费金额',
                value: [item.amount]
              }
              const temObj2 = {
                name: item.dimension + ',' + '人数',
                value: [item.value]
              }
              value.push(temObj1, temObj2)
            }
          })
        } else {
          this.apiData.map(item => {
            if (item.dateStr === date) {
              const temKey1 = item.dimension + ',' + '付费金额'
              const temKey2 = item.dimension + ',' + '人数'
              value.map(valueKey => {
                if (valueKey.name === temKey1) {
                  valueKey.value.push(item.amount)
                }
                if (valueKey.name === temKey2) {
                  valueKey.value.push(item.value)
                }
              })
            }
          })
        }
      })
      this.chartData = {
        field: axisList,
        value: value
      }
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
    // margin-bottom: 32px;
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
