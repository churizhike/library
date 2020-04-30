<template>
  <div>
    <div class="dashboard-editor-container">
      <el-row :gutter="32" style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
        <el-col :xs="24" :sm="24" :lg="24" style="margin-top:20px">
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
          <div style="margin-top:20px">
            <lineChart :chart-data="chartData" />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import lineChart from '../chartShow/admin/components/LineChart'
export default {
  components: {
    lineChart
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
      apiData: [
        {
          'dateStr': '2020-03-22',
          'dimension': '香辣',
          'amount': '10819.02',
          'value': '353'
        },
        {
          'dateStr': '2020-03-04',
          'dimension': '香辣',
          'amount': '7553',
          'value': '383'
        },
        {
          'dateStr': '2020-02-12',
          'dimension': '酸甜',
          'amount': '4903.84',
          'value': '228'
        },
        {
          'dateStr': '2020-02-23',
          'dimension': '清淡',
          'amount': '5167.78',
          'value': '331'
        },
        {
          'dateStr': '2020-01-04',
          'dimension': '香辣',
          'amount': '5646.34',
          'value': '295'
        },
        {
          'dateStr': '2020-02-26',
          'dimension': '香辣',
          'amount': '7438.32',
          'value': '457'
        },
        {
          'dateStr': '2020-03-24',
          'dimension': '清淡',
          'amount': '3550.9',
          'value': '168'
        },
        {
          'dateStr': '2020-03-21',
          'dimension': '酸甜',
          'amount': '4806.77',
          'value': '175'
        },
        {
          'dateStr': '2020-03-25',
          'dimension': '清淡',
          'amount': '4941.16',
          'value': '196'
        },
        {
          'dateStr': '2020-02-24',
          'dimension': '酸甜',
          'amount': '5585.07',
          'value': '224'
        },
        {
          'dateStr': '2020-02-28',
          'dimension': '香辣',
          'amount': '8961.57',
          'value': '432'
        },
        {
          'dateStr': '2020-01-22',
          'dimension': '酸甜',
          'amount': '3401.93',
          'value': '129'
        },
        {
          'dateStr': '2020-02-12',
          'dimension': '香辣',
          'amount': '11138.87',
          'value': '491'
        },
        {
          'dateStr': '2020-03-07',
          'dimension': '酸甜',
          'amount': '4151.66',
          'value': '167'
        },
        {
          'dateStr': '2020-02-16',
          'dimension': '香辣',
          'amount': '11198.89',
          'value': '545'
        },
        {
          'dateStr': '2020-01-11',
          'dimension': '酸甜',
          'amount': '2553.06',
          'value': '137'
        },
        {
          'dateStr': '2020-03-01',
          'dimension': '香辣',
          'amount': '9921.53',
          'value': '442'
        },
        {
          'dateStr': '2020-01-28',
          'dimension': '酸甜',
          'amount': '6708.6',
          'value': '221'
        },
        {
          'dateStr': '2020-02-06',
          'dimension': '香辣',
          'amount': '13447.98',
          'value': '544'
        },
        {
          'dateStr': '2020-01-25',
          'dimension': '酸甜',
          'amount': '7818.26',
          'value': '177'
        },
        {
          'dateStr': '2020-03-18',
          'dimension': '酸甜',
          'amount': '4838.88',
          'value': '174'
        },
        {
          'dateStr': '2020-01-30',
          'dimension': '清淡',
          'amount': '4879.04',
          'value': '248'
        },
        {
          'dateStr': '2020-02-10',
          'dimension': '清淡',
          'amount': '7487.08',
          'value': '324'
        },
        {
          'dateStr': '2020-03-27',
          'dimension': '清淡',
          'amount': '4304.52',
          'value': '193'
        },
        {
          'dateStr': '2020-01-12',
          'dimension': '香辣',
          'amount': '7194.23',
          'value': '274'
        },
        {
          'dateStr': '2020-02-21',
          'dimension': '清淡',
          'amount': '6209.62',
          'value': '281'
        },
        {
          'dateStr': '2020-02-21',
          'dimension': '酸甜',
          'amount': '7397.21',
          'value': '213'
        },
        {
          'dateStr': '2020-01-15',
          'dimension': '香辣',
          'amount': '4110.04',
          'value': '291'
        },
        {
          'dateStr': '2020-01-23',
          'dimension': '清淡',
          'amount': '6725.58',
          'value': '146'
        },
        {
          'dateStr': '2020-03-04',
          'dimension': '清淡',
          'amount': '3939.79',
          'value': '236'
        },
        {
          'dateStr': '2020-01-23',
          'dimension': '酸甜',
          'amount': '5638.54',
          'value': '140'
        },
        {
          'dateStr': '2020-02-08',
          'dimension': '酸甜',
          'amount': '6114.34',
          'value': '234'
        },
        {
          'dateStr': '2020-01-10',
          'dimension': '清淡',
          'amount': '2589.88',
          'value': '161'
        },
        {
          'dateStr': '2020-01-18',
          'dimension': '清淡',
          'amount': '1544.72',
          'value': '121'
        },
        {
          'dateStr': '2020-02-07',
          'dimension': '酸甜',
          'amount': '7462.71',
          'value': '231'
        },
        {
          'dateStr': '2020-02-14',
          'dimension': '清淡',
          'amount': '9256.19',
          'value': '345'
        },
        {
          'dateStr': '2020-03-27',
          'dimension': '酸甜',
          'amount': '4566.57',
          'value': '177'
        },
        {
          'dateStr': '2020-03-10',
          'dimension': '酸甜',
          'amount': '4368.4',
          'value': '203'
        },
        {
          'dateStr': '2020-01-01',
          'dimension': '酸甜',
          'amount': '2752.25',
          'value': '135'
        },
        {
          'dateStr': '2020-02-01',
          'dimension': '酸甜',
          'amount': '5283.18',
          'value': '246'
        },
        {
          'dateStr': '2020-03-15',
          'dimension': '香辣',
          'amount': '11820.32',
          'value': '438'
        },
        {
          'dateStr': '2020-01-14',
          'dimension': '酸甜',
          'amount': '2020.77',
          'value': '141'
        },
        {
          'dateStr': '2020-03-16',
          'dimension': '香辣',
          'amount': '9537.58',
          'value': '339'
        },
        {
          'dateStr': '2020-01-08',
          'dimension': '香辣',
          'amount': '6949.49',
          'value': '293'
        },
        {
          'dateStr': '2020-01-17',
          'dimension': '清淡',
          'amount': '3217.92',
          'value': '154'
        },
        {
          'dateStr': '2020-03-30',
          'dimension': '香辣',
          'amount': '7345.69',
          'value': '302'
        },
        {
          'dateStr': '2020-03-24',
          'dimension': '香辣',
          'amount': '6253.07',
          'value': '295'
        },
        {
          'dateStr': '2020-03-07',
          'dimension': '清淡',
          'amount': '8083.91',
          'value': '240'
        },
        {
          'dateStr': '2020-02-06',
          'dimension': '清淡',
          'amount': '5211.57',
          'value': '311'
        },
        {
          'dateStr': '2020-03-02',
          'dimension': '清淡',
          'amount': '4880.69',
          'value': '247'
        },
        {
          'dateStr': '2020-01-29',
          'dimension': '香辣',
          'amount': '10779.96',
          'value': '439'
        },
        {
          'dateStr': '2020-02-24',
          'dimension': '香辣',
          'amount': '9024.27',
          'value': '468'
        },
        {
          'dateStr': '2020-03-31',
          'dimension': '清淡',
          'amount': '3281.3',
          'value': '148'
        },
        {
          'dateStr': '2020-03-19',
          'dimension': '清淡',
          'amount': '5830.69',
          'value': '185'
        },
        {
          'dateStr': '2020-01-22',
          'dimension': '清淡',
          'amount': '3202.33',
          'value': '130'
        },
        {
          'dateStr': '2020-02-29',
          'dimension': '酸甜',
          'amount': '5637.49',
          'value': '246'
        },
        {
          'dateStr': '2020-03-14',
          'dimension': '香辣',
          'amount': '10277.13',
          'value': '385'
        },
        {
          'dateStr': '2020-03-24',
          'dimension': '酸甜',
          'amount': '4430.97',
          'value': '158'
        },
        {
          'dateStr': '2020-02-10',
          'dimension': '酸甜',
          'amount': '5250.77',
          'value': '242'
        },
        {
          'dateStr': '2020-02-17',
          'dimension': '清淡',
          'amount': '6966.47',
          'value': '320'
        },
        {
          'dateStr': '2020-02-16',
          'dimension': '清淡',
          'amount': '7130.17',
          'value': '333'
        },
        {
          'dateStr': '2020-01-17',
          'dimension': '香辣',
          'amount': '6873.79',
          'value': '246'
        },
        {
          'dateStr': '2020-01-24',
          'dimension': '香辣',
          'amount': '12182.1',
          'value': '391'
        },
        {
          'dateStr': '2020-03-30',
          'dimension': '清淡',
          'amount': '2895.2',
          'value': '160'
        },
        {
          'dateStr': '2020-02-12',
          'dimension': '清淡',
          'amount': '6024.8',
          'value': '300'
        },
        {
          'dateStr': '2020-03-29',
          'dimension': '清淡',
          'amount': '4293.94',
          'value': '235'
        },
        {
          'dateStr': '2020-03-20',
          'dimension': '酸甜',
          'amount': '6453.61',
          'value': '200'
        },
        {
          'dateStr': '2020-02-20',
          'dimension': '酸甜',
          'amount': '6431.85',
          'value': '200'
        },
        {
          'dateStr': '2020-02-29',
          'dimension': '清淡',
          'amount': '6886.3',
          'value': '236'
        },
        {
          'dateStr': '2020-01-11',
          'dimension': '清淡',
          'amount': '2552.35',
          'value': '119'
        },
        {
          'dateStr': '2020-03-08',
          'dimension': '清淡',
          'amount': '5272.3',
          'value': '229'
        },
        {
          'dateStr': '2020-03-28',
          'dimension': '清淡',
          'amount': '4108.89',
          'value': '166'
        },
        {
          'dateStr': '2020-02-22',
          'dimension': '清淡',
          'amount': '7226.32',
          'value': '255'
        },
        {
          'dateStr': '2020-02-13',
          'dimension': '香辣',
          'amount': '11953.65',
          'value': '517'
        },
        {
          'dateStr': '2020-02-04',
          'dimension': '酸甜',
          'amount': '5114.64',
          'value': '238'
        },
        {
          'dateStr': '2020-02-29',
          'dimension': '香辣',
          'amount': '12852.42',
          'value': '420'
        },
        {
          'dateStr': '2020-03-03',
          'dimension': '酸甜',
          'amount': '6199.75',
          'value': '184'
        },
        {
          'dateStr': '2020-02-02',
          'dimension': '清淡',
          'amount': '5991.83',
          'value': '287'
        },
        {
          'dateStr': '2020-01-25',
          'dimension': '清淡',
          'amount': '4432.1',
          'value': '170'
        },
        {
          'dateStr': '2020-02-05',
          'dimension': '清淡',
          'amount': '8132.85',
          'value': '324'
        },
        {
          'dateStr': '2020-03-03',
          'dimension': '清淡',
          'amount': '5672.83',
          'value': '234'
        },
        {
          'dateStr': '2020-01-19',
          'dimension': '清淡',
          'amount': '3067.13',
          'value': '134'
        },
        {
          'dateStr': '2020-03-06',
          'dimension': '清淡',
          'amount': '8491.58',
          'value': '232'
        },
        {
          'dateStr': '2020-01-27',
          'dimension': '酸甜',
          'amount': '4171.12',
          'value': '187'
        },
        {
          'dateStr': '2020-02-20',
          'dimension': '香辣',
          'amount': '7466.56',
          'value': '457'
        },
        {
          'dateStr': '2020-01-01',
          'dimension': '香辣',
          'amount': '5795.58',
          'value': '293'
        },
        {
          'dateStr': '2020-02-23',
          'dimension': '酸甜',
          'amount': '6595.78',
          'value': '258'
        },
        {
          'dateStr': '2020-01-05',
          'dimension': '清淡',
          'amount': '1962.23',
          'value': '157'
        },
        {
          'dateStr': '2020-03-14',
          'dimension': '清淡',
          'amount': '5053.1',
          'value': '222'
        },
        {
          'dateStr': '2020-03-30',
          'dimension': '酸甜',
          'amount': '2426.23',
          'value': '144'
        },
        {
          'dateStr': '2020-03-15',
          'dimension': '酸甜',
          'amount': '4268.66',
          'value': '193'
        },
        {
          'dateStr': '2020-03-18',
          'dimension': '清淡',
          'amount': '4830.83',
          'value': '179'
        },
        {
          'dateStr': '2020-02-02',
          'dimension': '酸甜',
          'amount': '4563.58',
          'value': '227'
        },
        {
          'dateStr': '2020-02-27',
          'dimension': '清淡',
          'amount': '4930.69',
          'value': '258'
        },
        {
          'dateStr': '2020-03-02',
          'dimension': '酸甜',
          'amount': '3482.14',
          'value': '196'
        },
        {
          'dateStr': '2020-03-23',
          'dimension': '香辣',
          'amount': '12567.06',
          'value': '363'
        },
        {
          'dateStr': '2020-03-11',
          'dimension': '酸甜',
          'amount': '4114.27',
          'value': '174'
        },
        {
          'dateStr': '2020-03-09',
          'dimension': '清淡',
          'amount': '5808.98',
          'value': '253'
        },
        {
          'dateStr': '2020-03-05',
          'dimension': '酸甜',
          'amount': '4422.74',
          'value': '184'
        },
        {
          'dateStr': '2020-01-26',
          'dimension': '香辣',
          'amount': '13928.87',
          'value': '333'
        },
        {
          'dateStr': '2020-01-02',
          'dimension': '香辣',
          'amount': '6881.85',
          'value': '287'
        },
        {
          'dateStr': '2020-03-31',
          'dimension': '香辣',
          'amount': '8957.23',
          'value': '317'
        },
        {
          'dateStr': '2020-01-09',
          'dimension': '清淡',
          'amount': '2801.03',
          'value': '138'
        },
        {
          'dateStr': '2020-01-14',
          'dimension': '清淡',
          'amount': '1559.2',
          'value': '119'
        },
        {
          'dateStr': '2020-01-28',
          'dimension': '香辣',
          'amount': '14881.13',
          'value': '478'
        },
        {
          'dateStr': '2020-02-03',
          'dimension': '清淡',
          'amount': '6454.24',
          'value': '273'
        },
        {
          'dateStr': '2020-03-17',
          'dimension': '酸甜',
          'amount': '2814.79',
          'value': '168'
        },
        {
          'dateStr': '2020-02-09',
          'dimension': '香辣',
          'amount': '15544.68',
          'value': '564'
        },
        {
          'dateStr': '2020-03-05',
          'dimension': '清淡',
          'amount': '7041.08',
          'value': '226'
        },
        {
          'dateStr': '2020-02-05',
          'dimension': '香辣',
          'amount': '7409.51',
          'value': '479'
        },
        {
          'dateStr': '2020-03-04',
          'dimension': '酸甜',
          'amount': '3145.07',
          'value': '192'
        },
        {
          'dateStr': '2020-01-19',
          'dimension': '香辣',
          'amount': '7111.79',
          'value': '265'
        },
        {
          'dateStr': '2020-02-01',
          'dimension': '清淡',
          'amount': '5904.4',
          'value': '272'
        },
        {
          'dateStr': '2020-01-20',
          'dimension': '酸甜',
          'amount': '4824.96',
          'value': '130'
        },
        {
          'dateStr': '2020-03-09',
          'dimension': '香辣',
          'amount': '7891.76',
          'value': '390'
        },
        {
          'dateStr': '2020-02-25',
          'dimension': '清淡',
          'amount': '4664.82',
          'value': '273'
        },
        {
          'dateStr': '2020-03-12',
          'dimension': '香辣',
          'amount': '9879.62',
          'value': '343'
        },
        {
          'dateStr': '2020-01-31',
          'dimension': '酸甜',
          'amount': '7148.91',
          'value': '228'
        },
        {
          'dateStr': '2020-02-06',
          'dimension': '酸甜',
          'amount': '5741.4',
          'value': '243'
        },
        {
          'dateStr': '2020-01-15',
          'dimension': '清淡',
          'amount': '2373.14',
          'value': '147'
        },
        {
          'dateStr': '2020-02-26',
          'dimension': '酸甜',
          'amount': '2679.58',
          'value': '200'
        },
        {
          'dateStr': '2020-01-06',
          'dimension': '酸甜',
          'amount': '2592.02',
          'value': '134'
        },
        {
          'dateStr': '2020-02-13',
          'dimension': '清淡',
          'amount': '7675.51',
          'value': '345'
        },
        {
          'dateStr': '2020-03-07',
          'dimension': '香辣',
          'amount': '10748.97',
          'value': '437'
        },
        {
          'dateStr': '2020-01-03',
          'dimension': '清淡',
          'amount': '3871.51',
          'value': '148'
        },
        {
          'dateStr': '2020-02-09',
          'dimension': '清淡',
          'amount': '6818.84',
          'value': '294'
        },
        {
          'dateStr': '2020-01-13',
          'dimension': '香辣',
          'amount': '4789.06',
          'value': '294'
        },
        {
          'dateStr': '2020-01-31',
          'dimension': '香辣',
          'amount': '14736.17',
          'value': '462'
        },
        {
          'dateStr': '2020-02-21',
          'dimension': '香辣',
          'amount': '7521.81',
          'value': '480'
        },
        {
          'dateStr': '2020-01-05',
          'dimension': '酸甜',
          'amount': '3746.31',
          'value': '145'
        },
        {
          'dateStr': '2020-03-16',
          'dimension': '酸甜',
          'amount': '3766.9',
          'value': '188'
        },
        {
          'dateStr': '2020-02-05',
          'dimension': '酸甜',
          'amount': '7566.84',
          'value': '258'
        },
        {
          'dateStr': '2020-01-12',
          'dimension': '清淡',
          'amount': '2874.23',
          'value': '142'
        },
        {
          'dateStr': '2020-01-16',
          'dimension': '香辣',
          'amount': '5450.29',
          'value': '245'
        },
        {
          'dateStr': '2020-03-28',
          'dimension': '香辣',
          'amount': '12312.45',
          'value': '307'
        },
        {
          'dateStr': '2020-02-15',
          'dimension': '酸甜',
          'amount': '5006.19',
          'value': '274'
        },
        {
          'dateStr': '2020-03-10',
          'dimension': '香辣',
          'amount': '9273.98',
          'value': '401'
        },
        {
          'dateStr': '2020-02-27',
          'dimension': '酸甜',
          'amount': '4060.89',
          'value': '211'
        },
        {
          'dateStr': '2020-02-03',
          'dimension': '香辣',
          'amount': '11063.98',
          'value': '515'
        },
        {
          'dateStr': '2020-01-09',
          'dimension': '酸甜',
          'amount': '2697.81',
          'value': '126'
        },
        {
          'dateStr': '2020-01-13',
          'dimension': '清淡',
          'amount': '2021.41',
          'value': '119'
        },
        {
          'dateStr': '2020-03-31',
          'dimension': '酸甜',
          'amount': '1787.97',
          'value': '134'
        },
        {
          'dateStr': '2020-02-28',
          'dimension': '清淡',
          'amount': '5972.17',
          'value': '262'
        },
        {
          'dateStr': '2020-01-26',
          'dimension': '清淡',
          'amount': '6571.62',
          'value': '191'
        },
        {
          'dateStr': '2020-01-14',
          'dimension': '香辣',
          'amount': '4115.6',
          'value': '289'
        },
        {
          'dateStr': '2020-03-20',
          'dimension': '香辣',
          'amount': '15043.83',
          'value': '386'
        },
        {
          'dateStr': '2020-02-02',
          'dimension': '香辣',
          'amount': '12486.61',
          'value': '496'
        },
        {
          'dateStr': '2020-02-19',
          'dimension': '香辣',
          'amount': '8245.2',
          'value': '422'
        },
        {
          'dateStr': '2020-03-03',
          'dimension': '香辣',
          'amount': '9880.9',
          'value': '406'
        },
        {
          'dateStr': '2020-02-19',
          'dimension': '清淡',
          'amount': '6105.37',
          'value': '250'
        },
        {
          'dateStr': '2020-01-04',
          'dimension': '清淡',
          'amount': '2813.22',
          'value': '140'
        },
        {
          'dateStr': '2020-03-01',
          'dimension': '清淡',
          'amount': '8636.58000000001',
          'value': '216'
        },
        {
          'dateStr': '2020-03-08',
          'dimension': '香辣',
          'amount': '11550.32',
          'value': '433'
        },
        {
          'dateStr': '2020-02-17',
          'dimension': '酸甜',
          'amount': '3753.92',
          'value': '220'
        },
        {
          'dateStr': '2020-03-19',
          'dimension': '香辣',
          'amount': '10078.57',
          'value': '320'
        },
        {
          'dateStr': '2020-02-11',
          'dimension': '香辣',
          'amount': '11831.6',
          'value': '497'
        },
        {
          'dateStr': '2020-02-11',
          'dimension': '清淡',
          'amount': '6376.01',
          'value': '294'
        },
        {
          'dateStr': '2020-03-25',
          'dimension': '酸甜',
          'amount': '2794.79',
          'value': '144'
        },
        {
          'dateStr': '2020-02-16',
          'dimension': '酸甜',
          'amount': '3044.26',
          'value': '232'
        },
        {
          'dateStr': '2020-01-11',
          'dimension': '香辣',
          'amount': '5451.72',
          'value': '271'
        },
        {
          'dateStr': '2020-01-04',
          'dimension': '酸甜',
          'amount': '2751.28',
          'value': '153'
        },
        {
          'dateStr': '2020-01-12',
          'dimension': '酸甜',
          'amount': '2444.12',
          'value': '152'
        },
        {
          'dateStr': '2020-01-03',
          'dimension': '酸甜',
          'amount': '3218.52',
          'value': '134'
        },
        {
          'dateStr': '2020-01-20',
          'dimension': '香辣',
          'amount': '4137.61',
          'value': '269'
        },
        {
          'dateStr': '2020-01-30',
          'dimension': '香辣',
          'amount': '10703.6',
          'value': '449'
        },
        {
          'dateStr': '2020-03-21',
          'dimension': '清淡',
          'amount': '6988.55',
          'value': '189'
        },
        {
          'dateStr': '2020-01-02',
          'dimension': '酸甜',
          'amount': '2620.5',
          'value': '146'
        },
        {
          'dateStr': '2020-01-31',
          'dimension': '清淡',
          'amount': '4979.28',
          'value': '266'
        },
        {
          'dateStr': '2020-02-10',
          'dimension': '香辣',
          'amount': '12542.41',
          'value': '500'
        },
        {
          'dateStr': '2020-01-30',
          'dimension': '酸甜',
          'amount': '5978.14',
          'value': '209'
        },
        {
          'dateStr': '2020-02-18',
          'dimension': '清淡',
          'amount': '5241.67',
          'value': '256'
        },
        {
          'dateStr': '2020-01-24',
          'dimension': '酸甜',
          'amount': '5128.06',
          'value': '167'
        },
        {
          'dateStr': '2020-01-16',
          'dimension': '酸甜',
          'amount': '2043.32',
          'value': '138'
        },
        {
          'dateStr': '2020-03-22',
          'dimension': '清淡',
          'amount': '6546.05',
          'value': '226'
        },
        {
          'dateStr': '2020-01-02',
          'dimension': '清淡',
          'amount': '3569.28',
          'value': '132'
        },
        {
          'dateStr': '2020-02-22',
          'dimension': '酸甜',
          'amount': '5863.33',
          'value': '224'
        },
        {
          'dateStr': '2020-02-26',
          'dimension': '清淡',
          'amount': '4447.97',
          'value': '268'
        },
        {
          'dateStr': '2020-03-14',
          'dimension': '酸甜',
          'amount': '4252.29',
          'value': '193'
        },
        {
          'dateStr': '2020-02-08',
          'dimension': '清淡',
          'amount': '7551.62',
          'value': '310'
        },
        {
          'dateStr': '2020-01-05',
          'dimension': '香辣',
          'amount': '7347.72',
          'value': '312'
        },
        {
          'dateStr': '2020-01-27',
          'dimension': '清淡',
          'amount': '6510.97',
          'value': '212'
        },
        {
          'dateStr': '2020-01-03',
          'dimension': '香辣',
          'amount': '5967.82',
          'value': '287'
        },
        {
          'dateStr': '2020-02-07',
          'dimension': '香辣',
          'amount': '14931.82',
          'value': '488'
        },
        {
          'dateStr': '2020-02-23',
          'dimension': '香辣',
          'amount': '10259.36',
          'value': '484'
        },
        {
          'dateStr': '2020-02-25',
          'dimension': '酸甜',
          'amount': '5396.71',
          'value': '213'
        },
        {
          'dateStr': '2020-03-26',
          'dimension': '香辣',
          'amount': '9490.38',
          'value': '305'
        },
        {
          'dateStr': '2020-03-22',
          'dimension': '酸甜',
          'amount': '7088.7',
          'value': '199'
        },
        {
          'dateStr': '2020-01-29',
          'dimension': '清淡',
          'amount': '6408.62',
          'value': '268'
        },
        {
          'dateStr': '2020-02-03',
          'dimension': '酸甜',
          'amount': '6868.69',
          'value': '230'
        },
        {
          'dateStr': '2020-01-20',
          'dimension': '清淡',
          'amount': '2842.11',
          'value': '120'
        },
        {
          'dateStr': '2020-02-22',
          'dimension': '香辣',
          'amount': '8711.75',
          'value': '466'
        },
        {
          'dateStr': '2020-01-21',
          'dimension': '香辣',
          'amount': '6810.8',
          'value': '273'
        },
        {
          'dateStr': '2020-03-11',
          'dimension': '清淡',
          'amount': '5024.21',
          'value': '181'
        },
        {
          'dateStr': '2020-03-17',
          'dimension': '清淡',
          'amount': '3843.35',
          'value': '197'
        },
        {
          'dateStr': '2020-01-27',
          'dimension': '香辣',
          'amount': '10147.96',
          'value': '386'
        },
        {
          'dateStr': '2020-02-27',
          'dimension': '香辣',
          'amount': '9322.47',
          'value': '439'
        },
        {
          'dateStr': '2020-01-28',
          'dimension': '清淡',
          'amount': '5519.33',
          'value': '229'
        },
        {
          'dateStr': '2020-03-21',
          'dimension': '香辣',
          'amount': '15832.5',
          'value': '395'
        },
        {
          'dateStr': '2020-02-20',
          'dimension': '清淡',
          'amount': '6270.68',
          'value': '298'
        },
        {
          'dateStr': '2020-03-23',
          'dimension': '酸甜',
          'amount': '4316.54',
          'value': '162'
        },
        {
          'dateStr': '2020-03-01',
          'dimension': '酸甜',
          'amount': '4300.98',
          'value': '216'
        },
        {
          'dateStr': '2020-02-15',
          'dimension': '香辣',
          'amount': '8472.39',
          'value': '534'
        },
        {
          'dateStr': '2020-01-16',
          'dimension': '清淡',
          'amount': '2094.55',
          'value': '127'
        },
        {
          'dateStr': '2020-03-13',
          'dimension': '清淡',
          'amount': '6914.18',
          'value': '250'
        },
        {
          'dateStr': '2020-01-21',
          'dimension': '酸甜',
          'amount': '3178.18',
          'value': '140'
        },
        {
          'dateStr': '2020-03-16',
          'dimension': '清淡',
          'amount': '4012.42',
          'value': '213'
        },
        {
          'dateStr': '2020-03-29',
          'dimension': '香辣',
          'amount': '6259.49',
          'value': '345'
        },
        {
          'dateStr': '2020-02-09',
          'dimension': '酸甜',
          'amount': '6711.88',
          'value': '228'
        },
        {
          'dateStr': '2020-02-18',
          'dimension': '酸甜',
          'amount': '3079.03',
          'value': '195'
        },
        {
          'dateStr': '2020-03-26',
          'dimension': '酸甜',
          'amount': '2727.62',
          'value': '146'
        },
        {
          'dateStr': '2020-03-09',
          'dimension': '酸甜',
          'amount': '3063.08',
          'value': '174'
        },
        {
          'dateStr': '2020-03-15',
          'dimension': '清淡',
          'amount': '4388.84',
          'value': '229'
        },
        {
          'dateStr': '2020-02-13',
          'dimension': '酸甜',
          'amount': '4129.96',
          'value': '262'
        },
        {
          'dateStr': '2020-01-07',
          'dimension': '酸甜',
          'amount': '2400.41',
          'value': '138'
        },
        {
          'dateStr': '2020-03-26',
          'dimension': '清淡',
          'amount': '5237.91',
          'value': '168'
        },
        {
          'dateStr': '2020-01-23',
          'dimension': '香辣',
          'amount': '14687.23',
          'value': '293'
        },
        {
          'dateStr': '2020-03-05',
          'dimension': '香辣',
          'amount': '11656.41',
          'value': '364'
        },
        {
          'dateStr': '2020-03-13',
          'dimension': '酸甜',
          'amount': '5592.5',
          'value': '184'
        },
        {
          'dateStr': '2020-02-14',
          'dimension': '酸甜',
          'amount': '5407.53',
          'value': '263'
        },
        {
          'dateStr': '2020-01-13',
          'dimension': '酸甜',
          'amount': '1867.61',
          'value': '129'
        },
        {
          'dateStr': '2020-01-10',
          'dimension': '香辣',
          'amount': '4824.72',
          'value': '271'
        },
        {
          'dateStr': '2020-03-11',
          'dimension': '香辣',
          'amount': '5148.23',
          'value': '328'
        },
        {
          'dateStr': '2020-01-29',
          'dimension': '酸甜',
          'amount': '6451.43',
          'value': '211'
        },
        {
          'dateStr': '2020-03-10',
          'dimension': '清淡',
          'amount': '2607.94',
          'value': '194'
        },
        {
          'dateStr': '2020-01-07',
          'dimension': '香辣',
          'amount': '6041.84',
          'value': '327'
        },
        {
          'dateStr': '2020-02-19',
          'dimension': '酸甜',
          'amount': '3993.67',
          'value': '182'
        },
        {
          'dateStr': '2020-01-18',
          'dimension': '酸甜',
          'amount': '1615.71',
          'value': '130'
        },
        {
          'dateStr': '2020-02-15',
          'dimension': '清淡',
          'amount': '6607.02',
          'value': '349'
        },
        {
          'dateStr': '2020-02-08',
          'dimension': '香辣',
          'amount': '9726.19',
          'value': '491'
        },
        {
          'dateStr': '2020-03-27',
          'dimension': '香辣',
          'amount': '7417.99',
          'value': '337'
        },
        {
          'dateStr': '2020-03-12',
          'dimension': '清淡',
          'amount': '5679.94',
          'value': '200'
        },
        {
          'dateStr': '2020-01-18',
          'dimension': '香辣',
          'amount': '4807.56',
          'value': '245'
        },
        {
          'dateStr': '2020-01-24',
          'dimension': '清淡',
          'amount': '5907.44',
          'value': '179'
        },
        {
          'dateStr': '2020-02-04',
          'dimension': '香辣',
          'amount': '7858.37',
          'value': '492'
        },
        {
          'dateStr': '2020-01-17',
          'dimension': '酸甜',
          'amount': '1917.5',
          'value': '116'
        },
        {
          'dateStr': '2020-02-01',
          'dimension': '香辣',
          'amount': '11648.86',
          'value': '447'
        },
        {
          'dateStr': '2020-01-07',
          'dimension': '清淡',
          'amount': '1932.48',
          'value': '160'
        },
        {
          'dateStr': '2020-03-28',
          'dimension': '酸甜',
          'amount': '3666.32',
          'value': '158'
        },
        {
          'dateStr': '2020-02-17',
          'dimension': '香辣',
          'amount': '7521.99',
          'value': '416'
        },
        {
          'dateStr': '2020-03-06',
          'dimension': '香辣',
          'amount': '12391.22',
          'value': '443'
        },
        {
          'dateStr': '2020-01-01',
          'dimension': '清淡',
          'amount': '4334.56',
          'value': '169'
        },
        {
          'dateStr': '2020-01-10',
          'dimension': '酸甜',
          'amount': '1269.31',
          'value': '141'
        },
        {
          'dateStr': '2020-02-14',
          'dimension': '香辣',
          'amount': '10831.59',
          'value': '580'
        },
        {
          'dateStr': '2020-03-13',
          'dimension': '香辣',
          'amount': '9487.11',
          'value': '368'
        },
        {
          'dateStr': '2020-01-21',
          'dimension': '清淡',
          'amount': '3426.22',
          'value': '138'
        },
        {
          'dateStr': '2020-01-06',
          'dimension': '香辣',
          'amount': '4758.85',
          'value': '289'
        },
        {
          'dateStr': '2020-01-09',
          'dimension': '香辣',
          'amount': '7508.15',
          'value': '285'
        },
        {
          'dateStr': '2020-02-07',
          'dimension': '清淡',
          'amount': '10793.45',
          'value': '351'
        },
        {
          'dateStr': '2020-02-28',
          'dimension': '酸甜',
          'amount': '3418.89',
          'value': '200'
        },
        {
          'dateStr': '2020-01-19',
          'dimension': '酸甜',
          'amount': '1702.85',
          'value': '119'
        },
        {
          'dateStr': '2020-02-25',
          'dimension': '香辣',
          'amount': '7931.65',
          'value': '457'
        },
        {
          'dateStr': '2020-02-04',
          'dimension': '清淡',
          'amount': '5796.88',
          'value': '304'
        },
        {
          'dateStr': '2020-03-12',
          'dimension': '酸甜',
          'amount': '5266.08',
          'value': '180'
        },
        {
          'dateStr': '2020-01-15',
          'dimension': '酸甜',
          'amount': '1493.71',
          'value': '152'
        },
        {
          'dateStr': '2020-03-29',
          'dimension': '酸甜',
          'amount': '3198.78',
          'value': '178'
        },
        {
          'dateStr': '2020-02-11',
          'dimension': '酸甜',
          'amount': '4907.09',
          'value': '240'
        },
        {
          'dateStr': '2020-01-08',
          'dimension': '酸甜',
          'amount': '2317.95',
          'value': '141'
        },
        {
          'dateStr': '2020-03-23',
          'dimension': '清淡',
          'amount': '6520.18',
          'value': '196'
        },
        {
          'dateStr': '2020-02-24',
          'dimension': '清淡',
          'amount': '6145.46',
          'value': '284'
        },
        {
          'dateStr': '2020-03-20',
          'dimension': '清淡',
          'amount': '5477.81',
          'value': '196'
        },
        {
          'dateStr': '2020-03-06',
          'dimension': '酸甜',
          'amount': '7223.83',
          'value': '231'
        },
        {
          'dateStr': '2020-03-19',
          'dimension': '酸甜',
          'amount': '5397.01',
          'value': '150'
        },
        {
          'dateStr': '2020-03-18',
          'dimension': '香辣',
          'amount': '11361.77',
          'value': '323'
        },
        {
          'dateStr': '2020-02-18',
          'dimension': '香辣',
          'amount': '8391.64',
          'value': '456'
        },
        {
          'dateStr': '2020-01-25',
          'dimension': '香辣',
          'amount': '9019.77',
          'value': '326'
        },
        {
          'dateStr': '2020-01-08',
          'dimension': '清淡',
          'amount': '2344.19',
          'value': '136'
        },
        {
          'dateStr': '2020-01-06',
          'dimension': '清淡',
          'amount': '2251.92',
          'value': '153'
        },
        {
          'dateStr': '2020-01-22',
          'dimension': '香辣',
          'amount': '6215.73',
          'value': '230'
        },
        {
          'dateStr': '2020-01-26',
          'dimension': '酸甜',
          'amount': '4244.35',
          'value': '157'
        },
        {
          'dateStr': '2020-03-25',
          'dimension': '香辣',
          'amount': '6529.81',
          'value': '320'
        },
        {
          'dateStr': '2020-03-17',
          'dimension': '香辣',
          'amount': '9569.55',
          'value': '357'
        },
        {
          'dateStr': '2020-03-02',
          'dimension': '香辣',
          'amount': '10121.02',
          'value': '365'
        },
        {
          'dateStr': '2020-03-08',
          'dimension': '酸甜',
          'amount': '3231.77',
          'value': '196'
        }
      ],
      dictMap: {
        amount: '付费金额',
        value: '人数'
      },
      chartData: {}
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
      // axios.get('http://172.16.8.174:9876/report/data', {
      //   headers: {
      //     kind: val
      //   }
      // }).then(response => {
      //   if (response.status === 200) {
      //     console.log(response.data)
      //   }
      // })
    },
    handleList() {
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
              console.log(value)
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
      console.log(value)
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
