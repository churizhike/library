<template>
  <div>
    <div class="dashboard-editor-container">
      <div style="margin-bottom:32px;padding:0 16px">
        <el-row :gutter="32">
          <el-col :span="12" style="background:#fff;">
            <div>
              <barChart1 :chart-data="chartData" :title="title" />
            </div>

          </el-col>
          <el-col :span="12" style="">
            <div style="width: 100%;padding:16px;background:#fff;height:500px">
              <!-- <div style="text-align:center;margin-bottom:35px">
                <span style="font-size:20px;font-weight:bold">口味人数变化表</span>
              </div> -->
              <el-table
                :data="rankData"
                border
                style="width: 100%;margin-top:20px"
                max-height="500"
                :header-cell-style="{background:'#efefef',height:'60px'}"
                header-align="center"
              >
                <el-table-column
                  prop="kind"
                  label="口味"
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
        </el-row>
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
      title: '热销窗口纬度数据详情',
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
      value: 'taste',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      rankData: [
        {
          kind: '香辣',
          value: '28282'
        },
        {
          'kind': '清淡',
          'value': '17006'
        },
        {
          'kind': '酸甜',
          'value': '14969'
        }
      ],
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
    this.getData('windows')
    this.handleList()
  },
  methods: {
    getData(newVal) {
      axios.get('http://172.16.8.174:9876/rank/data', {
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
