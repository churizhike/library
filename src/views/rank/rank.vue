<template>
  <div>
    <div class="dashboard-editor-container">
      <div style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
        <div style="margin-top:20px;margin-left:16px">
          <span>按</span>
          <el-select v-model="value" placeholder="请选择" style="margin:0 10px">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <span>查看</span>
        </div>
        <el-row :gutter="32" style="margin-top:40px;padding-bottom:30px;margin-left:2px">
          <el-col :xs="24" :sm="24" :lg="12">
            <div>
              <el-table
                :data="rankData"
                border
                style="width: 100%"
              >
                <el-table-column
                  prop="kind"
                  label="口味"
                />
                <el-table-column
                  prop="value"
                  label="人数"
                />
              </el-table>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :lg="12">
            <div>
              <barChart1 :chart-data="chartData" />
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import barChart1 from '../chartShow/admin/components/BarChart'
export default {
  components: {
    barChart1
  },
  data() {
    return {
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
  mounted() {
    this.getData()
    this.handleList()
  },
  methods: {
    getData() {
      // axios.get('http://172.16.8.174:9876/rank/data', {
      //   headers: {
      //     kind: 'taste'
      //   }
      // }).then(response => {
      //   if (response.status === 200) {
      //     console.log(response.data)
      //   }
      // })
    },
    handleList() {
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
