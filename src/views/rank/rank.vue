<template>
  <div>
    <div class="dashboard-editor-container">
      <div style="margin-bottom:32px;padding:0 16px">
        <el-row :gutter="32">
          <el-col :span="12" style="">
            <div style="width: 100%;padding:16px;background:#fff;height:500px;overflow:auto">
              <!-- <div style="text-align:center;margin-bottom:35px">
                <span style="font-size:20px;font-weight:bold;font-family: PingFang SC;">口味人数变化表</span>
              </div> -->
              <el-table
                :data="rankData"
                style="width: 100%;margin-top:20px"
                max-height="500"
                :header-cell-style="{background:'#bbdefb',height:'60px',fontSize:'18px',fontWeight:'bold'}"
                header-align="center"
              >
                <el-table-column
                  prop="kind"
                  label="著作"
                  align="center"
                />
                <el-table-column
                  prop="value"
                  label="人数"
                  align="center"
                />
              </el-table>
            </div>
          </el-col>
          <el-col :span="12" style="background:#fff;">
            <div>
              <barChart1 :chart-data="chartData" :title="title" />
            </div>
          </el-col>
        </el-row>
        <!-- <div>
          <img src="./components/food2.gif" alt="" style="width: 100%;height: 230px;margin-top: 30px;">
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import barChart1 from './components/BarChart1'
export default {
  components: {
    barChart1
  },
  data() {
    return {
      title: '不同著作阅读人数数据详情',
      value: 'taste',
      tableData: [],
      rankData: [],
      chartData: {
        field: [],
        value: []
      }
    }
  },
  watch: {
    value(newVal, oldVal) {
      this.getData(newVal)
    }
  },
  mounted() {
    this.getData('book_name')
    this.handleList()
  },
  methods: {
    getData(newVal) {
      axios.get('http://172.16.8.174:6737/rank/info', {
        headers: {
          kind: newVal
        }
      }).then(response => {
        if (response.status === 200) {
          this.rankData = response.data
          this.handleList()
        }
      })
    },
    handleList() {
      this.chartData.field.length = 0
      this.chartData.value = [{
        name: '',
        value: []
      }]
      this.rankData.map(item => {
        this.chartData.field.push(item.kind)
        this.chartData.value[0].value.push(item.value)
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

<style>
table.table th {
    padding-top: 1.1rem;
    padding-bottom: 1rem;
}
.table thead th {
    vertical-align: bottom;
    border-bottom: 2px solid #dee2e6;
    /* background-color: white; */
}
.table td, .table th {
    padding: .75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
}
table th {
    font-size: .9rem;
    font-weight: 400;
}
th {
    text-align: inherit;
}
table {
    border-collapse: collapse;
}
</style>
